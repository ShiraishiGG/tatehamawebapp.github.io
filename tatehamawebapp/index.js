// �u�_�C���^�]��Ƃ́v�����N���N���b�N�����Ƃ���
// �y�[�W�����̐������t�F�[�h�C���\������X�N���v�g

document.addEventListener('DOMContentLoaded', function () {
    // �u�_�C���^�]��Ƃ́v�����N���擾
    const diaLink = document.querySelector('.link-icon a[href="#dia-info"]');
    const diaInfo = document.getElementById('dia-info-content');

    if (diaLink && diaInfo) {
        diaLink.addEventListener('click', function (e) {
            e.preventDefault();

            // ���łɕ\���ς݂Ȃ�X�N���[������
            if (diaInfo.classList.contains('visible')) {
                diaInfo.scrollIntoView({ behavior: 'smooth' });
                return;
            }

            // �t�F�[�h�C���\��
            diaInfo.style.display = 'block';
            setTimeout(function () {
                diaInfo.classList.add('visible');
            }, 10);

            diaInfo.scrollIntoView({ behavior: 'smooth' });
        });
    }
});