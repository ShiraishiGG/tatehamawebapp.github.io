
async function Interval() {
    await Getdata();
    placeAllTrainIconsByLocation();
    updateTime();
}
Interval();
// 10•b‚²‚Æ‚ÉŽÀs
setInterval(Interval, 10000);