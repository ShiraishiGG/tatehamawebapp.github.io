// �ԗ���񂩂�摜�t�@�C���������肷��֐�
function getCarImageFileNames(carStates) {
    if (!Array.isArray(carStates)) return [];
    let count50000 = 0;
    let count50100 = 0; // �ǉ�: 2����/5���ڗp�J�E���^
    return carStates.map((car, idx) => {

        // �擪�Ԕ���
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

        // 2����or5���ڔ��ʁiTC_50100/TC_50250�j
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

        // CarModel��4300�̏ꍇ
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

// CarStates�z�񂩂�摜�^�O�𐶐����ĉ����тŕԂ��֐�
function renderCarImages(carStates) {
    const imgList = getCarImageFileNames(carStates);
    // imgList[idx] �Ōʉ摜�����擾�ł��܂�
    return `<div class="train-car-image-row" style="margin-top:1em; text-align:center;">`
        + imgList.map((imgSrc, idx) => {
            const alt = carStates[idx]?.CarModel ?? "";
            return `<img src="${imgSrc}" alt="${alt}" class="car-image" style="height:40px; margin:0 2px; vertical-align:middle;" onerror="this.onerror=null;this.src='caricons/noimage.png';">`;
        }).join('')
        + `</div>`;
}

// --- �g�p�� ---
// ��: Location_data.TrainInfos["1113A"].CarStates ��\���������ꍇ
// const carImagesHtml = renderCarImages(Location_data.TrainInfos["1113A"].CarStates);
// document.getElementById("�C�ӂ̕\���G���AID").innerHTML = carImagesHtml;