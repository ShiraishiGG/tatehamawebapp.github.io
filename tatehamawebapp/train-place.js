// JavaScript source code
function TrainPlace(sta1, sta2, updown, count, position, type, dianame) {





    //�ݐ��ʒu��T��//
  
    if (sta2 == null) {  //�w�ɍݐ����Ă鎞//
        Place_name = sta1
    }

    else {   //�w�Ԃɍݐ����Ă鎞(nextsta��null�̂Ƃ�)//
        Place_name = sta1 + '-' + sta2
    }



    //�u���ꏊ��T��//
    Train_icon_container = document.getElementById(Place_name);
    Train_icon_position = 'train-icon-ss' + count + '-' + updown + position; //��: train-icon-ss1-up1


    //�u���A�C�R�������߂�//
    Train_icon = 'train-' + updown + '-' + type;




    //�T�����ꏊ�ɃA�C�R����u��//

    console.log('Place_name: ' + Place_name);
    console.log('Train_icon_position: ' + Train_icon_position);
    console.log('Train_icon: ' + Train_icon)
    console.log('Train_icon_container: ' + Train_icon_container);

    Train_icon_container.innerHTML += '<div class="' + Train_icon + ' ' + Train_icon_position + '"></div>';


    // <div class="train-icon-ss1-up1"></div>   <!-- ���1-1 -->
}