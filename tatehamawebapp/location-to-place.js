// JavaScript source code
function location_to_place() {



    var dianame_location = {}; // ダイヤ名と場所の対応を格納するオブジェクト

   
    Location_data.TrackCircuitData.forEach(function (TrackCircuit) {

        //console.log(TrackCircuit.Name + ' ' + TrackCircuit.Last + ' ' + TrackCircuit.On + ' ' + TrackCircuit.Lock);

        ss.filter(Trackname => Trackname[0] == TrackCircuit.Name);

        var Trainlocation = ss.filter(Trackname => Trackname[0] == TrackCircuit.Name)[0]; //場所名を取得
        //console.log(Trainlocation);



        //在線位置を探す//

        if (Trainlocation[2] == null) {  //駅に在線してる時//
            Place_name = Trainlocation[1]
        }

        else {   //駅間に在線してる時(nextstaがnullのとき)//
            Place_name = Trainlocation[1] + '-' + Trainlocation[2]
        }



        dianame_location[TrackCircuit.Last] = Place_name 

    }
    )
    console.log(dianame_location);







    var location_dianame = {}; 

    for(var key in dianame_location) {
        if (dianame_location.hasOwnProperty(key)) {
            var value = dianame_location[key];
            if (location_dianame[value] == undefined) {
                location_dianame[value] = []; // 駅名をキー、ダイヤ名を値として格納する配列を初期化
            }

            location_dianame[value].push(key); // 駅名をキー、ダイヤ名を値として格納
        }
    }
    console.log(location_dianame);

    return location_dianame; // 駅名をキー、ダイヤ名を値として格納したオブジェクトを返す

}