// Works catalogue. Edit here to add/remove albums and tracks.
//   track.media : 'video' (YouTube embed) or 'audio' (self-hosted file).
//   track.src   : for 'audio', the URL of the uploaded audio file (empty = placeholder).
//   album.noLinks: true → no external links; shows a "self-hosted" label instead.
//   album.links : { apple, spotify, youtube } external streaming URLs shown as icons.
export const solo = [
  {
    title: 'Queen Of Joker: Battle Themes',
    year: '2026',
    seed: 'queen-of-joker',
    cover: '/covers/queen-of-joker.jpg',
    cat: { ja: 'ゲーム音楽 / EP', en: 'Game soundtrack / EP' },
    links: {
      apple: 'https://music.apple.com/jp/album/queen-of-joker-battle-themes-single/6807057679',
      spotify: 'https://open.spotify.com/intl-ja/album/2v0vbN9NJ6ewPIIeBlTSOZ',
      youtube: 'https://music.youtube.com/search?q=%E9%83%A1%E5%8F%B8%E3%83%8A%E3%83%AA%E3%82%A2%E3%82%AD+Queen+Of+Joker%3A+Battle+Themes'
    },
    tracks: [
      { n: '01', t: { ja: 'Unchained Fenrir', en: 'Unchained Fenrir' }, dur: '3:21', media: 'audio', src: '/audio/unchained-fenrir.mp3' },
      { n: '02', t: { ja: 'The Waltz of Fenrir', en: 'The Waltz of Fenrir' }, dur: '2:28', media: 'audio', src: '/audio/the-waltz-of-fenrir.mp3' }
    ]
  }
];

export const comm = [];

export const undisclosed = [];
