// JavaScript source code


// 運行情報テキスト
window.informationtext = "【設備点検　列車の遅れ】 <br> 館浜本線　海岸公園～虹ケ浜駅間での保安装置点検のため、館浜本線　大道寺～館浜間で大幅なダイヤ乱れが発生しています。<br>ご迷惑をお掛けしますことをお詫び申し上げます。<br>振替輸送は拒否されました。";

document.addEventListener('DOMContentLoaded', function () {
    const elBottom = document.getElementById('scrolling-text-bottom');
    if (elBottom) {
        // <br>タグを除去してテキストのみ表示
        elBottom.textContent = window.informationtext.replace(/<br\s*\/?>/gi, "");
    }

    // モーダル表示処理
    const area = document.getElementById('scrolling-text-area');
    const modal = document.getElementById('info-modal');
    const modalBody = document.getElementById('info-modal-body');
    const modalClose = document.getElementById('info-modal-close');

    if (area && modal && modalBody && modalClose) {
        area.addEventListener('click', function () {
            modalBody.innerHTML = `
        <h2>運行情報</h2>
        <div class="info-modal-message">${window.informationtext}</div>
    `;
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