// �ԗ���񂩂�摜�t�@�C���������肷��֐�
function getCarImageFileNames(carStates, isUp) {
    if (!Array.isArray(carStates)) return [];

    var copyCarStates = JSON.parse(JSON.stringify(carStates));
    if (isUp) {
        copyCarStates.reverse();
    }
    console.log("CarState:", copyCarStates);

    var formationList = formationComparison(copyCarStates);
    console.log("formationList:", formationList);
    if (formationList.length == 0) {
        // �Ґ���������Ȃ��A�㉺�t�̉\��������̂łЂ�����Ԃ��čēx�m�F
        copyCarStates2 = JSON.parse(JSON.stringify(carStates)).reverse();
        console.log("reverseCarState:", copyCarStates2);

        var formationList = formationComparison(copyCarStates2);
    }

    var iconList = [];
    formationList.map((f) => {
        console.log("f:", f);
        switch (f) {
            case "3000":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_3000.png",
                    "caricons/TC_3500.png",
                    "caricons/TC_3600.png",
                    "caricons/TC_3100h.png",
                    "caricons/TC_3600.png",
                    "caricons/TC_3100.png"
                ]);
                break;
            case "3020":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_3020.png",
                    "caricons/TC_3520.png",
                    "caricons/TC_3020h.png",
                    "caricons/TC_3520.png",
                    "caricons/TC_3620.png",
                    "caricons/TC_3120.png"
                ]);
                break;
            case "3300V":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_3300.png",
                    "caricons/TC_3800.png",
                    "caricons/TC_3400.png"
                ]);
                break;
            case "4000":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_4000.png",
                    "caricons/TC_4100.png",
                    "caricons/TC_4250.png",
                    "caricons/TC_4200.png",
                    "caricons/TC_4150.png",
                    "caricons/TC_4050.png"
                ]);
                break;
            case "4000R":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_4000r.png",
                    "caricons/TC_4100r.png",
                    "caricons/TC_4250r.png",
                    "caricons/TC_4200r.png",
                    "caricons/TC_4150r.png",
                    "caricons/TC_4050r.png"
                ]);
                break;
            case "4300":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_4300.png",
                    "caricons/TC_4400.png",
                    "caricons/TC_4450.png",
                    "caricons/TC_4350.png"
                ]);
                break;
            case "4500":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_4500.png",
                    "caricons/TC_4550.png"
                ]);
                break;
            case "4321":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_4321.png",
                    "caricons/TC_4421.png",
                    "caricons/TC_4471.png",
                    "caricons/TC_4371.png"
                ]);
                break;
            case "4600":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_4600.png",
                    "caricons/TC_4700.png",
                    "caricons/TC_4750.png",
                    "caricons/TC_4650.png"
                ]);
                break;
            case "4800":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_4800.png",
                    "caricons/TC_4850.png"
                ]);
                break;
            case "5300":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_5300.png",
                    "caricons/TC_5400.png",
                    "caricons/TC_5450.png",
                    "caricons/TC_5350.png"
                ]);
                break;
            case "5500":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_5500.png",
                    "caricons/TC_5550.png"
                ]);
                break;
            case "5600":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_5600.png",
                    "caricons/TC_5650.png"
                ]);
                break;
            case "5320":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_5320.png",
                    "caricons/TC_5420.png",
                    "caricons/TC_5470.png",
                    "caricons/TC_5370.png"
                ]);
                break;
            case "50000":
                iconList = iconListConcat(iconList, [
                    "caricons/TC_50000.png",
                    "caricons/TC_50100.png",
                    "caricons/TC_50300.png",
                    "caricons/TC_50200.png",
                    "caricons/TC_50250.png",
                    "caricons/TC_50050.png"
                ]);
                break;
            default:
                iconList = iconList.concat([
                    "caricons/TC_9999.png"
                ]);
        }
    });

    if (iconList.length != copyCarStates.length) {
        // �A�C�R�����ƕҐ�����������Ȃ��ꍇ�A�t�̉\��������̂łЂ�����Ԃ��čēx�m�F
        copyCarStates2 = JSON.parse(JSON.stringify(carStates)).reverse();
        console.log("reverseCarState:", copyCarStates2);

        var formationList = formationComparison(copyCarStates2);
    }

    console.log("iconList:", iconList);

    return iconList;
}

function iconListConcat(iconList1, iconList2) {
    // �z�񂪋�łȂ��ꍇ�̂�"h"��t��
    if (iconList1.length > 0) {
        iconList1 = iconList1.slice(); // �j��I�ύX�������
        iconList1[iconList1.length - 1] = addHtoFileName(iconList1[iconList1.length - 1]);
        if (iconList2.length > 0) {
            iconList2 = iconList2.slice();
            iconList2[0] = addHtoFileName(iconList2[0]);
        }
    }
    return iconList1.concat(iconList2);
}

// �t�@�C�����̊g���q���O��"h"��}��
function addHtoFileName(filename) {
    return filename.replace(/(\.[^.]+)$/, "h$1");
}


var MasterComparison = {
    "3000": [{ "CarModel": "3000", "HasConductorCab": true, "HasDriverCab": true, "HasMotor": true, "HasPantograph": true }, { "CarModel": "3000", "HasConductorCab": false, "HasDriverCab": false, "HasMotor": false, "HasPantograph": false }, { "CarModel": "3000", "HasConductorCab": false, "HasDriverCab": false, "HasMotor": false, "HasPantograph": true }, { "CarModel": "3000", "HasConductorCab": false, "HasDriverCab": false, "HasMotor": true, "HasPantograph": false }, { "CarModel": "3000", "HasConductorCab": false, "HasDriverCab": false, "HasMotor": false, "HasPantograph": false }, { "CarModel": "3000", "HasConductorCab": true, "HasDriverCab": true, "HasMotor": true, "HasPantograph": true }],
    "3020": [{ "CarModel": "3020", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "3020", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "3020", "HasPantograph": true, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": true }, { "CarModel": "3020", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "3020", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "3020", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }],
    "3300V": [{ "CarModel": "3300V", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true, }, { "CarModel": "3300V", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false, }, { "CarModel": "3300V", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true, }],
    "4000": [{ "CarModel": "4000", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "4000", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "4000", "HasPantograph": true, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": true }, { "CarModel": "4000", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "4000", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "4000", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true, }],
    "4000R": [{ "CarModel": "4000R", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "4000R", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "4000R", "HasPantograph": true, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": true }, { "CarModel": "4000R", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "4000R", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "4000R", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }],
    "4300": [{ "CarModel": "4300", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "4300", "HasPantograph": true, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "4300", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "4300", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }],
    "4500": [{ "CarModel": "4300", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "4300", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": false }],
    "4321": [{ "CarModel": "4321", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "4321", "HasPantograph": true, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "4321", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "4321", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }],
    "4600": [{ "CarModel": "4600", "HasConductorCab": true, "HasDriverCab": true, "HasMotor": true, "HasPantograph": true }, { "CarModel": "4600", "HasConductorCab": false, "HasDriverCab": false, "HasMotor": false, "HasPantograph": true }, { "CarModel": "4600", "HasConductorCab": false, "HasDriverCab": false, "HasMotor": false, "HasPantograph": false }, { "CarModel": "4600", "HasConductorCab": true, "HasDriverCab": true, "HasMotor": true, "HasPantograph": false }],
    "4800": [{ "CarModel": "4600", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "4600", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": false }],
    "5300": [{ "CarModel": "5300", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "5300", "HasPantograph": true, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "5300", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "5300", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }],
    "5500": [{ "CarModel": "5300", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "5300", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": false }],
    "5600": [{ "CarModel": "5600", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "5600", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }],
    "5320": [{ "CarModel": "5320", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "5320", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "5320", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "5320", "HasPantograph": true, "HasDriverCab": true, "HasConductorCab": true, "HasMotor": true }],
    "50000": [{ "CarModel": "50000", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": false, "HasMotor": false }, { "CarModel": "50000", "HasPantograph": true, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": true }, { "CarModel": "50000", "HasPantograph": true, "HasDriverCab": false, "HasConductorCab": true, "HasMotor": true }, { "CarModel": "50000", "HasPantograph": false, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": true }, { "CarModel": "50000", "HasPantograph": true, "HasDriverCab": false, "HasConductorCab": false, "HasMotor": true }, { "CarModel": "50000", "HasPantograph": false, "HasDriverCab": true, "HasConductorCab": false, "HasMotor": false }],
}

// �Ґ���r�̕]���֐��icomparison��E�I�t�Z�b�g�i�s�Ή��j
function formationComparison(comparison) {
    const result = [];
    let offset = 0;
    while (offset < comparison.length) {
        let matched = false;
        for (const key in MasterComparison) {
            const masterArray = MasterComparison[key];
            if (masterArray.length > comparison.length - offset) continue;

            let allMatch = true;
            for (let i = 0; i < masterArray.length; i++) {
                const m = masterArray[i];
                const c = comparison[offset + i];
                if (
                    m.CarModel !== c.CarModel ||
                    m.HasConductorCab !== c.HasConductorCab ||
                    m.HasDriverCab !== c.HasDriverCab ||
                    m.HasMotor !== c.HasMotor ||
                    m.HasPantograph !== c.HasPantograph
                ) {
                    allMatch = false;
                    break;
                }
            }
            if (allMatch) {
                result.push(key);
                offset += masterArray.length;
                matched = true;
                break; // 1���������玟�̈ʒu��
            }
        }
        if (!matched) {
            // �ǂ̕Ґ��ɂ���v���Ȃ��ꍇ��1���i�߂�
            offset += 1;
        }
    }
    return result;
}