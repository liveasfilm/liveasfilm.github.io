// Portfolio for / (Korean) and /ja/ (Japanese). Only list apps that are live on a store.
(() => {
  const EMAIL = "turtle.wins.a.race@gmail.com";
  const LANGS = ["ko", "en", "ja"];

  const UI = {
    ko: {
      doc: "Eunsuminsung Studio · 은수민성",
      eyebrow: "Independent game studio · 은수민성",
      h1: "모바일 게임과 앱을<br>만듭니다.",
      lead: "퍼즐, 액션, 힐링 게임을 만들어 Google\u00a0Play와 App\u00a0Store에 출시하고 있습니다.",
      titles: "출시작", contact: "문의하기", released: "출시작", site: "소개 페이지", watch: "영상 재생", enquiries: "앱 및 게임 문의",
    },
    en: {
      doc: "Eunsuminsung Studio — Mobile games & apps",
      eyebrow: "Independent game studio",
      h1: "We make mobile<br>games and apps.",
      lead: "Puzzle, action and cozy games, shipped to Google\u00a0Play and the App\u00a0Store.",
      titles: "Titles", contact: "Contact us", released: "Released", site: "Website", watch: "Play video", enquiries: "Enquiries",
    },
    ja: {
      doc: "Eunsuminsung Studio — モバイルゲーム＆アプリ",
      eyebrow: "Independent game studio",
      h1: "モバイルゲームと<br>アプリをつくっています。",
      lead: "パズル、アクション、癒し系のゲームをつくり、Google\u00a0PlayとApp\u00a0Storeでリリースしています。",
      titles: "リリース作品", contact: "お問い合わせ", released: "リリース作品", site: "紹介ページ", watch: "動画を再生", enquiries: "お問い合わせ",
    },
  };

  const GENRES = [
    { id: "all", ko: "전체", en: "All", ja: "すべて" },
    { id: "puzzle", ko: "퍼즐", en: "Puzzle", ja: "パズル" },
    { id: "action", ko: "액션", en: "Action", ja: "アクション" },
    { id: "casual", ko: "캐주얼", en: "Casual", ja: "カジュアル" },
    { id: "sim", ko: "시뮬레이션", en: "Simulation", ja: "シミュレーション" },
    { id: "app", ko: "앱", en: "App", ja: "アプリ" },
  ];

  // Newest first. name.ja is the official Japanese store title; omit it when the app has none (English is shown).
  // play = Google Play package, ios = App Store id, site = marketing page, video = YouTube id or { lang: id }.
  const APPS = [
    { id: "rubble", genre: "action", date: "2026-10-20", video: "3gcF1-jcMeo",
      name: { ko: "RUBBLE — 철거 놀이터", en: "RUBBLE — Demolition Playground" },
      desc: { ko: "중장비 20대가 한 도시에서 맞붙는 철거 서바이벌. 부수고 성장해 마지막 한 대가 되세요.",
              en: "Twenty heavy vehicles clash in one city. Smash, grow and be the last one standing.",
              ja: "重機20台がひとつの街でぶつかり合う解体サバイバル。壊して大きくなり、最後の1台を目指そう。" },
      play: "com.liveasfilm.rubbleplayground", site: "/rubble-site/" },
    { id: "sky-raid", genre: "action", date: "2026-10-19", video: { ko: "PdJsxgHIgx8", en: "7KweENq7QDs" },
      name: { ko: "SKY RAID", en: "SKY RAID" },
      desc: { ko: "항공모함에서 출격해 섬을 폭격하고 돌아오는 픽셀 아트 공습 액션.",
              en: "Launch from a carrier, bomb the island and land back aboard. Pixel air raid action.",
              ja: "空母から出撃して島を爆撃し、甲板へ帰還するピクセルアートの空襲アクション。" },
      play: "com.liveasfilm.sky_raid", ios: "6823030277", site: "/skyraid/" },
    { id: "color-flow", genre: "puzzle", date: "2026-10-16", video: "SCw_KZd_NM0",
      name: { ko: "컬러 플로우", en: "Color Flow", ja: "カラーフロー" },
      desc: { ko: "선을 그려 물감 물줄기를 나누고 섞어 목표 색 컵을 채우는 손그림 물리 퍼즐.",
              en: "Draw lines to split and mix streams of paint and fill each cup with its color.",
              ja: "線を引いて絵の具の流れを分けて混ぜ、カップを目標の色で満たす手描き風の物理パズル。" },
      play: "com.liveasfilm.paintflow", site: "/color-flow-site/" },
    { id: "maze-push", genre: "puzzle", date: "2026-10-15", video: "6NAxvKUcUkY",
      name: { ko: "미궁 밀당", en: "Maze Push" },
      desc: { ko: "미로 카드를 밀어 길을 만들고, 몬스터를 피해 보물을 찾아 집으로 돌아오세요.",
              en: "Slide maze cards to open a path, dodge monsters, grab the treasure and get home.",
              ja: "迷路カードを押して道をつくり、モンスターをかわして宝物を持ち帰ろう。" },
      play: "com.liveasfilm.mazepush", site: "/maze-push-site/" },
    { id: "mungchi-walk", genre: "puzzle", date: "2026-10-14", video: "eWdpn63An0E",
      name: { ko: "뭉치 산책", en: "Mungchi Walk", ja: "ムンチのおさんぽ" },
      desc: { ko: "숫자 순서대로 모든 칸을 한 번씩. 뭉치와 걷는 한붓그리기 꽃길 퍼즐.",
              en: "Draw one path through every tile in number order. A cozy one-line logic puzzle.",
              ja: "数字の順に全部のマスを一度ずつ。ムンチと歩くかわいい一筆書きパズル。" },
      play: "com.liveasfilm.mungchiwalk", site: "/mungchi-walk-site/" },
    { id: "plush-parlor", genre: "casual", date: "2026-10-14", video: "0AJcwVN90bg",
      name: { ko: "몽글뽑기", en: "Plush Parlor" },
      desc: { ko: "약한 집게로 들고 밀고 굴려서. 진짜 물리로 즐기는 3D 인형뽑기와 수집.",
              en: "Lift, nudge and roll plushies with a weak claw. A cozy real-physics claw game.",
              ja: "力の弱いアームで持ち上げて、押して、転がして。本物の物理で遊ぶ3Dクレーンゲーム＆コレクション。" },
      play: "com.liveasfilm.plushparlor", site: "/plush-parlor-site/" },
    { id: "silent-studio", genre: "sim", date: "2026-10-14", video: "A493UQ_IKmE",
      name: { ko: "무성영화 촬영소", en: "Silent Studio" },
      desc: { ko: "1920년대 촬영소에서 슬랩스틱 희극을 찍고, 편집하고, 시사회로 객석을 웃기세요.",
              en: "Shoot, edit and premiere slapstick comedies in a 1920s silent film studio.",
              ja: "1920年代の撮影所でドタバタ喜劇を撮って編集し、試写会で観客を笑わせよう。" },
      play: "com.liveasfilm.silentfilmstudio", site: "/silent-studio-site/" },
    { id: "volt-rush", genre: "puzzle", date: "2026-10-09", video: "VaDrmKj0_vc",
      name: { ko: "볼트 러시", en: "Volt Rush", ja: "ボルトラッシュ" },
      desc: { ko: "두 칸 조각을 돌려 쌓고, 한 색 선으로 전구와 배터리를 이어 연쇄로 터뜨리세요.",
              en: "Rotate falling pairs, link bulbs to batteries with one-color cables, and chain.",
              ja: "ピースを回して積み、1色の線で電球と電池をつないで連鎖させよう。" },
      play: "com.liveasfilm.voltrush", ios: "6820447805", site: "/volt-rush-site/" },
    { id: "little-cleaners", genre: "casual", date: "2026-10-08", video: "wK8ARO_TzeA",
      name: { ko: "구석구석", en: "Little Cleaners", ja: "リトルクリーナーズ" },
      desc: { ko: "귀여운 로봇청소기를 돌보고 자동화해 집과 단지를 말끔하게 만드는 방치게임.",
              en: "Care for cute robot vacuums, automate them and clean homes, towers and towns.",
              ja: "かわいいロボット掃除機をお世話して自動化。お家も団地もピカピカにする放置ゲーム。" },
      play: "com.liveasfilm.guseokguseok", ios: "6820786758", site: "/guseok-guseok-site/" },
    { id: "lastlight", genre: "action", date: "2026-10-07", video: "oU6HgpVqhN8",
      name: { ko: "lastlight.io", en: "lastlight.io" },
      desc: { ko: "20인 탑다운 생존 슈팅. 무기를 줍고 옥상에 올라 끝까지 살아남으세요.",
              en: "Top-down 20-player survival shooter. Loot, climb the roofs, outlast everyone.",
              ja: "20人で戦うトップダウンのサバイバルシューター。武器を拾い、屋上に登り、最後まで生き残れ。" },
      play: "com.liveasfilm.lastlight", ios: "6818906945", site: "/lastlight-io-site/" },
    { id: "kaiju-defense", genre: "action", date: "2026-10-07", video: "YSiHpMh-SHA",
      name: { ko: "괴수 방위대", en: "Kaiju Defense", ja: "怪獣防衛隊" },
      desc: { ko: "랜드마크 100곳을 기어오르는 괴수만 정확히 맞혀야 하는 포대 방어 게임.",
              en: "Kaiju are climbing 100 landmarks. Aim your cannon and hit only the monsters.",
              ja: "ランドマーク100か所をよじ登る怪獣だけを、砲台で正確に撃ち抜く防衛ゲーム。" },
      ios: "6818137960", site: "/landmark-defense-site/" },
    { id: "swing-trick", genre: "action", date: "2026-10-06", video: { ko: "3JuqmsNBd6Q", en: "TTKnfxAwuyg" },
      name: { ko: "Swing Trick", en: "Swing Trick" },
      desc: { ko: "그네에서 날아올라 슬로우모션으로 묘기를 편집하고, 두 발로 착지하세요.",
              en: "Launch off a swing, edit tricks in slow motion, and stick the landing.",
              ja: "ブランコから大ジャンプ。スローモーションで技を組み立てて、着地をピタッと決めよう。" },
      play: "com.liveasfilm.swingtrick", ios: "6817539097", site: "/swing-trick-site/" },
    { id: "last-bite", genre: "puzzle", date: "2026-10-03", video: "N38cbEDb4es",
      name: { ko: "마지막 한입", en: "Last Bite", ja: "最後のひとくち" },
      desc: { ko: "토끼는 풀을, 호랑이는 토끼를. 호랑이 한 마리만 남기는 3×3 먹이사슬 퍼즐.",
              en: "Rabbits eat grass, tigers eat rabbits. A cozy 3×3 puzzle: leave just one tiger.",
              ja: "ウサギは草を、トラはウサギを。トラ1匹だけを残す、かわいい3×3の食物連鎖パズル。" },
      play: "com.liveasfilm.lastbite", ios: "6818835358", site: "/last-bite-site/" },
    { id: "little-lights", genre: "puzzle", date: "2026-09-24", video: "6ObU2XqdYwU",
      name: { ko: "불 켜진 집", en: "Little Lights", ja: "あかりのおうち" },
      desc: { ko: "방마다 숨은 배선을 추리해 불을 켜는 손그림 퍼즐. 500라운드, 25개 무대.",
              en: "Hand-drawn logic puzzles: find the hidden wiring and light up 500 animal homes.",
              ja: "部屋ごとに隠れた配線を推理してあかりを灯す、手描きのパズル。500ラウンド、25の舞台。" },
      play: "com.liveasfilm.littlelights", ios: "6812945468", site: "/little-lights/" },
    { id: "whose-kitten", genre: "sim", date: "2026-09-23", video: { ko: "VmOIJVN0F60", en: "tpMT2lLpn_0", ja: "xpySnmW4Buw" },
      name: { ko: "누구의 새끼냥?", en: "Whose Kitten?", ja: "だれの子ねこ？" },
      desc: { ko: "새끼 고양이 얼굴에서 부모를 읽고, 마을을 뒤져 진짜 부모를 찾는 보호소 게임.",
              en: "Read a kitten's face, search the town and find its real parents.",
              ja: "子ねこの顔から親を読み解き、町をさがして本当の親を見つける保護猫シェルターゲーム。" },
      play: "com.liveasfilm.whosekitten", ios: "6811257450" },
    { id: "matchmaker", genre: "puzzle", date: "2026-09-17", video: "RRFOpP3rUtk",
      name: { ko: "수상한 결혼정보회사", en: "Suspicious Matchmakers", ja: "怪しい結婚相談所" },
      desc: { ko: "미화된 프로필 뒤 진실을 캐내 짝을 짓는 탐정형 매칭 퍼즐.",
              en: "Dig past polished dating profiles, find the truth, and make matches that last.",
              ja: "盛りすぎプロフィールの裏を暴いて縁結び。探偵気分のマッチングパズル。" },
      play: "com.liveasfilm.matchmaker", ios: "6811507815" },
    { id: "samguk", genre: "action", date: "2026-09-14", video: "Kvlz0hS9F9s",
      name: { ko: "삼국.io", en: "Samguk.io", ja: "三国.io" },
      desc: { ko: "장수 한 명으로 시작해 병사를 흡수하고, 58개 성을 함락해 천하를 통일하는 3분 전쟁.",
              en: "One general, absorb soldiers, take 58 castles: a 3-minute Three Kingdoms war.",
              ja: "武将一騎で挙兵し、兵を吸収、58の城を落として天下統一。3分の三国志戦争。" },
      play: "com.liveasfilm.samguk_io", ios: "6805052565", site: "/samguk/" },
    { id: "do-re-mi", genre: "puzzle", date: "2026-08-30", video: "LuZLPK-i22M",
      name: { ko: "도레미 퍼즐", en: "Do Re Mi Puzzle", ja: "ドレミパズル" },
      desc: { ko: "실로폰 막대를 뽑아 악보를 채우는 음악 퍼즐. 동요·클래식 100곡.",
              en: "Pull bars from the pile and fill the score. 100 songs, no pressure, offline.",
              ja: "鉄琴のバーを抜いて楽譜をうめる音楽パズル。童謡・クラシック100曲。" },
      play: "com.liveasfilm.scorefill", ios: "6801124630", site: "/scorefill-site/" },
    { id: "lantern-road", genre: "casual", date: "2026-08-24", video: "ZcyOVXoXXhA",
      name: { ko: "등불의 길", en: "The Lantern Road" },
      desc: { ko: "물줄기에 고리를 띄워 등불 100개를 밝히는 힐링 물고리 던지기. 게임 오버 없음.",
              en: "Toss rings on water jets and light 100 lamps. No timer, no game over.",
              ja: "噴水に輪を投げ入れて、ランプを100個灯そう。タイマーなし、ゲームオーバーなし。" },
      play: "com.jegeonjung.waterringtoss", ios: "6797945150", site: "/water-ring-toss/" },
    { id: "dont-get-caught", genre: "casual", date: "2026-07-29", video: "xuutuTLaqFE",
      name: { ko: "들키지 마!", en: "Don't Get Caught!", ja: "バレちゃダメ！" },
      desc: { ko: "선생님도 엄마도 부장님도 모르게. 아슬아슬 눈치 타이밍 미니게임 28종.",
              en: "Sneak, snooze and survive 28 micro games of split-second timing.",
              ja: "先生にもママにも部長にもバレないように。ヒヤヒヤのタイミングミニゲーム28種。" },
      play: "com.sneaklab.dontgetcaught", ios: "6794361277", site: "/dontgetcaught/" },
    { id: "gravity-courier", genre: "puzzle", date: "2026-06-11", video: "ZbN75xkRLGg",
      name: { ko: "Gravity Courier", en: "Gravity Courier" },
      desc: { ko: "행성을 읽고 발사 타이밍을 맞춰, 중력을 타고 목표 궤도로 배송하는 궤도 퍼즐.",
              en: "Read the planets, time your launch, and ride gravity to the target orbit.",
              ja: "惑星の動きを読んで発射タイミングを決め、重力に乗って目標の軌道へ届ける軌道パズル。" },
      play: "com.gravitycourier.gravity_courier", ios: "6777101289", site: "/gravity-courier/" },
    { id: "my-trading-story", genre: "sim", date: "2026-05-11", video: "QwNQytPgDGU",
      name: { ko: "My Trading Story", en: "My Trading Story" },
      desc: { ko: "2012년부터 2026년까지, 나만의 계획으로 다시 쓰는 5분의 투자 인생.",
              en: "Relive 14 years of markets in five minutes with your own investment plan.",
              ja: "2012年から2026年まで、自分だけの計画で書き直す5分間の投資人生。" },
      play: "com.liveasfilm.mytradingstory", ios: "6766176598", site: "/ggeolmusae-support/" },
    { id: "magic-color", genre: "app", date: "2025-07-14", video: "gnaoWOhWGt8",
      name: { ko: "AI 색칠공부", en: "Magic Color AI" },
      desc: { ko: "사진 한 장을 AI가 색칠 도안으로 바꿔 주는 색칠공부 앱.",
              en: "Turn any photo into a printable coloring page with AI.",
              ja: "写真1枚をAIが塗り絵に変えてくれる塗り絵アプリ。" },
      play: "com.liveasfilm.coloringbook", ios: "6748463466", site: "/magic-color/" },
    { id: "shapes-drop", genre: "puzzle", date: "2024-05-15", video: "oV15jzDhr4o",
      name: { ko: "Shapes Drop", en: "Shapes Drop" },
      desc: { ko: "도형을 떨어뜨리고 같은 도형끼리 합쳐, 삼각형에서 거대한 다각형까지 키우는 머지 퍼즐.",
              en: "Drop shapes, merge the same, and grow from a triangle to a giant polygon.",
              ja: "図形を落として同じ形どうしを合体。三角形から巨大な多角形まで育てるマージパズル。" },
      play: "com.liveasfilm.shapesdrop", ios: "6772424713", site: "/shapes-drop-site/" },
  ];

  const ICON_PLAY = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M3 1.8v12.4c0 .6.6.9 1.1.6l10.4-6.2c.5-.3.5-.9 0-1.2L4.1 1.2C3.6.9 3 1.2 3 1.8z"/></svg>';
  const ICON_IOS = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="1" width="9" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 12.5h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  const ICON_SITE = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3H3v10h10v-3M9 2h5v5M14 2 7.5 8.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ICON_DIR = "/assets/portfolio/icons/";

  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const nameOf = (a, lang) => a.name[lang] || a.name.en;
  // Secondary name under the title: English for ko/ja, Korean for en.
  const subOf = (a, lang) => {
    const sub = lang === "en" ? a.name.ko : a.name.en;
    return sub === nameOf(a, lang) ? "" : sub;
  };
  const month = (d) => d.slice(0, 7).replace("-", ".");
  const videoOf = (a, lang) => (typeof a.video === "string" ? a.video : a.video && (a.video[lang] || a.video.en));
  // A thumbnail button; the YouTube player only loads once it is clicked.
  const videoButton = (a) => {
    const id = videoOf(a, lang);
    return id ? `<button type="button" class="video" data-video="${id}" aria-label="${esc(UI[lang].watch)}: ${esc(nameOf(a, lang))}"><img src="https://i.ytimg.com/vi/${id}/mqdefault.jpg" alt="" width="320" height="180" loading="lazy"><span>${ICON_PLAY}</span></button>` : "";
  };

  let lang = "ko";
  let genre = "all";

  function card(a) {
    const t = UI[lang];
    const g = GENRES.find((x) => x.id === a.genre);
    const sub = subOf(a, lang);
    const links = [
      a.play && `<a href="https://play.google.com/store/apps/details?id=${a.play}" target="_blank" rel="noopener">${ICON_PLAY}Google Play</a>`,
      a.ios && `<a href="https://apps.apple.com/app/id${a.ios}" target="_blank" rel="noopener">${ICON_IOS}App Store</a>`,
      a.site && `<a href="${a.site}">${ICON_SITE}${esc(t.site)}</a>`,
    ].filter(Boolean).join("");
    return `<li class="card" id="${a.id}"${genre !== "all" && genre !== a.genre ? " hidden" : ""}>
      ${videoButton(a)}
      <div class="head">
        <img src="${ICON_DIR}${a.id}.webp" alt="" width="72" height="72" loading="lazy">
        <div><h3>${esc(nameOf(a, lang))}</h3>${sub ? `<p class="sub">${esc(sub)}</p>` : ""}</div>
      </div>
      <p class="desc">${esc(a.desc[lang])}</p>
      <ul class="meta"><li class="genre">${esc(g[lang])}</li><li>${month(a.date)}</li></ul>
      <div class="links">${links}</div>
    </li>`;
  }

  function render() {
    const t = UI[lang];
    const count = (id) => (id === "all" ? APPS.length : APPS.filter((a) => a.genre === id).length);
    document.documentElement.lang = lang;
    document.title = t.doc;
    document.getElementById("app").innerHTML = `
      <header class="wrap top">
        <a class="brand" href="/">Eunsuminsung Studio</a>
        <div class="lang" role="group" aria-label="Language">
          ${LANGS.map((l) => `<button type="button" data-set-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join("")}
        </div>
      </header>
      <main>
        <section class="wrap hero">
          <div>
            <p class="eyebrow">${esc(t.eyebrow)}</p>
            <h1>${t.h1}</h1>
            <p class="lead">${esc(t.lead)}</p>
            <ul class="stats">
              <li><b>${APPS.length}</b><span>${esc(t.titles)}</span></li>
              <li><b>${APPS.filter((a) => a.play).length}</b><span>Google Play</span></li>
              <li><b>${APPS.filter((a) => a.ios).length}</b><span>App Store</span></li>
            </ul>
            <a class="cta" href="mailto:${EMAIL}">${esc(t.contact)}</a>
          </div>
          <nav class="mosaic" aria-label="Apps">
            ${APPS.map((a) => `<a href="#${a.id}" title="${esc(nameOf(a, lang))}"><img src="${ICON_DIR}${a.id}.webp" alt="${esc(nameOf(a, lang))}" width="96" height="96"></a>`).join("")}
          </nav>
        </section>
        <div class="bar">
          <div class="wrap">
            <h2>${esc(t.released)}</h2>
            <div class="filters" role="group" aria-label="Genre">
              ${GENRES.map((g) => `<button type="button" data-genre="${g.id}" aria-pressed="${g.id === genre}">${esc(g[lang])}<small>${count(g.id)}</small></button>`).join("")}
            </div>
          </div>
        </div>
        <ul class="wrap grid">${APPS.map(card).join("")}</ul>
      </main>
      <footer>
        <div class="wrap">
          <span>© 2026 Eunsuminsung Studio · 은수민성</span>
          <span>${esc(t.enquiries)} · <a href="mailto:${EMAIL}">${EMAIL}</a></span>
        </div>
      </footer>`;
  }

  function setGenre(id) {
    genre = id;
    document.querySelectorAll(".filters button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.genre === id));
    document.querySelectorAll(".grid .card").forEach((c) => {
      const a = APPS.find((x) => x.id === c.id);
      c.hidden = id !== "all" && a.genre !== id;
      // A hidden iframe keeps playing sound, so put the thumbnail back.
      if (c.hidden) { const player = c.querySelector("iframe.video"); if (player) player.outerHTML = videoButton(a); }
    });
  }

  document.getElementById("app").addEventListener("click", (e) => {
    const langBtn = e.target.closest("[data-set-lang]");
    if (langBtn) {
      lang = langBtn.dataset.setLang;
      try { localStorage.setItem("lang", lang); } catch (err) {}
      render();
      return;
    }
    const videoBtn = e.target.closest("[data-video]");
    if (videoBtn) {
      const title = videoBtn.getAttribute("aria-label");
      videoBtn.outerHTML = `<iframe class="video" src="https://www.youtube-nocookie.com/embed/${videoBtn.dataset.video}?autoplay=1&rel=0&playsinline=1" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
      return;
    }
    const genreBtn = e.target.closest("[data-genre]");
    if (genreBtn) setGenre(genreBtn.dataset.genre);
    if (e.target.closest(".mosaic a")) setGenre("all");
  });

  // ?lang= wins, then the page's own language (/ja/), then the visitor's last choice, then the browser.
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (err) {}
  const candidates = [
    new URLSearchParams(location.search).get("lang"),
    document.documentElement.dataset.pageLang,
    saved,
    (navigator.language || "").slice(0, 2).toLowerCase(),
  ];
  lang = candidates.find((l) => LANGS.includes(l)) || "en";
  render();
  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
})();
