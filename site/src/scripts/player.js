// Album player for the works page. Reads each track's media/duration/src from
// the rendered DOM (data-* attributes), so it needs no copy of the data.
// Self-hosted audio (data-media="audio" + data-src) plays for real; tracks
// without a src run a simulated timeline so the behaviour is visible in preview.
const PLAY = '<svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z" fill="#1B1A17"/></svg>';
const PAUSE = '<svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" fill="#1B1A17"/><rect x="14" y="5" width="4" height="14" fill="#1B1A17"/></svg>';
const PLAYSM = '<svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z" fill="#5E5C55"/></svg>';
const EQ = '<span class="eq"><i></i><i></i><i></i></span>';

function parseDur(s) { var p = (s || '0:00').split(':'); return (+p[0]) * 60 + (+p[1] || 0); }
function fmt(t) { t = Math.max(0, Math.floor(t || 0)); var m = Math.floor(t / 60), s = t % 60; return m + ':' + (s < 10 ? '0' : '') + s; }

export function initWorks() {
  // ----- tabs -----
  document.querySelectorAll('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var name = tab.getAttribute('data-tab');
      document.querySelectorAll('.tab').forEach(function (x) { x.classList.toggle('on', x === tab); });
      document.querySelectorAll('.tabpane').forEach(function (p) { p.classList.toggle('on', p.getAttribute('data-pane') === name); });
    });
  });

  // ----- player -----
  var state = { al: -1, tk: -1, playing: false, ct: 0, dur: 0 };
  var raf = null, lastTs = 0, audioEl = new Audio();
  var scrub = { active: false, bar: null };

  function mediaEl(ai) { return document.querySelector('.album-media[data-al="' + ai + '"]'); }
  function trackEl(ai, ti) { return document.querySelector('.track[data-al="' + ai + '"][data-tk="' + ti + '"]'); }
  function trackCount(ai) { return document.querySelectorAll('.track[data-al="' + ai + '"]').length; }
  function curEl() { return (state.al >= 0 && state.tk >= 0) ? trackEl(state.al, state.tk) : null; }
  function curMedia() { var e = curEl(); return e ? e.getAttribute('data-media') : null; }
  function curSrc() { var e = curEl(); return e ? (e.getAttribute('data-src') || '') : ''; }
  function curTitle() { var e = curEl(); if (!e) return ''; var s = e.querySelector('.tk-title span'); return s ? s.textContent : ''; }
  function realAudio() { return curMedia() === 'audio' && !!curSrc(); }

  function updateTransport() {
    var media = mediaEl(state.al); if (!media) return;
    var fill = media.querySelector('.tp-fill'), cur = media.querySelector('.tp-time.cur'),
        durEl = media.querySelector('.tp-time.dur'), btn = media.querySelector('.tp-btn');
    var pct = state.dur ? (state.ct / state.dur * 100) : 0;
    if (fill) fill.style.width = Math.min(100, pct) + '%';
    if (cur) cur.textContent = fmt(state.ct);
    if (durEl) durEl.textContent = fmt(state.dur);
    if (btn) btn.innerHTML = state.playing ? PAUSE : PLAY;
  }
  function tick(ts) {
    if (!state.playing) { raf = null; return; }
    if (!lastTs) lastTs = ts;
    var dt = (ts - lastTs) / 1000; lastTs = ts;
    if (!realAudio() && !scrub.active) { state.ct += dt; if (state.ct >= state.dur) { nextTrack(); return; } }
    updateTransport();
    raf = requestAnimationFrame(tick);
  }
  function startTicker() { lastTs = 0; if (raf) cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); }
  function stopTicker() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  function refresh() {
    document.querySelectorAll('.track').forEach(function (li) {
      var a = +li.getAttribute('data-al'), t = +li.getAttribute('data-tk');
      var here = a === state.al && t === state.tk;
      li.classList.toggle('is-playing', here);
      li.querySelector('.tk-play').innerHTML = (here && state.playing) ? EQ : PLAYSM;
    });
    document.querySelectorAll('.album-media').forEach(function (media) {
      var ai = +media.getAttribute('data-al');
      var vid = media.querySelector('.video-layer'), np = media.querySelector('.np'),
          npt = media.querySelector('.np-title'), tp = media.querySelector('.transport');
      var isThis = state.al === ai && state.tk >= 0;
      media.classList.toggle('playing-here', isThis);
      if (isThis) {
        var isVideo = curMedia() === 'video';
        vid.classList.toggle('show', isVideo && state.playing);
        np.classList.toggle('show', isVideo && state.playing);
        npt.textContent = curTitle();
        tp.classList.toggle('show', !isVideo);
      } else { vid.classList.remove('show'); np.classList.remove('show'); tp.classList.remove('show'); }
    });
    updateTransport();
  }

  function nextTrack() {
    if (state.tk + 1 < trackCount(state.al)) { selectTrack(state.al, state.tk + 1); }
    else { state.playing = false; state.ct = state.dur; stopTicker(); refresh(); }
  }
  function selectTrack(ai, ti) {
    state.al = ai; state.tk = ti; state.ct = 0;
    var li = trackEl(ai, ti);
    state.dur = parseDur(li.getAttribute('data-dur'));
    state.playing = true;
    if (li.getAttribute('data-media') === 'audio' && li.getAttribute('data-src')) {
      audioEl.src = li.getAttribute('data-src'); try { audioEl.currentTime = 0; } catch (e) {} audioEl.play().catch(function () {});
    } else { try { audioEl.pause(); } catch (e) {} }
    startTicker(); refresh();
  }
  function togglePlay() {
    state.playing = !state.playing;
    if (state.playing) { if (realAudio()) audioEl.play().catch(function () {}); startTicker(); }
    else { if (realAudio()) audioEl.pause(); stopTicker(); }
    refresh();
  }
  function playTrack(ai, ti) {
    if (state.al === ai && state.tk === ti) { togglePlay(); return; }
    selectTrack(ai, ti);
  }

  audioEl.addEventListener('timeupdate', function () {
    if (realAudio() && !scrub.active) { state.ct = audioEl.currentTime; if (audioEl.duration) state.dur = audioEl.duration; updateTransport(); }
  });
  audioEl.addEventListener('ended', function () { if (realAudio()) nextTrack(); });

  // ----- seek: click + press-drag following pointer X -----
  function seekFromEvent(clientX) {
    var bar = scrub.bar; if (!bar || !state.dur) return;
    var r = bar.getBoundingClientRect();
    var ratio = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    state.ct = ratio * state.dur;
    if (realAudio()) { try { audioEl.currentTime = state.ct; } catch (e) {} }
    updateTransport();
  }
  document.addEventListener('pointerdown', function (e) {
    var bar = e.target.closest('.tp-bar'); if (!bar) return;
    var mb = bar.closest('.album-media');
    if (+mb.getAttribute('data-al') !== state.al || !state.dur) return;
    scrub.active = true; scrub.bar = bar;
    document.body.style.userSelect = 'none';
    seekFromEvent(e.clientX); e.preventDefault();
  });
  document.addEventListener('pointermove', function (e) { if (scrub.active) seekFromEvent(e.clientX); });
  function endScrub() { if (scrub.active) { scrub.active = false; scrub.bar = null; document.body.style.userSelect = ''; } }
  document.addEventListener('pointerup', endScrub);
  document.addEventListener('pointercancel', endScrub);

  document.addEventListener('click', function (e) {
    if (e.target.closest('.tp-bar')) return;
    var btn = e.target.closest('.tp-btn');
    if (btn) { if (state.tk >= 0) togglePlay(); return; }
    var tk = e.target.closest('.track');
    if (tk) { playTrack(+tk.getAttribute('data-al'), +tk.getAttribute('data-tk')); return; }
    var media = e.target.closest('.album-media');
    if (media) { var aid = +media.getAttribute('data-al'); playTrack(aid, (state.al === aid && state.tk >= 0) ? state.tk : 0); return; }
  });
}
