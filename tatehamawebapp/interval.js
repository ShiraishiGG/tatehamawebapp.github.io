
async function Interval() {
    await Getdata();
    placeAllTrainIconsByLocation();
    updateTime();
}
Interval();
// 10ïbÇ≤Ç∆Ç…é¿çs
setInterval(Interval, 10000);