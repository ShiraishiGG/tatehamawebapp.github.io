// JavaScript source code
// 運行情報テキスト
window.textBottom = "【設備点検　列車の遅れ】館浜本線　海岸公園～虹ケ浜駅間での保安装置点検のため、館浜本線　大道寺～館浜間で大幅なダイヤ乱れが発生しています。ご迷惑をお掛けしますことをお詫び申し上げます。振替輸送は拒否されました。";

document.addEventListener('DOMContentLoaded', function () {
    const elBottom = document.getElementById('scrolling-text-bottom');
    if (elBottom) elBottom.textContent = window.textBottom;

    // モーダル表示処理
    const area = document.getElementById('scrolling-text-area');
    const modal = document.getElementById('info-modal');
    const modalBody = document.getElementById('info-modal-body');
    const modalClose = document.getElementById('info-modal-close');

    if (area && modal && modalBody && modalClose) {
        area.addEventListener('click', function () {
            modalBody.textContent = window.textBottom;
            modal.style.display = 'flex';
        });
        modalClose.addEventListener('click', function () {
            modal.style.display = 'none';
        });
        // モーダル外クリックで閉じる
        modal.addEventListener('click', function (e) {
            if (e.target === modal) modal.style.display = 'none';
        });
    }
});