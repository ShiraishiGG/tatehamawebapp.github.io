
async function Interval() {
    await Getdata();
    placeAllTrainIconsByLocation();
    updateTime();
}
Interval();
// 10�b���ƂɎ��s
setInterval(Interval, 10000);