
async function Interval() {

    await Getdata();
    updateInformationText();
}

document.addEventListener('DOMContentLoaded', async function () {
    await Interval();
    // 10秒ごとに実行
    setInterval(Interval, 10000);
    initInfo();
}
);