document.addEventListener('DOMContentLoaded', function () {
    // 各要素取得
    const diaLink = document.querySelector('.link-icon a[href="#dia-info"]');
    const diaInfo = document.getElementById('dia-info-content');
    const diaInfoLines = document.getElementById('dia-info-lines');
    const diaInfoSlider = document.getElementById('dia-info-slider');
    const roleIcons = document.getElementById('role-icons');
    const roleDetailTitle = document.getElementById('role-detail-title');
    const roleDetailLines = document.getElementById('role-detail-lines');

    // 「ダイヤ運転会とは」用テキスト
    const lines = [
        "館浜電鉄ダイヤ運転会。",
        "ここで行われているのは、TRAIN CREWというゲームを使用したロールプレイング。",
        "要は派手な電車ごっこです。",
        "",
        "しかし、一人一人がその職責を自覚し行動することで、ただのごっこ遊びではなく全力のごっこ遊びになります。",
        "",
        "時間通りに運転をしなければならない。",
        "オーバーランをすると周りに迷惑がかかってしまう。",
        "やり直しの効かない、ゲームとしてのプレイだけでは味わえない緊張感。",
        "",
        "そんな中で列車を走らせ、共に全力のごっこ遊びを楽しみましょう！",
        "",
        "",
    ];

    // 1行ずつテキストを表示（targetElementに）
    function showLinesOneByOne(linesToShow, targetElement) {
        targetElement.innerHTML = "";
        linesToShow.forEach((line) => {
            const span = document.createElement('span');
            span.className = 'dia-line';
            if (line.trim() === "") {
                span.classList.add('empty');
            }
            span.textContent = line;
            span.style.display = "block";
            targetElement.appendChild(span);
        });

        const spans = targetElement.querySelectorAll('.dia-line');
        spans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('visible');
            }, idx * 100);
        });
    }

    // 役割詳細イベント登録関数
    function setupRoleDetailEvents() {
        // 運転士
        const untenshiLink = document.querySelector('a[href="#role-untenshi"]');
        if (untenshiLink) {
            untenshiLink.addEventListener('click', function (e) {
                e.preventDefault();
                const untenshiLines = [
                    "あ",
                    "い",
                    "う"
                ];
                roleDetailTitle.textContent = 'ダイヤ運転会における『運転士』';
                roleDetailTitle.classList.add('visible');
                showLinesOneByOne(untenshiLines, roleDetailLines);
            });
        }
        // 信号扱い者
        const signalLink = document.querySelector('a[href="#role-signal"]');
        if (signalLink) {
            signalLink.addEventListener('click', function (e) {
                e.preventDefault();
                const signalLines = [
                    "あ",
                    "い",
                    "う"
                ];
                roleDetailTitle.textContent = 'ダイヤ運転会における『信号扱い者』';
                roleDetailTitle.classList.add('visible');
                showLinesOneByOne(signalLines, roleDetailLines);
            });
        }
        // 司令員
        const shireiLink = document.querySelector('a[href="#role-shirei"]');
        if (shireiLink) {
            shireiLink.addEventListener('click', function (e) {
                e.preventDefault();
                const shireiLines = [
                    "あ",
                    "い",
                    "う"
                ];
                roleDetailTitle.textContent = 'ダイヤ運転会における『司令員』';
                roleDetailTitle.classList.add('visible');
                showLinesOneByOne(shireiLines, roleDetailLines);
            });
        }
    }

    // 1度だけイベント登録
    let roleEventsRegistered = false;

    // 「ダイヤ運転会とは」クリックでギミック発動
    if (diaLink && diaInfo) {
        diaLink.addEventListener('click', function (e) {
            e.preventDefault();
            if (diaInfo.classList.contains('visible')) {
                diaInfo.scrollIntoView({ behavior: 'smooth' });
                return;
            }
            diaInfo.style.display = 'block';
            setTimeout(function () {
                diaInfo.classList.add('visible');
                // メインテキストを1行ずつ表示
                showLinesOneByOne(lines, diaInfoLines);

                // 画像→role-iconsの順にフェードイン
                setTimeout(() => {
                    if (diaInfoSlider) {
                        diaInfoSlider.style.display = 'block';
                        setTimeout(() => {
                            diaInfoSlider.style.opacity = 1;
                            setTimeout(() => {
                                if (roleIcons) {
                                    roleIcons.style.display = 'flex';
                                    setTimeout(() => {
                                        roleIcons.classList.add('visible');
                                        if (!roleEventsRegistered) {
                                            setupRoleDetailEvents();
                                            roleEventsRegistered = true;
                                        }
                                    }, 20);
                                }
                            }, 700);
                        }, 20);
                    }
                }, lines.length * 100 + 200); // テキスト表示後に画像・アイコン
            }, 20);
            diaInfo.scrollIntoView({ behavior: 'smooth' });
        });
    }
});