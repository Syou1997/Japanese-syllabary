const fullList = [
    { "name": "あ", "team": ["seionH"] },
    { "name": "い", "team": ["seionH"] },
    { "name": "う", "team": ["seionH"] },
    { "name": "え", "team": ["seionH"] },
    { "name": "お", "team": ["seionH"] },
    { "name": "か", "team": ["seionH"] },
    { "name": "き", "team": ["seionH"] },
    { "name": "く", "team": ["seionH"] },
    { "name": "け", "team": ["seionH"] },
    { "name": "こ", "team": ["seionH"] },
    { "name": "さ", "team": ["seionH"] },
    { "name": "し", "team": ["seionH"] },
    { "name": "す", "team": ["seionH"] },
    { "name": "せ", "team": ["seionH"] },
    { "name": "そ", "team": ["seionH"] },
    { "name": "た", "team": ["seionH"] },
    { "name": "ち", "team": ["seionH"] },
    { "name": "つ", "team": ["seionH"] },
    { "name": "て", "team": ["seionH"] },
    { "name": "と", "team": ["seionH"] },
    { "name": "な", "team": ["seionH"] },
    { "name": "に", "team": ["seionH"] },
    { "name": "ぬ", "team": ["seionH"] },
    { "name": "ね", "team": ["seionH"] },
    { "name": "の", "team": ["seionH"] },
    { "name": "は", "team": ["seionH"] },
    { "name": "ひ", "team": ["seionH"] },
    { "name": "ふ", "team": ["seionH"] },
    { "name": "へ", "team": ["seionH"] },
    { "name": "ほ", "team": ["seionH"] },
    { "name": "ま", "team": ["seionH"] },
    { "name": "み", "team": ["seionH"] },
    { "name": "む", "team": ["seionH"] },
    { "name": "め", "team": ["seionH"] },
    { "name": "も", "team": ["seionH"] },
    { "name": "や", "team": ["seionH"] },
    { "name": "ゆ", "team": ["seionH"] },
    { "name": "よ", "team": ["seionH"] },
    { "name": "ら", "team": ["seionH"] },
    { "name": "り", "team": ["seionH"] },
    { "name": "る", "team": ["seionH"] },
    { "name": "れ", "team": ["seionH"] },
    { "name": "ろ", "team": ["seionH"] },
    { "name": "わ", "team": ["seionH"] },
    { "name": "を", "team": ["seionH"] },
    { "name": "ん", "team": ["bionH"] },
    { "name": "ア", "team": ["seionK"] },
    { "name": "イ", "team": ["seionK"] },
    { "name": "ウ", "team": ["seionK"] },
    { "name": "エ", "team": ["seionK"] },
    { "name": "オ", "team": ["seionK"] },
    { "name": "カ", "team": ["seionK"] },
    { "name": "キ", "team": ["seionK"] },
    { "name": "ク", "team": ["seionK"] },
    { "name": "ケ", "team": ["seionK"] },
    { "name": "コ", "team": ["seionK"] },
    { "name": "サ", "team": ["seionK"] },
    { "name": "シ", "team": ["seionK"] },
    { "name": "ス", "team": ["seionK"] },
    { "name": "セ", "team": ["seionK"] },
    { "name": "ソ", "team": ["seionK"] },
    { "name": "タ", "team": ["seionK"] },
    { "name": "チ", "team": ["seionK"] },
    { "name": "ツ", "team": ["seionK"] },
    { "name": "テ", "team": ["seionK"] },
    { "name": "ト", "team": ["seionK"] },
    { "name": "ナ", "team": ["seionK"] },
    { "name": "ニ", "team": ["seionK"] },
    { "name": "ヌ", "team": ["seionK"] },
    { "name": "ネ", "team": ["seionK"] },
    { "name": "ノ", "team": ["seionK"] },
    { "name": "ハ", "team": ["seionK"] },
    { "name": "ヒ", "team": ["seionK"] },
    { "name": "フ", "team": ["seionK"] },
    { "name": "ヘ", "team": ["seionK"] },
    { "name": "ホ", "team": ["seionK"] },
    { "name": "マ", "team": ["seionK"] },
    { "name": "ミ", "team": ["seionK"] },
    { "name": "ム", "team": ["seionK"] },
    { "name": "メ", "team": ["seionK"] },
    { "name": "モ", "team": ["seionK"] },
    { "name": "ヤ", "team": ["seionK"] },
    { "name": "ユ", "team": ["seionK"] },
    { "name": "ヨ", "team": ["seionK"] },
    { "name": "ラ", "team": ["seionK"] },
    { "name": "リ", "team": ["seionK"] },
    { "name": "ル", "team": ["seionK"] },
    { "name": "レ", "team": ["seionK"] },
    { "name": "ロ", "team": ["seionK"] },
    { "name": "ワ", "team": ["seionK"] },
    { "name": "ヲ", "team": ["seionK"] },
    { "name": "ン", "team": ["bionK"] },
    { "name": "が", "team": ["dakuonH"] },
    { "name": "ぎ", "team": ["dakuonH"] },
    { "name": "ぐ", "team": ["dakuonH"] },
    { "name": "げ", "team": ["dakuonH"] },
    { "name": "ご", "team": ["dakuonH"] },
    { "name": "ざ", "team": ["dakuonH"] },
    { "name": "じ", "team": ["dakuonH"] },
    { "name": "ず", "team": ["dakuonH"] },
    { "name": "ぜ", "team": ["dakuonH"] },
    { "name": "ぞ", "team": ["dakuonH"] },
    { "name": "だ", "team": ["dakuonH"] },
    { "name": "ぢ", "team": ["dakuonH"] },
    { "name": "づ", "team": ["dakuonH"] },
    { "name": "で", "team": ["dakuonH"] },
    { "name": "ど", "team": ["dakuonH"] },
    { "name": "ば", "team": ["dakuonH"] },
    { "name": "び", "team": ["dakuonH"] },
    { "name": "ぶ", "team": ["dakuonH"] },
    { "name": "べ", "team": ["dakuonH"] },
    { "name": "ぼ", "team": ["dakuonH"] },
    { "name": "ガ", "team": ["dakuonK"] },
    { "name": "ギ", "team": ["dakuonK"] },
    { "name": "グ", "team": ["dakuonK"] },
    { "name": "ゲ", "team": ["dakuonK"] },
    { "name": "ゴ", "team": ["dakuonK"] },
    { "name": "ザ", "team": ["dakuonK"] },
    { "name": "ジ", "team": ["dakuonK"] },
    { "name": "ズ", "team": ["dakuonK"] },
    { "name": "ゼ", "team": ["dakuonK"] },
    { "name": "ゾ", "team": ["dakuonK"] },
    { "name": "ダ", "team": ["dakuonK"] },
    { "name": "ヂ", "team": ["dakuonK"] },
    { "name": "ヅ", "team": ["dakuonK"] },
    { "name": "デ", "team": ["dakuonK"] },
    { "name": "ド", "team": ["dakuonK"] },
    { "name": "バ", "team": ["dakuonK"] },
    { "name": "ビ", "team": ["dakuonK"] },
    { "name": "ブ", "team": ["dakuonK"] },
    { "name": "ベ", "team": ["dakuonK"] },
    { "name": "ボ", "team": ["dakuonK"] },
    { "name": "ぱ", "team": ["handakuonH"] },
    { "name": "ぴ", "team": ["handakuonH"] },
    { "name": "ぷ", "team": ["handakuonH"] },
    { "name": "ぺ", "team": ["handakuonH"] },
    { "name": "ぽ", "team": ["handakuonH"] },
    { "name": "パ", "team": ["handakuonK"] },
    { "name": "ピ", "team": ["handakuonK"] },
    { "name": "プ", "team": ["handakuonK"] },
    { "name": "ペ", "team": ["handakuonK"] },
    { "name": "ポ", "team": ["handakuonK"] },
    { "name": "きゃ", "team": ["youonH"] },
    { "name": "きゅ", "team": ["youonH"] },
    { "name": "きょ", "team": ["youonH"] },
    { "name": "しゃ", "team": ["youonH"] },
    { "name": "しゅ", "team": ["youonH"] },
    { "name": "しょ", "team": ["youonH"] },
    { "name": "ちゃ", "team": ["youonH"] },
    { "name": "ちゅ", "team": ["youonH"] },
    { "name": "ちょ", "team": ["youonH"] },
    { "name": "にゃ", "team": ["youonH"] },
    { "name": "にゅ", "team": ["youonH"] },
    { "name": "にょ", "team": ["youonH"] },
    { "name": "ひゃ", "team": ["youonH"] },
    { "name": "ひゅ", "team": ["youonH"] },
    { "name": "ひょ", "team": ["youonH"] },
    { "name": "みゃ", "team": ["youonH"] },
    { "name": "みゅ", "team": ["youonH"] },
    { "name": "みょ", "team": ["youonH"] },
    { "name": "りゃ", "team": ["youonH"] },
    { "name": "りゅ", "team": ["youonH"] },
    { "name": "りょ", "team": ["youonH"] },
    { "name": "キャ", "team": ["youonK"] },
    { "name": "キュ", "team": ["youonK"] },
    { "name": "キョ", "team": ["youonK"] },
    { "name": "シャ", "team": ["youonK"] },
    { "name": "シュ", "team": ["youonK"] },
    { "name": "ショ", "team": ["youonK"] },
    { "name": "チャ", "team": ["youonK"] },
    { "name": "チュ", "team": ["youonK"] },
    { "name": "チョ", "team": ["youonK"] },
    { "name": "ニャ", "team": ["youonK"] },
    { "name": "ニュ", "team": ["youonK"] },
    { "name": "ニョ", "team": ["youonK"] },
    { "name": "ヒャ", "team": ["youonK"] },
    { "name": "ヒュ", "team": ["youonK"] },
    { "name": "ヒョ", "team": ["youonK"] },
    { "name": "ミャ", "team": ["youonK"] },
    { "name": "ミュ", "team": ["youonK"] },
    { "name": "ミョ", "team": ["youonK"] },
    { "name": "リャ", "team": ["youonK"] },
    { "name": "リュ", "team": ["youonK"] },
    { "name": "リョ", "team": ["youonK"] }
];

const seionHEl = document.getElementById("seionH");
const seionKEl = document.getElementById("seionK");
const bionHEl = document.getElementById("bionH");
const bionKEl = document.getElementById("bionK");
const dakuonHEl = document.getElementById("dakuonH");
const dakuonKEl = document.getElementById("dakuonK");
const handakuonHEl = document.getElementById("handakuonH");
const handakuonKEl = document.getElementById("handakuonK");
const youonHEl = document.getElementById("youonH");
const youonKEl = document.getElementById("youonK");

const btnEl = document.querySelector(".btn");
const popupEl = document.getElementById("popup");
const popupTextEl = document.getElementById("popupText");
const instructionEl = document.getElementById("instruction");

const historyPopupEl = document.getElementById("history-popup");
let historyList = [];

const isHiragana = ch => /[\u3040-\u309F]/.test(ch);
const isKatakana = ch => /[\u30A0-\u30FF]/.test(ch);

// 產生假名
btnEl.addEventListener("click", () => {
    let pool = [];

    if (
        !seionHEl.checked && !seionKEl.checked &&
        !bionHEl.checked && !bionKEl.checked &&
        !dakuonHEl.checked && !dakuonKEl.checked &&
        !handakuonHEl.checked && !handakuonKEl.checked &&
        !youonHEl.checked && !youonKEl.checked
    ) {
        pool = fullList.map(f => f.name);
    } else {
        fullList.forEach(item => {
            if (
                (seionHEl.checked && item.team.includes("seionH")) ||
                (seionKEl.checked && item.team.includes("seionK")) ||
                (bionHEl.checked && item.team.includes("bionH")) ||
                (bionKEl.checked && item.team.includes("bionK")) ||
                (dakuonHEl.checked && item.team.includes("dakuonH")) ||
                (dakuonKEl.checked && item.team.includes("dakuonK")) ||
                (handakuonHEl.checked && item.team.includes("handakuonH")) ||
                (handakuonKEl.checked && item.team.includes("handakuonK")) ||
                (youonHEl.checked && item.team.includes("youonH")) ||
                (youonKEl.checked && item.team.includes("youonK"))
            ) pool.push(item.name);
        });
    }

    const result = pool[Math.floor(Math.random() * pool.length)];
    popupTextEl.innerText = result;
    popupEl.classList.add("show");

    if (!historyList.includes(result)) historyList.push(result);
});

// 點擊關閉 popup
popupTextEl.addEventListener("click", () => popupEl.classList.remove("show"));

// 雙擊 instruction 顯示 / 隱藏歷史
instructionEl.addEventListener("dblclick", () => showHistoryPopup());

// 雙擊歷史視窗自己關閉
historyPopupEl.addEventListener("dblclick", () => historyPopupEl.classList.remove("show"));

// 顯示歷史彈跳視窗
function showHistoryPopup() {
    const groups = [
        { title: "清音(平假名)", key: "seion", hira: true },
        { title: "清音(片假名)", key: "seion", hira: false },
        { title: "鼻音(平假名)", key: "bion", hira: true },
        { title: "鼻音(片假名)", key: "bion", hira: false },
        { title: "濁音(平假名)", key: "dakuon", hira: true },
        { title: "濁音(片假名)", key: "dakuon", hira: false },
        { title: "半濁音(平假名)", key: "handakuon", hira: true },
        { title: "半濁音(片假名)", key: "handakuon", hira: false },
        { title: "拗音(平假名)", key: "youon", hira: true },
        { title: "拗音(片假名)", key: "youon", hira: false }
    ];

    historyPopupEl.innerHTML = "";

    const usedChars = new Set(); // 全局去重

    groups.forEach(g => {
        const filtered = historyList.filter(ch => {
            const item = fullList.find(f => f.name === ch);
            return item && item.team.some(t =>
                t.includes(g.key) && ((g.hira && isHiragana(ch)) || (!g.hira && isKatakana(ch)))
            );
        }).filter(ch => !usedChars.has(ch)); // 避免重複

        if (filtered.length > 0) {
            filtered.forEach(ch => usedChars.add(ch)); // 標記已使用
            const div = document.createElement("div");
            div.className = "group";
            div.innerHTML = `<strong>${g.title}：</strong>${filtered.join("、")}`;
            historyPopupEl.appendChild(div);
        }
    });

    // 放到 popup-area 下方
    const popupAreaRect = document.querySelector(".popup-area").getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    historyPopupEl.style.top = `${popupAreaRect.bottom + scrollTop + 10}px`;

    historyPopupEl.classList.add("show");
}

