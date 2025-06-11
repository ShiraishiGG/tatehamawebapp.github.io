// 車両情報から画像ファイル名を決定する関数
function getCarImageFileNames(carStates) {
    if (!Array.isArray(carStates)) return [];
    let count50000 = 0;
    let count50100 = 0; // 追加: 2両目/5両目用カウンタ
    return carStates.map((car, idx) => {

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

        // CarModelが4300の場合
        if (car.CarModel === "4300") {
            if (car.HasPantograph) {
                return "caricons/TC_4500.png";
            } else {
                return "caricons/TC_4550.png";
            }
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