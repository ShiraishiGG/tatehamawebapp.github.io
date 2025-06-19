// JavaScript source code

// デフォルト文言
const DEFAULT_INFORMATION_TEXT = "本日の運転は終了しました。";

// 運行情報テキスト
window.informationtext = window.informationtext ?? ""; // 他で上書きされている場合も考慮

function updateInformationText() {
    const elBottom = document.getElementById('scrolling-text-bottom');
    let textToShow = (window.informationtext && window.informationtext.trim()) ? window.informationtext : DEFAULT_INFORMATION_TEXT;

    if (elBottom) {
        elBottom.textContent = textToShow.replace(/<br\s*\/?>/gi, "");
        if (textToShow === DEFAULT_INFORMATION_TEXT) {
            elBottom.classList.remove('scrolling-text');
            elBottom.classList.add('default-info-text');
        } else {
            elBottom.classList.add('scrolling-text');
            elBottom.classList.remove('default-info-text');
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateInformationText();

    // 20秒ごとに再表示
    setInterval(updateInformationText, 20000);

    const areaIds = ['scrolling-text-area'];
    const modal = document.getElementById('info-modal');
    const modalBody = document.getElementById('info-modal-body');
    const modalClose = document.getElementById('info-modal-close');

    areaIds.forEach(function (id) {
        const area = document.getElementById(id);
        if (area && modal && modalBody && modalClose) {
            area.addEventListener('click', function () {
                // モーダル表示時も最新内容に
                let textToShow = (window.informationtext && window.informationtext.trim()) ? window.informationtext : DEFAULT_INFORMATION_TEXT;
                modalBody.innerHTML = `
        <h2>運行情報</h2>
        <div class="info-modal-message">${textToShow}</div>
    `;
                modal.style.display = 'flex';
            });
        }
    });

    if (modalClose && modal) {
        modalClose.addEventListener('click', function () {
            modal.style.display = 'none';
        });
        modal.addEventListener('click', function (e) {
            if (e.target === modal) modal.style.display = 'none';
        });
    }
});