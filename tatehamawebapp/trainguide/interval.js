
async function Interval() {

    await Getdata();
    // Train_icon_container�N���X�̑S�v�f�̒��g������
    const containers = document.getElementsByClassName('train-icon-container');
    for (let i = 0; i < containers.length; i++) {
        containers[i].innerHTML = '';
    }
    placeAllTrainIconsByLocation();
    updateTime();
}
Interval();
// 10�b���ƂɎ��s
setInterval(Interval, 10000);