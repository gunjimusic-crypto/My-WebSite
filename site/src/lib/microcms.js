// Build-time notes source. If the microCMS env vars are set (in Vercel),
// notes are fetched from the CMS; otherwise a small sample set is used so the
// site still builds and previews. GET only, key used at build — never shipped.
const DOMAIN = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const KEY = import.meta.env.MICROCMS_API_KEY;

const SAMPLE = [
  {
    slug: 'on-drawing-sound',
    noteDate: '2024-11-04',
    titleJa: '音の設計図について',
    titleEn: 'On drawing sound',
    thumbnail: null,
    mainVideoJa: '',
    mainVideoEn: '',
    bodyJa: '<p>この動画では、最近仕上げた一曲を題材に、頭の中にある&ldquo;図面&rdquo;をどう音に翻訳していくのかを話しました。以下はその補足と、動画では触れきれなかった余談です。</p><h2>はじめに引く一本の線</h2><p>曲を書くとき、最初に決めるのはメロディでもコードでもなく、全体を貫く一本の&ldquo;軸線&rdquo;のようなものです。建築の図面でいう基準線に近い。ここが決まると、あとの要素は自然と位置が定まっていきます。</p><h2>余談 — 図面が壊れる瞬間</h2><p>もっとも面白いのは、引いた図面が途中で壊れる瞬間です。計画どおりにいかない不協和や偶然のノイズこそ、その曲を&ldquo;その曲&rdquo;たらしめる。</p>',
    bodyEn: '<p>In this video I use a recent piece to walk through how I translate the blueprint in my head into sound. What follows are footnotes — and a few tangents the video did not have room for.</p><h2>The first line</h2><p>When I write, the first thing I fix is neither melody nor chord — it is a single axis running through the whole piece, close to a datum line in architecture. Once it is set, everything else finds its place.</p><h2>Aside — when the plan breaks</h2><p>The most interesting moment is when the plan breaks mid-way. The dissonance that resists the design, the accidental noise — that is what makes a piece itself.</p>'
  },
  {
    slug: 'silence-as-material',
    noteDate: '2024-08-18',
    titleJa: '沈黙は素材である',
    titleEn: 'Silence as material',
    thumbnail: null,
    mainVideoJa: '',
    mainVideoEn: '',
    bodyJa: '<p>鳴っていない時間をどう設計するか。余白と間についての短い覚書。</p><p>音を置くことと同じくらい、音を置かないことに時間をかけます。</p>',
    bodyEn: '<p>Designing the time that does not sound — a short note on negative space.</p><p>I spend as much time deciding where not to place a sound as where to place one.</p>'
  },
  {
    slug: 'between-commerce-and-experiment',
    noteDate: '2024-05-02',
    titleJa: '商業と実験のあいだで',
    titleEn: 'Between commerce and experiment',
    thumbnail: null,
    mainVideoJa: '',
    mainVideoEn: '',
    bodyJa: '<p>生計を立てる音楽と、やりたい音楽。その距離をどう扱っているか。</p>',
    bodyEn: '<p>The music that pays and the one I want to make — how I hold the distance between them.</p>'
  }
];

export async function getNotes() {
  // No sample notes on the live site: show real microCMS notes only.
  // Until a note is published in microCMS, the Notes page is intentionally empty.
  if (!DOMAIN || !KEY) return [];
  try {
    const res = await fetch(
      `https://${DOMAIN}.microcms.io/api/v1/notes?limit=100&orders=-noteDate`,
      { headers: { 'X-MICROCMS-API-KEY': KEY } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data && data.contents) ? data.contents : [];
  } catch (e) {
    return [];
  }
}

export function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d)) return String(iso).slice(0, 10);
  const m = String(d.getMonth() + 1).padStart(2, '0');
  return d.getFullYear() + '.' + m;
}

export function excerpt(html, n = 78) {
  if (!html) return '';
  const text = String(html).replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
  return text.length > n ? text.slice(0, n) + '…' : text;
}

// Convert a YouTube watch/share URL to an embed URL; null if not YouTube.
export function ytEmbed(url) {
  if (!url) return null;
  const m = String(url).match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}
