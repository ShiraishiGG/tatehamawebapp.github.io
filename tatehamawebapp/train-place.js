// JavaScript source code
function TrainPlace(sta1, sta2, updown, count, position, type, dianame) {





    //在線位置を探す//

    if (sta2 == null) {  //駅に在線してる時//
        Place_name = sta1
    }

    else {   //駅間に在線してる時(nextstaがnullのとき)//
        Place_name = sta1 + '-' + sta2
    }



    //置く場所を探す//
    Train_icon_container = document.getElementById(Place_name);


    if (sta2 == null) {  //駅に在線してる時//
        Train_icon_position = 'train-icon-' + updown + position; //例: train-icon-up1
    }

    else {   //駅間に在線してる時(nextstaがnullのとき)//
        Train_icon_position = 'train-icon-ss' + count + '-' + updown + position; //例: train-icon-ss1-up1
    }


    //置くアイコンを決める//
    Train_icon = 'train-' + updown + '-' + type;


    console.log('Place_name: ' + Place_name);
    console.log('Train_icon_position: ' + Train_icon_position);
    console.log('Train_icon: ' + Train_icon)
    console.log('Train_icon_container: ' + Train_icon_container);



    //探した場所にアイコンを置く//
    Train_icon_container.innerHTML +=
      '<div class="train-icon ' + Train_icon + ' ' + Train_icon_position + '" data-train-id="' + dianame + '"></div>';



    // <div class="train-icon-ss1-up1"></div>   <!-- 上り1-1 -->
}