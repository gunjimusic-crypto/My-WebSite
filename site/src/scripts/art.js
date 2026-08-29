// Seeded generative artwork (matches the approved draft) + scroll reveal.
export function seedRand(str) {
  var h = 2166136261;
  for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return function () {
    h += 0x6D2B79F5; var t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function pick(rnd, arr) { return arr[Math.floor(rnd() * arr.length)]; }

export function albumArt(seed) {
  var rnd = seedRand(seed), W = 480, H = 270, s = '';
  var cols = ['#5F6E77', '#B7A57E', '#1B1A17'];
  s += '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="#DAD5C9"/>';
  var bx = Math.floor(rnd() * 180), bw = 120 + Math.floor(rnd() * 180);
  s += '<rect x="' + bx + '" y="' + Math.floor(rnd() * 80) + '" width="' + bw + '" height="' + (140 + Math.floor(rnd() * 100)) + '" fill="' + pick(rnd, cols) + '" opacity="0.07"/>';
  var cx = Math.floor(rnd() * W), cy = 60 + Math.floor(rnd() * 140), r = 70 + Math.floor(rnd() * 90);
  s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" stroke="#1B1A17" stroke-width="1" opacity="0.16" fill="none"/>';
  var ly = 120 + Math.floor(rnd() * 90);
  s += '<line x1="0" y1="' + ly + '" x2="' + W + '" y2="' + ly + '" stroke="#9C9A90" stroke-width="1" opacity="0.5"/>';
  for (var k = 0; k < 6; k++) { var tx = 40 + k * 70 + Math.floor(rnd() * 20); s += '<circle cx="' + tx + '" cy="' + ly + '" r="1.6" fill="#1B1A17" opacity="0.5"/>'; }
  var vx = Math.floor(rnd() * 160), n = 8 + Math.floor(rnd() * 8);
  for (var j = 0; j < n; j++) { var x = vx + j * 7 + Math.floor(rnd() * 4); var y1 = 90 + Math.floor(rnd() * 70); var y2 = y1 + 40 + Math.floor(rnd() * 90); s += '<line x1="' + x + '" y1="' + y1 + '" x2="' + x + '" y2="' + y2 + '" stroke="#1B1A17" stroke-width="1" opacity="' + (0.1 + rnd() * 0.28).toFixed(2) + '"/>'; }
  for (var d = 0; d < 9; d++) { s += '<circle cx="' + Math.floor(rnd() * W) + '" cy="' + Math.floor(rnd() * H) + '" r="' + (1 + rnd() * 1.6).toFixed(1) + '" fill="#1B1A17" opacity="' + (0.25 + rnd() * 0.4).toFixed(2) + '"/>'; }
  var gx = 300 + Math.floor(rnd() * 80), gy = 150 + Math.floor(rnd() * 50);
  s += '<rect x="' + gx + '" y="' + gy + '" width="60" height="60" fill="#5F6E77" opacity="0.5"/>';
  s += '<rect x="' + (gx + 30) + '" y="' + (gy + 25) + '" width="55" height="55" fill="#1B1A17" opacity="0.4"/>';
  s += '<rect x="' + (gx - 15) + '" y="' + (gy + 15) + '" width="30" height="30" fill="#B7A57E" opacity="0.6"/>';
  var rx = 40 + Math.floor(rnd() * 160), ry = 50 + Math.floor(rnd() * 60);
  s += '<line x1="' + rx + '" y1="' + ry + '" x2="' + (rx + 60) + '" y2="' + ry + '" stroke="#AE3B2C" stroke-width="1.4" opacity="0.85"/>';
  s += '<circle cx="' + rx + '" cy="' + ry + '" r="2.6" fill="#AE3B2C"/>';
  return '<svg class="art" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice" fill="none">' + s + '</svg>';
}

// Fill the home artwork band with a dense vertical-line field + dots.
export function populateArtband() {
  var al = document.getElementById('art-lines'), ad = document.getElementById('art-dots');
  if (!al || !ad) return;
  var lines = '', dots = '';
  for (var i = 0; i < 70; i++) { var x = 120 + i * 13 + Math.floor(Math.random() * 6); var y1 = 180 + Math.floor(Math.random() * 120); var y2 = y1 + 60 + Math.floor(Math.random() * 160); lines += '<line x1="' + x + '" y1="' + y1 + '" x2="' + x + '" y2="' + y2 + '" stroke="#1B1A17" stroke-width="1" opacity="' + (0.06 + Math.random() * 0.22).toFixed(2) + '"/>'; }
  for (var d = 0; d < 40; d++) { dots += '<circle cx="' + Math.floor(Math.random() * 1200) + '" cy="' + (180 + Math.floor(Math.random() * 180)) + '" r="' + (1 + Math.random() * 1.8).toFixed(1) + '" fill="#1B1A17" opacity="' + (0.2 + Math.random() * 0.4).toFixed(2) + '"/>'; }
  al.innerHTML = lines; ad.innerHTML = dots;
}

export function initReveal(sel) {
  var el = document.querySelector(sel); if (!el) return;
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } });
    }, { threshold: 0.15 });
    io.observe(el);
  } else { el.classList.add('in'); }
}
