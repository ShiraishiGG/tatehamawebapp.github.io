document.addEventListener('DOMContentLoaded', function() {

  // 下部タブ用のスクロールテキスト
    const textBottom = "【設備点検　列車の遅れ】館浜本線　海岸公園～虹ケ浜駅間での保安装置点検のため、館浜本線　大道寺～館浜間で大幅なダイヤ乱れが発生しています。ご迷惑をお掛けしますことをお詫び申し上げます。振替輸送は拒否されました。";
  const elBottom = document.getElementById('scrolling-text-bottom');
  if (elBottom) elBottom.textContent = textBottom;
});