const quotes = [
  "行動することが、恐れを消す唯一の方法だ。",
  "成功とは、失敗を重ねても情熱を失わないことだ。",
  "やる前に諦めるな。諦めるならやってから諦めろ。",
  "今日できることを、明日に延ばすな。",
  "夢を見るだけでは足りない。行動が夢を現実にする。",
  "失敗は成功のもと。転ぶことを恐れるな。",
  "自分を信じる者だけが、限界を超えられる。",
  "小さな一歩が、大きな変化を生む。"
];

function showQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[idx];
}
