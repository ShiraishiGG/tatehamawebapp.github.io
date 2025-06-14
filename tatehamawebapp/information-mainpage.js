// JavaScript source code
// �^�s���e�L�X�g ���C���y�[�W
window.informationtext = "�y�ݔ��_���@��Ԃ̒x��z <br> �ٕl�{���@�C�݌����`���P�l�w�Ԃł̕ۈ����u�_���̂��߁A�ٕl�{���@�哹���`�ٕl�Ԃő啝�ȃ_�C�����ꂪ�������Ă��܂��B<br>�����f�����|�����܂����Ƃ����l�ѐ\���グ�܂��B<br>�U�֗A���͋��ۂ���܂����B";

document.addEventListener('DOMContentLoaded', function () {
    const elBottom = document.getElementById('scrolling-text-bottom');
    if (elBottom) {
        // <br>�^�O���������ăe�L�X�g�̂ݕ\��
        elBottom.textContent = window.informationtext.replace(/<br\s*\/?>/gi, "");
    }

    // ���[�_���\������
    const area = document.getElementById('scrolling-text-area-mainpage');
    const modal = document.getElementById('info-modal');
    const modalBody = document.getElementById('info-modal-body');
    const modalClose = document.getElementById('info-modal-close');

    if (area && modal && modalBody && modalClose) {
        area.addEventListener('click', function () {
            modalBody.innerHTML = `
        <h2>�^�s���</h2>
        <div class="info-modal-message">${window.informationtext}</div>
    `;
            modal.style.display = 'flex';
        });
        modalClose.addEventListener('click', function () {
            modal.style.display = 'none';
        });
        // ���[�_���O�N���b�N�ŕ���
        modal.addEventListener('click', function (e) {
            if (e.target === modal) modal.style.display = 'none';
        });
    }
});