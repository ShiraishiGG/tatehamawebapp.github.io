// JavaScript source code

// デフォルト文言
const DEFAULT_INFORMATION_TEXT = `【館浜本線 運転会時間外】
館浜本線は、現在運転会時間外のため、運転を見合わせています。`;

// 運行情報テキスト
window.informationtexts = [{ "Type": 1, Content: DEFAULT_INFORMATION_TEXT }];
window.informationindex = 0;

function updateInformationText() {
    window.informationtexts = Location_data.OperationInformations.length != 0 ? Location_data.OperationInformations : [{"Type": 1 ,Content: DEFAULT_INFORMATION_TEXT }]
}

function printInformationText() {
    window.informationindex
    const elBottom = document.getElementById('scrolling-text-bottom');
    //表示番号を進める
    window.informationindex++
    //運行情報の数と比較して、インデックスが飛び出たら0に戻す
    if (window.informationtexts.length <= window.informationindex) {
        window.informationindex = 0;
    }

    console.log("運行情報の表示番号: ", window.informationtexts);
    console.log("運行情報の表示番号: ", window.informationindex);
    let textToShow = (window.informationtexts[window.informationindex].Content.trim()) ? window.informationtexts[window.informationindex].Content : DEFAULT_INFORMATION_TEXT;

    if (elBottom) {
        elBottom.textContent = textToShow.replace("\n", "");
        //if (textToShow === DEFAULT_INFORMATION_TEXT) {
        //    elBottom.classList.remove('scrolling-text');
        //    elBottom.classList.add('default-info-text');
        //} else {
            elBottom.classList.add('scrolling-text');
            elBottom.classList.remove('default-info-text');
        //}
    }
}

document.addEventListener('DOMContentLoaded', function () {
    printInformationText();

    // 20秒ごとに再表示
    setInterval(printInformationText, 20000);

    const areaIds = ['scrolling-text-area'];
    const modal = document.getElementById('info-modal');
    const modalBody = document.getElementById('info-modal-body');
    const modalClose = document.getElementById('info-modal-close');

    areaIds.forEach(function (id) {
        const area = document.getElementById(id);
        if (area && modal && modalBody && modalClose) {
            area.addEventListener('click', function () {
                // モーダル表示時も最新内容に
                let textToShow = (window.informationtexts[window.informationindex].Content.trim()) ? window.informationtexts[window.informationindex].Content : DEFAULT_INFORMATION_TEXT;
                modalBody.innerHTML = `
                    <h2>運行情報</h2>
                    <div class="info-modal-message">${textToShow.replace(/\r\n/g, '<br/>')}</div>
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