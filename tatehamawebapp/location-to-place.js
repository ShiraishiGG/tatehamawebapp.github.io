// JavaScript source code
function location_to_place() {



    var dianame_location = {}; // �_�C�����Əꏊ�̑Ή����i�[����I�u�W�F�N�g

   
    Location_data.TrackCircuitData.forEach(function (TrackCircuit) {

        //console.log(TrackCircuit.Name + ' ' + TrackCircuit.Last + ' ' + TrackCircuit.On + ' ' + TrackCircuit.Lock);

        ss.filter(Trackname => Trackname[0] == TrackCircuit.Name);

        var Trainlocation = ss.filter(Trackname => Trackname[0] == TrackCircuit.Name)[0]; //�ꏊ�����擾
        //console.log(Trainlocation);



        //�ݐ��ʒu��T��//

        if (Trainlocation[2] == null) {  //�w�ɍݐ����Ă鎞//
            Place_name = Trainlocation[1]
        }

        else {   //�w�Ԃɍݐ����Ă鎞(nextsta��null�̂Ƃ�)//
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
                location_dianame[value] = []; // �w�����L�[�A�_�C������l�Ƃ��Ċi�[����z���������
            }

            location_dianame[value].push(key); // �w�����L�[�A�_�C������l�Ƃ��Ċi�[
        }
    }
    console.log(location_dianame);

    return location_dianame; // �w�����L�[�A�_�C������l�Ƃ��Ċi�[�����I�u�W�F�N�g��Ԃ�

}