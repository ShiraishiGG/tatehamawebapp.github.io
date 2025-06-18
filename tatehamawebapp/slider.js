// toppage�f�B���N�g�����̉摜�t�@�C�������X�g�i1.jpg�`24.jpg�����������j
const toppageImages = Array.from({ length: 23 }, (_, i) => `${i + 1}.jpg`);

// �z��������_���ɃV���b�t������֐�
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

    // �ŏ��̉摜
    img1.src = "toppage/" + shuffled[current];
    img1.style.opacity = 1;
    img2.style.opacity = 0;

    // ���O�Ɏ��摜���\�����ɃZ�b�g
    let next = (current + 1) % shuffled.length;
    img2.src = "toppage/" + shuffled[next];

    setInterval(() => {
        // �؂�ւ����͊��ɔ�\�����Ɏ��摜���Z�b�g�ς�
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

        // ���̉摜�����O�ɔ�\�����ɃZ�b�g
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