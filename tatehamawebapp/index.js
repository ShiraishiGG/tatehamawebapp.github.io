// 「ダイヤ運転会とは」リンクをクリックしたときに
// ページ下部の説明をフェードイン表示するスクリプト

document.addEventListener('DOMContentLoaded', function () {
    // 「ダイヤ運転会とは」リンクを取得
    const diaLink = document.querySelector('.link-icon a[href="#dia-info"]');
    const diaInfo = document.getElementById('dia-info-content');

    if (diaLink && diaInfo) {
        diaLink.addEventListener('click', function (e) {
            e.preventDefault();

            // すでに表示済みならスクロールだけ
            if (diaInfo.classList.contains('visible')) {
                diaInfo.scrollIntoView({ behavior: 'smooth' });
                return;
            }

            // フェードイン表示
            diaInfo.style.display = 'block';
            setTimeout(function () {
                diaInfo.classList.add('visible');
            }, 10);

            diaInfo.scrollIntoView({ behavior: 'smooth' });
        });
    }
});