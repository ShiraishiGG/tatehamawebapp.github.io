// toppageディレクトリ内の画像ファイル名リスト
const toppageImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg"
];

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

    setInterval(() => {
        current = (current + 1) % shuffled.length;
        const nextImg = "toppage/" + shuffled[current];

        if (showingFirst) {
            img2.src = nextImg;
            img2.style.zIndex = 2;
            img1.style.zIndex = 1;
            img2.style.opacity = 1;
            img1.style.opacity = 0;
        } else {
            img1.src = nextImg;
            img1.style.zIndex = 2;
            img2.style.zIndex = 1;
            img1.style.opacity = 1;
            img2.style.opacity = 0;
        }
        showingFirst = !showingFirst;
    }, 3500);
});