
async function Interval() {

    await Getdata();
    updateInformationText();
}

document.addEventListener('DOMContentLoaded', async function () {
    await Interval();
    // 10�b���ƂɎ��s
    setInterval(Interval, 10000);
    initInfo();
}
);