// --- 駅名・走行位置の読み替え関数（重複しないように1つだけ） ---
function getStationNameById(id) {
    if (!window.staname) return id;
    const found = staname.find(([stationId]) => stationId === id);
    return found ? found[1] : id;
}
function getTrackDisplayName(trackName) {
    if (!window.ss) return trackName;
    const found = ss.find(([name]) => name === trackName);
    if (found) {
        const [, sta1, sta2] = found;
        if (sta1 && sta2) {
            return getStationNameById(sta1) + "〜" + getStationNameById(sta2);
        } else if (sta1) {
            return getStationNameById(sta1);
        }
    }
    return trackName;
}

// --- モーダル表示本体 ---
function showTrainDetail(trainId) {
    const modal = document.getElementById('train-detail-modal');
    const body = document.getElementById('train-detail-body');

    if (!window.Location_data || !Location_data.TrainInfos) {
        body.innerHTML = `<h2>列車詳細</h2><p>データがありません。</p>`;
        modal.style.display = 'flex';
        return;
    }

    const train = Location_data.TrainInfos[trainId];
    let trackName = '';
    let trackDisplay = '';
    if (Location_data.TrackCircuitData && train) {
        const track = Location_data.TrackCircuitData.find(tc => tc.Last === trainId);
        if (track) {
            trackName = track.Name;
            trackDisplay = getTrackDisplayName(trackName);
        }
    }

    // 種別名
    let kind = '';
    let kindClass = '';
    if (typeof getTrainTypeByClass === 'function' && train) {
        kind = getTrainTypeByClass(train.TrainClass);
        kindClass = 'train-kind-' + kind;
    } else if (train) {
        kind = train.TrainClass ?? '';
        kindClass = '';
    }

    // 行先駅名
    let destName = train && train.DestinationStation ? getStationNameById(train.DestinationStation) : (train && train.Destinaton ? getStationNameById(train.Destinaton) : '');

    // 始発駅名
    let fromName = train && train.DestinationStation ? getStationNameById(train.FromStation) : (train && train.FromStation ? getStationNameById(train.FromStation) : '');

    // 編成両数
    const carCount = Array.isArray(train?.CarStates) ? train.CarStates.length : 0;

    // --- 車両画像のHTMLを生成 ---
    // car-icons.jsのgetCarImageFileNamesを利用
    let carImagesHtml = '';
    if (Array.isArray(train?.CarStates)) {
        // 画像ファイル名のリストを取得

        var isUp = false
        // Nameの末尾の数字を抽出
        const match = train.Name && train.Name.match(/(\d+)[^\d]*$/);
        if (match) {
            const num = parseInt(match[1], 10);
            isUp = num % 2 === 0
        }

        const imgList = getCarImageFileNames(train.CarStates, isUp);
        carImagesHtml = `<div class="train-car-image-row">` +
            imgList.map((imgSrc, idx) => {
                const alt = train.CarStates[idx]?.CarModel ?? "";
                return `<img src="${imgSrc}" alt="${alt}" class="car-image" onerror="this.onerror=null;this.src='caricons/TC_9999.png';">`;
            }).join('') +
            `</div>`;
    }



    if (train) {

        // 進行方向の判定
        let directionHtml = '';
        const name = train.Name || trainId;
        const match = name.match(/(\d+)[^\d]*$/); // 末尾の数字を抽出
        if (match) {
            const num = parseInt(match[1], 10);
            if (num % 2 === 0) {
                directionHtml = `<div class="train-direction-u">進行方向▶</div>`;
            } else {
                directionHtml = `<div class="train-direction-d">◀進行方向</div>`;
            }
        }

        // 運行番号の抽出
        let operationNumber = '';
        if (match) {
            const numStr = match[1];
            let opNum = '';
            if (numStr.length >= 2) {
                opNum = numStr.slice(-2); // 10の位と1の位
            } else if (numStr.length === 1) {
                opNum = numStr;
            }
            let opNumInt = parseInt(opNum, 10);

            // 元の列番（数字部分）を取得
            const baseNum = parseInt(numStr, 10);
            // 奇数なら-1
            if (opNumInt % 2 === 1) {
                opNumInt = opNumInt - 1;
            }
            if (baseNum > 9000) {
                opNumInt += 300;
            } else if (baseNum > 6000) {
                opNumInt += 200;
            } else if (baseNum > 3000) {
                opNumInt += 100;
            }
            // 2桁以上の場合はゼロ埋め
            operationNumber = opNumInt.toString().padStart(opNum.length, '0');

        }

        // ラベル行を追加
        const carLabelHtml = `
      <div class="route-direction">
        <span class="route-direction-d">館浜側</span>
        <span class="route-direction-u">大手橋側</span>
      </div>

    `;

        body.innerHTML = `
      <h2>列車詳細</h2>
            ${carLabelHtml}
            ${carImagesHtml}
            ${directionHtml}
      <table>
        <tr><th>列車番号</th><td>${train.Name || trainId}</td></tr>
        <tr><th>運行番号</th><td>${operationNumber}運行</td></tr>
        <tr><th>遅延</th><td>${train.Delay ?? ''} 分</td></tr>
        <tr><th>種別</th><td><span class="${kindClass}">${kind}</span></td></tr>
        <tr><th>始発</th><td>${fromName}</td></tr>
        <tr><th>行先</th><td>${destName}</td></tr>
        <tr><th>両数</th><td>${carCount} 両</td></tr>
        <tr><th>位置</th><td>${trackDisplay || trackName}</td></tr>

      </table>

    `;
    } else {
        body.innerHTML = `<h2>列車詳細</h2><p>列番: ${trainId}</p><p>詳細データがありません。</p>`;
    }
    modal.style.display = 'flex';

}


// --- モーダルを閉じる ---
function closeTrainDetail() {
    document.getElementById('train-detail-modal').style.display = 'none';
}

// --- イベントリスナーを追加 ---
document.addEventListener('DOMContentLoaded', function () {
    // 列車アイコンにイベントを付与
    document.body.addEventListener('click', function (e) {
        const icon = e.target.closest('.train-icon');
        if (icon) {
            const trainId = icon.dataset.trainId || '不明';
            showTrainDetail(trainId);
        }
    });
    // 閉じるボタン
    const closeBtn = document.getElementById('train-detail-close');
    if (closeBtn) {
        closeBtn.onclick = closeTrainDetail;
    }
    // モーダル外クリックで閉じる
    const modal = document.getElementById('train-detail-modal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeTrainDetail();
        });
    }
});