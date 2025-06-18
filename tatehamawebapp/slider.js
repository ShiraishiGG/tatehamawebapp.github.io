// toppageディレクトリ内の画像ファイル名リスト（1.jpg～24.jpgを自動生成）
const toppageImages = Array.from({ length: 23 }, (_, i) => `${i + 1}.jpg`);

// 配列をランダムにシャッフルする関数
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.getElementById('slider-img-1');
    const img2 = document.getElementById('slider-img-2');
    const shuffled = shuffle([...toppageImages]);
    let current = 0;
    let showingFirst = true;

    // 最初の画像
    img1.src = "toppage/" + shuffled[current];
    img1.style.opacity = 1;
    img2.style.opacity = 0;

    // 事前に次画像を非表示側にセット
    let next = (current + 1) % shuffled.length;
    img2.src = "toppage/" + shuffled[next];

    setInterval(() => {
        // 切り替え時は既に非表示側に次画像がセット済み
        if (showingFirst) {
            img2.style.zIndex = 2;
            img1.style.zIndex = 1;
            img2.style.opacity = 1;
            img1.style.opacity = 0;
        } else {
            img1.style.zIndex = 2;
            img2.style.zIndex = 1;
            img1.style.opacity = 1;
            img2.style.opacity = 0;
        }
        showingFirst = !showingFirst;

        // 次の画像を事前に非表示側にセット
        current = (current + 1) % shuffled.length;
        next = (current + 1) % shuffled.length;
        setTimeout(() => {
            if (showingFirst) {
                img2.src = "toppage/" + shuffled[next];
            } else {
                img1.src = "toppage/" + shuffled[next];
            }
        }, 1200);
    }, 3500);
});