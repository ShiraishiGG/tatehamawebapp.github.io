// JavaScript source code





//取得したデータから置くアイコン、nameから上下を判別し、上下別にカウントする//
function checkLastEvenOdd(dianameList, TrainInfos) {
    // 上下別にカウント
    let upCount = 0;
    let downCount = 0;
    // 各列車の上下情報を記録
    const directionMap = {};

    dianameList.forEach(dianame => {
        const train = TrainInfos[dianame];
        if (!train) return;
        const direction = getDirectionByName(train.Name);
        directionMap[dianame] = direction;
        if (direction === "up") {
            upCount++;
        } else if (direction === "down") {
            downCount++;
        }
    });

    return { upCount, downCount, directionMap };
}

function getTrainTypeByClass(trainClass) {
    switch (String(trainClass)) {
        case "0":
            kind = "回送";
            break;
        case "1":
            kind = "普通";
            break;
        case "2":
            kind = "区間準急";
            break;
        case "3":
            kind = "準急";
            break;
        case "4":
            kind = "急行";
            break;
        case "5":
            kind = "快速急行";
            break;
        case "6":
            kind = "臨時普通";
            break;
        case "7":
            kind = "臨時準急";
            break;
        case "8":
            kind = "臨時急行";
            break;
        case "9":
            kind = "臨時快速急行";
            break;
        case "10":
        case "11":
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
            kind = "特急";
            break;
        case "17":
            kind = "臨時";
            break;
        case "18":
            kind = "試運転";
            break;
        case "19":
            kind = "臨時";
            break;

        default:
            kind = "判別不能";
            break;
    }
    return kind;

    }

function getDirectionByName(name) {
    // 末尾の数字を抽出
    const match = name.match(/(\d+)(?!.*\d)/);
    if (match) {
        const lastDigit = parseInt(match[1].slice(-1), 10);
        if (!isNaN(lastDigit)) {
            return (lastDigit % 2 === 0) ? "up" : "down";
        }
    }
    // 数字がなければ不明
    return "unknown";
}

function placeAllTrainIconsByLocation() {
    if (!Location_data || !Location_data.TrainInfos) return;

    const locationDianame = location_to_place(); // 駅名や駅間名ごとのダイヤ名配列

    Object.keys(locationDianame).forEach(placeName => {
        const dianameList = locationDianame[placeName];
        if (!Array.isArray(dianameList) || dianameList.length === 0) return;

        // 上下別にカウント
        const { upCount, downCount, directionMap } = checkLastEvenOdd(dianameList, Location_data.TrainInfos);

        // 上下別の現在のインデックス
        let upIndex = 0;
        let downIndex = 0;

        dianameList.forEach(dianame => {
            const trainInfo = Location_data.TrainInfos[dianame];
            if (!trainInfo) return;

            const type = trainInfo.TrainClass;
            const updown = directionMap[dianame];

            // 駅間かどうか判定
            let sta1 = placeName;
            let sta2 = null;
            if (placeName.includes('-')) {
                [sta1, sta2] = placeName.split('-');
            }

            // 上下別にposition, countを設定
            let position = 1;
            let count = 1;
            if (updown === "up") {
                upIndex++;
                position = upIndex;
                count = upCount;
            } else if (updown === "down") {
                downIndex++;
                position = downIndex;
                count = downCount;
            }

            TrainPlace(sta1, sta2, updown, count, position, type, dianame);
        });
    });
}