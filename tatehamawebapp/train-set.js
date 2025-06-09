// JavaScript source code





//取得したデータから置くアイコン、nameから上下を判別する//
function checkLastEvenOdd() {
    if (!Location_data || !Location_data.TrackCircuits) return;

    Location_data.TrackCircuits.forEach(tc => {
        // Lastから末尾の数字を抽出
        const match = tc.Last.match(/(\d+)(?!.*\d)/);
        if (match) {
            const lastDigit = parseInt(match[1].slice(-1), 10);
            if (!isNaN(lastDigit)) {
                if (lastDigit % 2 === 0) {
                    // 偶数の場合の処理
                    console.log(`${tc.Last} は上りです`);
                } else {
                    // 奇数の場合の処理
                    console.log(`${tc.Last} は下りです`);
                }
            }
        }
    });
}



function checkTrainClassKind() {
    if (!Location_data || !Location_data.TrainInfos) return;

    Object.values(Location_data.TrainInfos).forEach(train => {
        let kind = "";
        switch (String(train.TrainClass)) {
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
                kind = "D特";
                break;
            case "11":
                kind = "C特1";
                break;
            case "12":
                kind = "C特2";
                break;
            case "13":
                kind = "C特3";
                break;
            case "14":
                kind = "C特4";
                break;
            case "15":
                kind = "B特";
                break;
            case "16":
                kind = "A特";
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
        console.log(`${train.Name} は${kind}です`);
    });
}



//判別したデータをlocation_placeを元に配置する//