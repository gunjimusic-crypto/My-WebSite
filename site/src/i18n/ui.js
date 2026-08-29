// All user-facing UI strings, per locale.
export const locales = ['ja', 'en'];

export const ui = {
  ja: {
    meta: {
      homeTitle: 'Nari-Aki Gunji — 作曲家',
      worksTitle: '作品 — Nari-Aki Gunji',
      bioTitle: 'バイオグラフィー — Nari-Aki Gunji',
      contactTitle: 'コンタクト — Nari-Aki Gunji',
      notesTitle: 'ノート — Nari-Aki Gunji'
    },
    role: '作曲家',
    nav: { home: 'ホーム', works: '作品', bio: 'バイオ', contact: 'コンタクト', notes: 'ノート' },
    hero: {
      sub: '作曲家。商業音楽の現場で研鑽を積みながら、映像・空間・身体と結びつく音楽を制作している。',
      tags: ['作曲', 'サウンドデザイン', '空間音響'],
      portrait: 'PORTRAIT — 1:1'
    },
    artPlate: 'PL. 02 — untitled study, mixed media',
    bioLead: {
      eyebrow: 'バイオグラフィー',
      h2: '図面を引くように、音を組む。',
      p: '郡司成明は東京を拠点に活動する作曲家。同人音楽での制作から始まり、映像への楽曲提供を経て、商業音楽の現場で研鑽を積んでいる。',
      link: 'プロフィールを読む'
    },
    featured: {
      kicker: '最新のノート — 解説・余談',
      h2: '音の設計図について ― 制作ノート 01',
      p: 'ひとつの曲がどんな“図面”から立ち上がっていくのか。最新作を題材に、短い動画で顔を出して話しました。',
      link: 'ノートを読む',
      videoLabel: '▶ メイン動画 — 顔出し解説'
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
      h2: '図面を引くように、音を組む。',
      p1: '郡司成明は東京を拠点に活動する作曲家。同人音楽での制作からキャリアを始め、映像作品への楽曲提供を経て、現在は商業音楽の現場で研鑽を積んでいる。',
      p2: 'その一方で、前衛的な響きや空間・身体と結びつく音楽を自主制作として探求している。〔ここに経歴・受賞歴・参加作品などを追記〕',
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
    }
  },
  en: {
    meta: {
      homeTitle: 'Nari-Aki Gunji — Composer',
      worksTitle: 'Works — Nari-Aki Gunji',
      bioTitle: 'Biography — Nari-Aki Gunji',
      contactTitle: 'Contact — Nari-Aki Gunji',
      notesTitle: 'Notes — Nari-Aki Gunji'
    },
    role: 'Composer',
    nav: { home: 'Home', works: 'Works', bio: 'Bio', contact: 'Contact', notes: 'Notes' },
    hero: {
      sub: 'Composer. Building a practice at the intersection of image, space, and the body, while working across commercial music.',
      tags: ['Composition', 'Sound design', 'Spatial audio'],
      portrait: 'PORTRAIT — 1:1'
    },
    artPlate: 'PL. 02 — untitled study, mixed media',
    bioLead: {
      eyebrow: 'About',
      h2: 'Composing sound the way one drafts a plan.',
      p: 'Nari-Aki Gunji is a Tokyo-based composer — from independent music, through scoring for image, to honing his craft in commercial production.',
      link: 'Read the full bio'
    },
    featured: {
      kicker: 'Latest note — commentary',
      h2: 'On drawing sound ― Studio notes 01',
      p: 'How a single piece rises from its blueprint. A short talk to camera, using a recent work as the case study.',
      link: 'Read the note',
      videoLabel: '▶ Main video — to camera'
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
      h2: 'Composing sound the way one drafts a plan.',
      p1: 'Nari-Aki Gunji is a Tokyo-based composer. Starting out in independent music and scoring for animation, he now hones his craft across commercial music production.',
      p2: 'Alongside this, his self-directed work explores avant-garde sound and music tied to space and the body. [Add credits, awards, and selected works here.]',
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
    }
  }
};

export function other(lang) { return lang === 'ja' ? 'en' : 'ja'; }
