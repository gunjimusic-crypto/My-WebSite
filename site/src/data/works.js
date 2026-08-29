// Works catalogue. Edit here to add/remove albums and tracks.
//   track.media : 'video' (YouTube embed) or 'audio' (self-hosted file).
//   track.src   : for 'audio', the URL of the uploaded audio file (empty = placeholder).
//   album.noLinks: true → no external links; shows a "self-hosted" label instead.
export const solo = [
  { title: '未発表スケッチ', year: '2025', seed: 'sketch', noLinks: true,
    cat: { ja: '自主音源 / 未発表', en: 'Self-hosted / Unreleased' },
    tracks: [
      { n: '01', t: { ja: 'スケッチ 1', en: 'Sketch 1' }, dur: '2:44', media: 'audio', src: '' },
      { n: '02', t: { ja: 'スケッチ 2', en: 'Sketch 2' }, dur: '3:10', media: 'audio', src: '' }
    ] },
  { title: 'drift', year: '2024', seed: 'drift',
    cat: { ja: '自主制作 / EP', en: 'Self-released / EP' },
    tracks: [
      { n: '01', t: { ja: '漂流 I', en: 'drift I' }, dur: '4:12', media: 'video' },
      { n: '02', t: { ja: '漂流 II', en: 'drift II' }, dur: '3:38', media: 'audio', src: '' },
      { n: '03', t: { ja: '静止', en: 'still' }, dur: '5:02', media: 'audio', src: '' }
    ] },
  { title: '石の記譜法', year: '2024', seed: 'stone',
    cat: { ja: '自主制作 / インスタレーション', en: 'Self-released / Installation' },
    tracks: [
      { n: '01', t: { ja: '石の記譜法', en: 'Notation for stone' }, dur: '8:20', media: 'video' }
    ] },
  { title: 'Heterophony No.1', year: '2023', seed: 'hetero',
    cat: { ja: '自主制作 / 空間音響', en: 'Self-released / Spatial' },
    tracks: [
      { n: '01', t: { ja: '第 I 部', en: 'Part I' }, dur: '6:44', media: 'audio', src: '' },
      { n: '02', t: { ja: '第 II 部', en: 'Part II' }, dur: '7:10', media: 'audio', src: '' }
    ] },
  { title: '余白のためのエチュード', year: '2023', seed: 'etude',
    cat: { ja: '自主制作 / ピアノ', en: 'Self-released / Piano' },
    tracks: [
      { n: '01', t: { ja: 'エチュード 1', en: 'Étude 1' }, dur: '2:58', media: 'audio', src: '' },
      { n: '02', t: { ja: 'エチュード 2', en: 'Étude 2' }, dur: '3:24', media: 'video' }
    ] }
];

export const comm = [
  { title: '作品タイトル 01', year: '2024', seed: 'film1',
    cat: { ja: '映像作品 / 劇伴', en: 'Film / Score' },
    tracks: [
      { n: '01', t: { ja: 'メインテーマ', en: 'Main theme' }, dur: '2:30', media: 'video' },
      { n: '02', t: { ja: '劇伴 M-02', en: 'Cue M-02' }, dur: '1:48', media: 'audio', src: '' }
    ] },
  { title: '作品タイトル 02', year: '2023', seed: 'cm1',
    cat: { ja: 'CM / 楽曲提供', en: 'Commercial / Music' },
    tracks: [
      { n: '01', t: { ja: '30 秒版', en: '30s version' }, dur: '0:30', media: 'video' }
    ] }
];

export const undisclosed = [
  { tag: { ja: 'TVアニメ / 劇伴', en: 'TV anime / Score' }, y: '2023' },
  { tag: { ja: 'ゲーム / 楽曲提供', en: 'Game / Music' }, y: '2023' },
  { tag: { ja: 'CM / 編曲', en: 'Commercial / Arr.' }, y: '2022' },
  { tag: { ja: '映像 / SE', en: 'Film / SFX' }, y: '2022' }
];
