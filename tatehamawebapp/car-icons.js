// 車両情報から画像ファイル名を決定する関数
function getCarImageFileNames(carStates) {
    if (!Array.isArray(carStates)) return [];
    let count50000 = 0;
    let count50100 = 0; // 追加: 2両目/5両目用カウンタ
    let count5320 = 0; // 追加: 5320用カウンタ
    let count5420 = 0; // 追加: 5420用カウンタ
    let count5300 = 0; // 追加: 5300用カウンタ
    let count4321 = 0;  // 追加: 4321用カウンタ
    let count4300 = 0; // 追加: 4300用カウンタ
    let count4600 = 0; // 追加: 4600用カウンタ
    let count4000 = 0; // 追加: 4000用カウンタ
    let count4000t = 0; // 追加: 4000 T車用カウンタ
    let count4000R = 0; // 追加: 4000R用カウンタ
    let count4000Rt = 0; // 追加: 4000R T車用カウンタ
    let count3300 = 0; // 追加: 3300用カウンタ
    let count3020m = 0; // 追加: 3020 M車用カウンタ
    let count3020t = 0; // 追加: 3020 T車用カウンタ
    let count3000m = 0; // 追加: 3000 M車用カウンタ
    let count3000t = 0; // 追加: 3000 T車用カウンタ

    return carStates.map((car, idx) => {

        // 50000
        // 先頭車判別
        if (
            car.CarModel === "50000" &&
            car.HasPantograph === false &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === false
        ) {
            count50000++;
            return count50000 === 1 ? "caricons/TC_50000.png" : "caricons/TC_50050.png";
        }

        // 2両目or5両目判別（TC_50100/TC_50250）
        if (
            car.CarModel === "50000" &&
            car.HasPantograph === true &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === true
        ) {
            count50100++;
            return count50100 === 1 ? "caricons/TC_50100.png" : "caricons/TC_50250.png";
        }

        // 3. TC_50300.png
        if (
            car.CarModel === "50000" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === true
        ) {
            return "caricons/TC_50300.png";
        }
        // 4. TC_50200.png
        if (
            car.CarModel === "50000" &&
            car.HasPantograph === true &&
            car.HasDriverCab === false &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            return "caricons/TC_50200.png";
        }



        // 5320
        if (
            car.CarModel === "5320" &&
            car.HasPantograph === true &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            count5320++;
            return count5320 === 1 ? "caricons/TC_5320.png" : "caricons/TC_5370.png";
        }

        if (
            car.CarModel === "5320" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            count5420++;
            return count5420 === 1 ? "caricons/TC_5420.png" : "caricons/TC_5470.png";
        }



        // 5300 - 1or4
        if (
            car.CarModel === "5300" &&
            car.HasPantograph === false &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            count5300++;
            return count5300 === 1 ? "caricons/TC_5300.png" : "caricons/TC_5350.png";
        }


        // 5300 - 2
        if (
            car.CarModel === "5300" &&
            car.HasPantograph === true &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            return "caricons/TC_5400.png";
        }

        // 5300 - 3
        if (
            car.CarModel === "5300" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            return "caricons/TC_5450.png";
        }



        // 5500 - 1
        if (
            car.CarModel === "5300" &&
            car.HasPantograph === true &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            return "caricons/TC_5500.png";
        }
        // 5500 - 2
        if (
            car.CarModel === "5300" &&
            car.HasPantograph === false &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === false
        ) {
            return "caricons/TC_5500.png";
        }

        // 5600 - 1
        if (
            car.CarModel === "5600" &&
            car.HasPantograph === true &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            return "caricons/TC_5600.png";
        }
        // 5600 - 2
        if (
            car.CarModel === "5600" &&
            car.HasPantograph === false &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            return "caricons/TC_5650.png";
        }



        // 4321 - 1or4
        if (
            car.CarModel === "4321" &&
            car.HasPantograph === false &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            count4321++;
            return count4321 === 1 ? "caricons/TC_4321.png" : "caricons/TC_4371.png";
        }


        // 4321 - 2
        if (
            car.CarModel === "4321" &&
            car.HasPantograph === true &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            return "caricons/TC_4421.png";
        }

        // 4321 - 3
        if (
            car.CarModel === "4321" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            return "caricons/TC_4471.png";
        }



        // 4300 - 1or4
        if (
            car.CarModel === "4300" &&
            car.HasPantograph === false &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            count4300++;
            return count4300 === 1 ? "caricons/TC_4300.png" : "caricons/TC_4350.png";
        }


        // 4300 - 2
        if (
            car.CarModel === "4300" &&
            car.HasPantograph === true &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            return "caricons/TC_4400.png";
        }

        // 4300 - 3
        if (
            car.CarModel === "4300" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            return "caricons/TC_4450.png";
        }



        // 4500 - 1
        if (
            car.CarModel === "4300" &&
            car.HasPantograph === true &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            return "caricons/TC_4500.png";
        }
        // 4500 - 2
        if (
            car.CarModel === "4300" &&
            car.HasPantograph === false &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === false
        ) {
            return "caricons/TC_4550.png";
        }



        // 4600 - 1or4
        if (
            car.CarModel === "4600" &&
            car.HasPantograph === false &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            count4600++;
            return count4600 === 1 ? "caricons/TC_4600.png" : "caricons/TC_4650.png";
        }


        // 4600 - 2
        if (
            car.CarModel === "4600" &&
            car.HasPantograph === true &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            return "caricons/TC_4700.png";
        }

        // 4600 - 3
        if (
            car.CarModel === "4600" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            return "caricons/TC_4750.png";
        }



        // 4800 - 1
        if (
            car.CarModel === "4600" &&
            car.HasPantograph === true &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            return "caricons/TC_4800.png";
        }
        // 4800 - 2
        if (
            car.CarModel === "4600" &&
            car.HasPantograph === false &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === false
        ) {
            return "caricons/TC_4850.png";
        }



        // 4000 - 1or6
        if (
            car.CarModel === "4000" &&
            car.HasPantograph === true &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            count4000++;
            return count4000 === 1 ? "caricons/TC_4000.png" : "caricons/TC_4050.png";
        }
        // 4000 - T車
        if (
            car.CarModel === "4000" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            count4000t++;
            if (count4000t === 1) return "caricons/TC_4100.png";
            if (count4000t === 2) return "caricons/TC_4250.png";
            if (count4000t === 3) return "caricons/TC_4150.png";
        }
        // 4000 - 3
        if (
            car.CarModel === "4000" &&
            car.HasPantograph === true &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === true
        ) {
            return "caricons/TC_4200.png";
        }



        // 4000R - 1or6
        if (
            car.CarModel === "4000R" &&
            car.HasPantograph === true &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            count4000R++;
            return count4000R === 1 ? "caricons/TC_4000r.png" : "caricons/TC_4050r.png";
        }
        // 4000R - T車
        if (
            car.CarModel === "4000R" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            count4000Rt++;
            if (count4000Rt === 1) return "caricons/TC_4100r.png";
            if (count4000Rt === 2) return "caricons/TC_4250r.png";
            if (count4000Rt === 3) return "caricons/TC_4150r.png";
        }
        // 4000R - 3
        if (
            car.CarModel === "4000R" &&
            car.HasPantograph === true &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === true
        ) {
            return "caricons/TC_4200r.png";
        }



        // 3300 - 1or3
        if (
            car.CarModel === "3300" &&
            car.HasPantograph === true &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            count3300++;
            if (count3300 === 1) return "caricons/TC_3300.png";
            if (count3300 === 2) return "caricons/TC_3400.png";
            if (count3300 === 3) return "caricons/TC_3300.png";
            if (count3300 === 4) return "caricons/TC_3400.png";
        }
        // 3300 - T
        if (
            car.CarModel === "3300" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            return "caricons/TC_3800.png";
        }



        // 3020 - 1 3 or 6
        if (
            car.CarModel === "3020" &&
            car.HasPantograph === true &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            count3020m++;
            if (count3020m === 1) return "caricons/TC_3020.png";
            if (count3020m === 2) return "caricons/TC_3020.png";
            if (count3020m === 3) return "caricons/TC_3120.png";
        }
        // 3020 - 2 4
        if (
            car.CarModel === "3020" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            count3020t++;
            if (count3020t === 1) return "caricons/TC_3520.png";
            if (count3020t === 2) return "caricons/TC_3520.png";
            if (count3020t === 3) return "caricons/TC_3620.png";
        }



        // 3000 - 1 4 or 6
        if (
            car.CarModel === "3000" &&
            car.HasPantograph === true &&
            car.HasDriverCab === true &&
            car.HasConductorCab === true &&
            car.HasMotor === true
        ) {
            count3000m++;
            if (count3000m === 1) return "caricons/TC_3000.png";
            if (count3000m === 2) return "caricons/TC_3100.png";
            if (count3000m === 3) return "caricons/TC_3100.png";
        }
        // 3000 - 2 3 or 4
        if (
            car.CarModel === "3000" &&
            car.HasPantograph === false &&
            car.HasDriverCab === false &&
            car.HasConductorCab === false &&
            car.HasMotor === false
        ) {
            count3000t++;
            if (count3000t === 1) return "caricons/TC_3500.png";
            if (count3000t === 2) return "caricons/TC_3600.png";
            if (count3000t === 3) return "caricons/TC_3600.png";
        }

















        return "caricons/TC_9999.png";
    });
}

// CarStates配列から画像タグを生成して横並びで返す関数
function renderCarImages(carStates) {
    const imgList = getCarImageFileNames(carStates);
    // imgList[idx] で個別画像名が取得できます
    return `<div class="train-car-image-row" style="margin-top:1em; text-align:center;">`
        + imgList.map((imgSrc, idx) => {
            const alt = carStates[idx]?.CarModel ?? "";
            return `<img src="${imgSrc}" alt="${alt}" class="car-image" style="height:40px; margin:0 2px; vertical-align:middle;" onerror="this.onerror=null;this.src='caricons/noimage.png';">`;
        }).join('')
        + `</div>`;
}

// --- 使用例 ---
// 例: Location_data.TrainInfos["1113A"].CarStates を表示したい場合
// const carImagesHtml = renderCarImages(Location_data.TrainInfos["1113A"].CarStates);
// document.getElementById("任意の表示エリアID").innerHTML = carImagesHtml;