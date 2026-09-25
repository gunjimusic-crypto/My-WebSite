// All user-facing UI strings, per locale.
// The site currently runs English-only (see src/pages/index.astro + the hidden
// language switch in Base.astro). The Japanese (ja) strings below are kept
// up to date so Japanese can be switched back on later without rewriting copy.
export const locales = ['ja', 'en'];

export const ui = {
  ja: {
    meta: {
      homeTitle: 'Nari-Aki Gunji — Official Website',
      worksTitle: '作品 — Nari-Aki Gunji',
      bioTitle: 'バイオグラフィー — Nari-Aki Gunji',
      contactTitle: 'コンタクト — Nari-Aki Gunji',
      notesTitle: 'ノート — Nari-Aki Gunji',
      shopTitle: 'ショップ — Nari-Aki Gunji'
    },
    role: '作曲家・編曲家',
    nav: { home: 'ホーム', works: '作品', shop: 'ショップ', bio: 'バイオ', contact: 'コンタクト', notes: 'ノート' },
    hero: {
      subLines: ['構築美と無機的なサウンド。', '流麗な和声と有機的な旋律。'],
      tags: ['オーケストラ', 'IDM', 'Math Rock', '実験音楽'],
      portrait: 'PORTRAIT — 1:1'
    },
    artPlate: 'PL. 02 — untitled study, mixed media',
    bioLead: {
      eyebrow: 'プロフィール',
      h2: 'Nari-Aki Gunji について',
      p: '東京を拠点に、オーケストラから電子音楽・実験音楽までを横断する作曲家・編曲家。',
      link: 'プロフィールを読む'
    },
    works: {
      eyebrow: '作品 — Portfolio',
      tabSolo: '個人制作', tabComm: '委嘱作品',
      undiscHead: 'クレジット非公開作品',
      undiscDesc: '契約上タイトルを掲示できない作品です。担当区分と年のみ記載しています。',
      undiscName: '非公開作品',
      videoTag: '映像',
      selfHost: '自主音源 — 直接再生'
    },
    bio: {
      eyebrow: 'バイオグラフィー',
      name: 'Nari-Aki Gunji',
      agePrefix: '', ageSuffix: '歳',
      metaBorn: ' · 2004.04.15 栃木県生まれ',
      p1: '郡司ナリアキは東京を拠点に活動する作曲家・編曲家。',
      p2: '東京理科大学で数学を学ぶかたわら、2023年に作曲を開始。個人制作のアニメーションやショートドラマの作編曲を経て、2024年に株式会社Team-MAXで高梨康治（『フェアリーテイル』『NARUTO』等）に師事し、『ゾンビランドサガ』『ブループロトコル：スターレゾナンス』『異世界のんびり農家』などの音楽制作に参加。',
      p3: '2026年に独立。現在は個人の芸術活動を軸に、実験音楽やオーケストラ・吹奏楽作品、インディーゲームへの楽曲提供などを手がけている。',
      portrait: 'PORTRAIT — 4:5'
    },
    contact: {
      eyebrow: 'コンタクト',
      lead: '作曲・出演依頼、その他ご遠慮なくご相談ください。',
      note: 'クリックでメールが開きます'
    },
    notes: {
      eyebrow: 'ノート — 楽曲解説と余談',
      back: 'ノート一覧へ',
      studioNote: '制作ノート',
      mainVideo: 'メイン動画',
      empty: 'まだノートはありません。'
    },
    shop: {
      eyebrow: 'ショップ',
      h2: 'Stems & MIDI',
      p: '選りすぐりの楽曲のマルチトラック（Stem）とMIDIデータを Gumroad で配布しています。',
      cta: 'Gumroad のショップを見る',
      note: '新しいタブで Gumroad が開きます'
    }
  },
  en: {
    meta: {
      homeTitle: 'Nari-Aki Gunji — Official Website',
      worksTitle: 'Works — Nari-Aki Gunji',
      bioTitle: 'Biography — Nari-Aki Gunji',
      contactTitle: 'Contact — Nari-Aki Gunji',
      notesTitle: 'Notes — Nari-Aki Gunji',
      shopTitle: 'Shop — Nari-Aki Gunji'
    },
    role: 'Composer / Arranger',
    nav: { home: 'Home', works: 'Works', shop: 'Shop', bio: 'Bio', contact: 'Contact', notes: 'Notes' },
    hero: {
      subLines: ['Architectural beauty, inorganic texture.', 'Flowing harmony, organic melody.'],
      tags: ['Orchestral', 'IDM', 'Math Rock', 'Experimental'],
      portrait: 'PORTRAIT — 1:1'
    },
    artPlate: 'PL. 02 — untitled study, mixed media',
    bioLead: {
      eyebrow: 'Profile',
      h2: 'About Nari-Aki Gunji',
      p: 'A Tokyo-based composer and arranger working across orchestral, electronic, and experimental music.',
      link: 'Read the full bio'
    },
    works: {
      eyebrow: 'Works — Portfolio',
      tabSolo: 'Solo works', tabComm: 'Commissioned',
      undiscHead: 'Undisclosed / under NDA',
      undiscDesc: 'Titles withheld under agreement. Only role and year are listed.',
      undiscName: 'Undisclosed title',
      videoTag: 'Video',
      selfHost: 'Self-hosted — direct play'
    },
    bio: {
      eyebrow: 'Biography',
      name: 'Nari-Aki Gunji',
      agePrefix: 'Age ', ageSuffix: '',
      metaBorn: ' · Born 2004.04.15 · Tochigi, Japan',
      p1: 'Nari-Aki Gunji is a composer and arranger based in Tokyo, Japan.',
      p2: 'While studying mathematics at Tokyo University of Science, he began composing in 2023 — writing and arranging for independent animation and short dramas. In 2024 he joined Team-MAX, studying under Yasuharu Takanashi (known for Fairy Tail and Naruto), and took part in the music production for titles including Zombie Land Saga, Blue Protocol: Star Resonance, and Farming Life in Another World.',
      p3: 'Since becoming independent from Team-MAX in 2026, he has centered his practice on his own artistic work — experimental music and pieces for orchestra and wind ensemble, alongside music for indie games.',
      portrait: 'PORTRAIT — 4:5'
    },
    contact: {
      eyebrow: 'Contact',
      lead: 'For composition and performance inquiries, or anything else — please feel free to get in touch.',
      note: 'Click to open your mail client'
    },
    notes: {
      eyebrow: 'Notes — commentary & essays',
      back: 'Back to notes',
      studioNote: 'Studio notes',
      mainVideo: 'Main video',
      empty: 'No notes yet.'
    },
    shop: {
      eyebrow: 'Shop',
      h2: 'Stems & MIDI',
      p: 'Multitrack stems and MIDI data from selected works — available for download on Gumroad.',
      cta: 'Visit the shop on Gumroad',
      note: 'Opens Gumroad in a new tab'
    }
  }
};

export function other(lang) { return lang === 'ja' ? 'en' : 'ja'; }
