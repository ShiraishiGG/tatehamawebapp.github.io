
async function Interval() {

    await Getdata();
    updateInformationText();
}

document.addEventListener('DOMContentLoaded', async function () {
    await Interval();
    // 10ïbÇ≤Ç∆Ç…é¿çs
    setInterval(Interval, 10000);
    initInfo();
}
);