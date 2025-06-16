// JavaScript source code
async function Getdata() {
    const requestURL =
        "https://traincrew-multiats-server-passenger-dev.kesigomon.com/api/train"

    const reqest = new Request(requestURL);

    const responce = await fetch(reqest);
    const datastring = await responce.text(); // レスポンスをテキストとして取得

	Location_data = JSON.parse(datastring);
    console.log(Location_data);

}

function GetManyTest(seed) {
    random = new Random(seed);
	TrackData = TrackData.filter(item => item.on === true);

	console.log(FormationData);

	TrackDataNokori = [...FormationData];

	// 先頭や末尾の空白行を除去
	const rows = RetsubanData.trim().split('\n');
	// 各行をタブで分割
	const retsubanArray = rows.map(row => row.split('\t'));

	const trainInfos = {};
	retsubanArray.forEach(row => {
		random.next();
		random.next();
		if (row.length < 4) return; // データ不備行はスキップ
		trainInfos[row[0]] = {
			name: row[0],
			carStates: null,
			trainClass: row[1],
			fromStation: row[2],
			destinationStation: row[3],
			Delay: Math.max(random.nextInt(-15, 15),0) // ランダムな遅延時間を設定
		};
	});

	// TrackDataのlastに基づいてtrainInfosをフィルタリング
	TrackData.forEach(track => {
		if (track.last && trainInfos[track.last]) {
			// trainInfosに存在する場合、carStatesを設定
			trainInfos[track.last].carStates = GetFormationData(random);
		}
	});

	// trainInfosからcarStatesがnullのものを削除
	Object.keys(trainInfos).forEach(key => {
		if (!trainInfos[key].carStates) {
			delete trainInfos[key];
		}
    });
	

    Location_data = {
        "trackCircuitData": TrackData,
		"trainInfos": trainInfos
	}

	// 上り下りの判定
	if (Location_data && Location_data.trainInfos) {
		Object.values(Location_data.trainInfos).forEach(train => {
			// nameの末尾の数字を抽出
			const match = train.name && train.name.match(/(\d+)[^\d]*$/);
			if (match) {
				const num = parseInt(match[1], 10);
				if (num % 2 === 0 && Array.isArray(train.carStates)) {
					train.carStates.reverse();
				}
			}
		});
	}

	console.log(Location_data);

	placeAllTrainIconsByLocation();
}

function GetFormationData(random) {
	var formationData = [];
	max = 6;


	while (formationData.length <= max) {
		let randomFormation;
		if (TrackDataNokori.length === 0) {
			let randomIndex = random.nextInt(0, FormationData.length - 1);
			randomFormation = FormationData[randomIndex];
		}
		else {
			let randomIndex = random.nextInt(0, TrackDataNokori.length - 1);
			randomFormation = TrackDataNokori[randomIndex];
		}
		if (randomFormation.length + formationData.length <= max) {
			formationData = formationData.concat(randomFormation);
		}
		else {
			return formationData;
		}
	}
	return formationData;

}

function Gettest() {

    Location_data = JSON.parse(`

{
   "trackCircuitData": [
      {
         "name": "TH76_5LAT",
         "last": "1206A",
         "on": true,
         "Lock": false
      },
      {
         "name": "上り108T",
         "last": "臨5236A",
         "on": true,
         "Lock": false
      },
      {
         "name": "下り71T",
         "last": "1113A",
         "on": true,
         "Lock": false
      },
      {
         "name": "下り75T",
         "last": "1283C",
         "on": true,
         "Lock": false
      },
      {
         "name": "下り89T",
         "last": "回9143",
         "on": true,
         "Lock": false
      }
   ],
   "trainInfos": {
      "1113A": {
         "name": "1113A",
         "carStates": [
            {
               "carModel": "3000",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "3000",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
                        {
               "carModel": "3000",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "3000",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "3000",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
                        {
               "carModel": "3000",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            }
         ],
         "trainClass": 13,
         "fromStation": "TH01",
         "destinationStation": "TH76",
         "Delay": 10
      },
      "回9143": {
         "name": "回9143",
         "carStates": [
            {
               "carModel": "3300",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "3300",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "3300",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "3300",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "3300",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "3300",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            }
         ],
         "trainClass": 0,
         "fromStation": "TH76",
         "destinationStation": "TH65",
         "Delay": 7
      },
      "1206A": {
         "name": "1206A",
         "carStates": [
            {
               "carModel": "50000",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "50000",
               "HasPantograph": true,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "50000",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "50000",
               "HasPantograph": true,
               "HasDriverCab": false,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "50000",
               "HasPantograph": true,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "50000",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            }
         ],
         "trainClass": 14,
         "fromStation": "TH76",
         "destinationStation": "TH01",
         "Delay": 3
      },
      "1283C": {
         "name": "1283C",
         "carStates": [
            {
               "carModel": "4300",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "4300",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "5320",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "5320",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "5320",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "5320",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            }
         ],
         "trainClass": 3,
         "fromStation": "TH65",
         "destinationStation": "TH76",
         "Delay": 3
      },
      "臨5236A": {
         "name": "臨5236A",
         "carStates": [
            {
               "carModel": "5600",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "5600",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "5600",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "5600",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "5600",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "carModel": "5600",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            }
         ],
         "trainClass": "17",
         "fromStation": "TH76",
         "destinationStation": "TH14",
         "Delay": 0
      }
   }
}
    `)
    ;
}

FormationData = [
	[
		{
			"carModel": "4300",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4300",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "4000R",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4000R",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4000R",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4000R",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4000R",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4000R",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "4000",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4000",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4000",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "3300V",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "3300V",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "3300V",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "3020",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"carModel": "3020",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"carModel": "3020",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"carModel": "3020",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"carModel": "3020",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"carModel": "3020",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "3000",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"carModel": "3000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"carModel": "3000",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"carModel": "3000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"carModel": "3000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"carModel": "3000",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "50000",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 439.1578,
			"Ampare": 0
		},
		{
			"carModel": "50000",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 439.9999,
			"Ampare": 0
		},
		{
			"carModel": "50000",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 439.9999,
			"Ampare": 0
		},
		{
			"carModel": "50000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 439.9999,
			"Ampare": 0
		},
		{
			"carModel": "50000",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 439.9999,
			"Ampare": 0
		},
		{
			"carModel": "50000",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 439.1578,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "5600",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "5600",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "5320",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "5320",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "5320",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "5320",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "5300",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "5300",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "5300",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "5300",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "5300",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "5300",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "4600",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4600",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4600",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4600",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "4600",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4600",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "4321",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4321",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4321",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4321",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	],
	[
		{
			"carModel": "4300",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4300",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4300",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"carModel": "4300",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		}
	]
]

RetsubanData = `
列番	種別id	始発駅id	行先駅id	ダイヤid
907A	12	TH01	TH76	1
1049	1	TH45	TH66S	1
1065	1	TH67	TH76	1
1051	1	TH61	TH66S	1
1019A	11	TH01	TH76	1
1041	1	TH48 	TH66S	1
1099C	3	TH65	TH76	1
回1005A	20	TH75	TH76	1
1053X	1	TH45	TH54	1
1075	1	TH67	TH76	1
1183C	3	TH65	TH76	1
1021A	12	TH01	TH76	1
1167	1	TH67	TH76	1
1185C	3	TH65	TH76	1
1143	1	TH45	TH66S	1
1161	1	TH67	TH76	1
1151	1	TH61	TH66S	1
1113A	11	TH01	TH76	1
1199C	3	TH65	TH76	1
1145	1	TH48 	TH66S	1
回1107A	20	TH75	TH76	1
1153	1	TH45	TH54	1
1165	1	TH67	TH76	1
1283C	3	TH65	TH76	1
1103A	12	TH01	TH76	1
1275	1	TH67	TH76	1
1285C	3	TH65	TH76	1
1249	1	TH45	TH66S	1
1251	1	TH61	TH66S	1
1267	1	TH67	TH76	1
1215A	11	TH01	TH76	1
1299C	3	TH65	TH76	1
1241	1	TH48 	TH66S	1
回1221A	20	TH75	TH76	1
1253	1	TH45	TH54	1
1261	1	TH67	TH76	1
1383C	3	TH65	TH76	1
1209A	12	TH01	TH76	1
回9043	20	TH66S	TH76	1
9041	6	TH58	TH65	1
回9049	20	TH66S	TH75	1
回9141	20	TH65	TH76	1
9143	6	TH58	TH65	1
回9143	20	TH65	TH76	1
回9145	20	TH61	TH75	1
試9141	18	TH61	TH75	1
9241	6	TH58	TH65	1
回9241	20	TH65	TH76	1
1082C	3	TH76	TH65	1
1010A	11	TH76	TH01	1
1066	1	TH76	TH67	1
1052	1	TH54	TH45	1
1084C	3	TH76	TH65	1
1044	1	TH66S	TH48	1
1060	1	TH76	TH67	1
1050X	1	TH66S	TH61	1
1104A	12	TH76	TH01	1
1198C	3	TH76	TH65	1
回1106A	20	TH76	TH75	1
1152	1	TH54	TH45	1
1164	1	TH76	TH67	1
1148	1	TH66S	TH45	1
1182C	3	TH76	TH65	1
1118A	11	TH76	TH01	1
1174	1	TH76	TH67	1
1140	1	TH66S	TH48	1
1184C	3	TH76	TH65	1
1166	1	TH76	TH67	1
1150	1	TH66S	TH61	1
1206A	12	TH76	TH01	1
1298C	3	TH76	TH65	1
回1220A	20	TH76	TH75	1
1252	1	TH54	TH45	1
1260	1	TH76	TH67	1
1242	1	TH54	TH45	1
1282C	3	TH76	TH65	1
1212A	11	TH76	TH01	1
1264	1	TH76	TH67	1
1244	1	TH66S	TH48	1
1284C	3	TH76	TH65	1
1274	1	TH76	TH67	1
1250	1	TH66S	TH61	1
1320A	12	TH76	TH01	1
回1302A	20	TH76	TH75	1
1398C	3	TH76	TH65	1
9042B	8	TH76	TH58	1
9140B	8	TH76	TH58	1
回9240	20	TH75	TH66S	1
回9244	20	TH75	TH66S	1
9242B	8	TH76	TH58	1
試9091	18	TH66S	TH75	1
試9190	18	TH75	TH61	1
試9191	18	TH61	TH75	1
試9290	18	TH75	TH66S	1
試9095	18	TH66S	TH76	1
試9194	18	TH76	TH61	1
試9195	18	TH61	TH75	1
試9294	18	TH75	TH66S	1
`

TrackData = [
	{
		"on": false,
		"last": "",
		"name": "TH50_31イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH50_34ロT"
	},
	{
		"on": false,
		"last": "1143",
		"name": "TH64_21T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH64_12LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH64_12RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH64_14RT"
	},
	{
		"on": false,
		"last": "1143",
		"name": "TH64_22T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り398T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り404T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り406T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_1RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH50_33イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH50_12RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_TST"
	},
	{
		"on": false,
		"last": "",
		"name": "下り405T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り403T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り397T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH50_14LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_22イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_4LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_8LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_9LET"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_25ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_21T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_1RBT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_24T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_22ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_23T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_1RDT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_1RCT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_9LAT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_26T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_27ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "上り416T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り420T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り424T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_27イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_SST"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_12LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_25イT"
	},
	{
		"on": false,
		"last": "",
		"name": "下り425T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り419T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH48_9LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_TST"
	},
	{
		"on": false,
		"last": "",
		"name": "TH50_23LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH50_31ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH50_24LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH51_22ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "MFT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH50_TST"
	},
	{
		"on": false,
		"last": "",
		"name": "TH50_33T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH54_22イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH54_21イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH54_12RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH54_22ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH53_21T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH53_13LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH53_15LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH53_15RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH53_22T"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH62_21T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH62_13LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH62_15LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH62_15RT"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH62_22T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH51_15LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_22ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH61_22T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH61_2RAT"
	},
	{
		"on": false,
		"last": "",
		"name": "JR3RT"
	},
	{
		"on": false,
		"last": "",
		"name": "JR上り5T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR上り4T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR上り3T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR上り2T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR上り1T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR1LT"
	},
	{
		"on": false,
		"last": "",
		"name": "JR下り1T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR下り2T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR下り3T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR下り4T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR下り5T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR上り浜園手前T"
	},
	{
		"on": false,
		"last": "",
		"name": "JR3LT"
	},
	{
		"on": false,
		"last": "",
		"name": "JR1RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_24T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_DT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_ET"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_23イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_9LCT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_25T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_22イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_2RBT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_23ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_21T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_2RAT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_9LT"
	},
	{
		"on": false,
		"last": "",
		"name": "AS1T"
	},
	{
		"on": false,
		"last": "",
		"name": "AS2T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH57_21T"
	},
	{
		"on": true,
		"last": "1140",
		"name": "TH59_21ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "NA1T"
	},
	{
		"on": false,
		"last": "",
		"name": "NA2T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH58_2RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH51_22イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH51_21ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH51_21イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH51_12RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH52_22イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH54_21ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH55S_21イT"
	},
	{
		"on": true,
		"last": "",
		"name": "TH59_21イT"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH61_21ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH63_22イT"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH63_21ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH53_12LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH53_12RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH53_14RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH52_21T"
	},
	{
		"on": false,
		"last": "",
		"name": "SNT"
	},
	{
		"on": false,
		"last": "",
		"name": "KST"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH62_12LT"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH62_12RT"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH62_14RT"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH61_2RT"
	},
	{
		"on": true,
		"last": "試9191",
		"name": "TH2T"
	},
	{
		"on": true,
		"last": "試9191",
		"name": "TH1T"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "MT2T"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "MT1T"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH63_22ロT"
	},
	{
		"on": false,
		"last": "1143",
		"name": "TH64_13LT"
	},
	{
		"on": false,
		"last": "1143",
		"name": "TH64_15LT"
	},
	{
		"on": false,
		"last": "1143",
		"name": "TH64_15RT"
	},
	{
		"on": true,
		"last": "1113A",
		"name": "FMT"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH63_21イT"
	},
	{
		"on": false,
		"last": "1143",
		"name": "TH65_50イT"
	},
	{
		"on": false,
		"last": "1143",
		"name": "TH65_XT"
	},
	{
		"on": false,
		"last": "1143",
		"name": "DF1T"
	},
	{
		"on": false,
		"last": "1143",
		"name": "DF2T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_OST"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_10LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_45T"
	},
	{
		"on": false,
		"last": "1184C",
		"name": "TH66S_1RCT"
	},
	{
		"on": false,
		"last": "1184C",
		"name": "上り156T"
	},
	{
		"on": false,
		"last": "1184C",
		"name": "TH65_1RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH66S_5LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH65_TST"
	},
	{
		"on": true,
		"last": "1184C",
		"name": "TH65_41T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH65_42ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH65_42イT"
	},
	{
		"on": true,
		"last": "1283C",
		"name": "TH65_12LT"
	},
	{
		"on": false,
		"last": "1283C",
		"name": "TH65_44T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH65_11LT"
	},
	{
		"on": true,
		"last": "1143",
		"name": "TH65_45T"
	},
	{
		"on": true,
		"last": "1184C",
		"name": "TH65_3RT"
	},
	{
		"on": true,
		"last": "1143",
		"name": "TH65_47T"
	},
	{
		"on": false,
		"last": "1283C",
		"name": "TH65_48T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH65_6T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH65_5T"
	},
	{
		"on": false,
		"last": "1283C",
		"name": "TH65_50ロT"
	},
	{
		"on": false,
		"last": "1283C",
		"name": "TH65_YT"
	},
	{
		"on": false,
		"last": "1283C",
		"name": "TH65_ET"
	},
	{
		"on": false,
		"last": "",
		"name": "TH65_2RT"
	},
	{
		"on": false,
		"last": "1143",
		"name": "TH65_49T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH61_2RBT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH61_5RT"
	},
	{
		"on": false,
		"last": "",
		"name": "上り238T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り242T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り246T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り250T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH59_11RT"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH61_21イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_31T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_TST"
	},
	{
		"on": false,
		"last": "",
		"name": "下り123T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り117T"
	},
	{
		"on": true,
		"last": "1165",
		"name": "下り111T"
	},
	{
		"on": true,
		"last": "1165",
		"name": "下り105T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り103T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH70_21イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH70_5LT"
	},
	{
		"on": false,
		"last": "",
		"name": "上り102T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り108T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り114T"
	},
	{
		"on": true,
		"last": "9140B",
		"name": "上り120T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り124T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_1RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_32T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH70_21ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH70_SST"
	},
	{
		"on": false,
		"last": "",
		"name": "下り89T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_24T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_6LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH70_2LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH70_5LBT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_22T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_6LDT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_21T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_1RAT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_23T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_1RBT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_6LCT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_TST"
	},
	{
		"on": false,
		"last": "",
		"name": "下り75T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り71T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り67T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り59T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り55T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り49T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り45T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り41T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り35T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り27T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_50ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_9LT"
	},
	{
		"on": false,
		"last": "",
		"name": "上り26T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り30T"
	},
	{
		"on": true,
		"last": "1166",
		"name": "上り36T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り42T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り48T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り56T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り62T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り68T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り74T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_50イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_SST"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_1RT"
	},
	{
		"on": false,
		"last": "",
		"name": "上り86T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り92T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH71_SST"
	},
	{
		"on": false,
		"last": "",
		"name": "TH70_1RAT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH54_15LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH52_12RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH52_15LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH52_22ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "NMT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_44T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH76_21イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH76_23T"
	},
	{
		"on": true,
		"last": "1260",
		"name": "TH76_5LDT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH76_21ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH76_5LCT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH55S_21ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH57_12RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH57_13RT"
	},
	{
		"on": false,
		"last": "",
		"name": "上り306T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り312T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り314T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り320T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り324T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH66S_53T"
	},
	{
		"on": false,
		"last": "1184C",
		"name": "TH66S_52T"
	},
	{
		"on": false,
		"last": "1184C",
		"name": "TH66S_55T"
	},
	{
		"on": true,
		"last": "1150",
		"name": "TH66S_54T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り151T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り145T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り143T"
	},
	{
		"on": true,
		"last": "回9143",
		"name": "下り137T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_10LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_35イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH66S_5LET"
	},
	{
		"on": false,
		"last": "",
		"name": "上り136T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り142T"
	},
	{
		"on": false,
		"last": "1184C",
		"name": "上り146T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_36イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_SST"
	},
	{
		"on": false,
		"last": "1184C",
		"name": "TH66S_1RT"
	},
	{
		"on": false,
		"last": "1184C",
		"name": "TH66S_51ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH66S_56T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH66S_1RAT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH66S_57T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH66S_1RBT"
	},
	{
		"on": false,
		"last": "1150",
		"name": "TH66S_5LDT"
	},
	{
		"on": false,
		"last": "1150",
		"name": "TH66S_51イT"
	},
	{
		"on": true,
		"last": "1150",
		"name": "TH66S_13T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_23ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_9LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_22イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH76_27T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り7T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り9T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_TST"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_41イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH76_26ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "上り6T"
	},
	{
		"on": false,
		"last": "",
		"name": "上り8T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_1RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_41ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_37T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_34T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_10LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_32ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_35T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_11LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_33T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_21ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_24T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_2RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_1RAT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_21イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_1RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_23イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_3RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_22ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_OST"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_1RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH45_SST"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_36T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_2RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_1RAT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_31T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_3RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH46_32イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH55S_11LT"
	},
	{
		"on": false,
		"last": "",
		"name": "下り323T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り317T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り313T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り311T"
	},
	{
		"on": false,
		"last": "",
		"name": "下り305T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH57_14LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH50_34イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH55S_11RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TK1T"
	},
	{
		"on": false,
		"last": "",
		"name": "TK2T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH59_13LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH59_12LT"
	},
	{
		"on": false,
		"last": "",
		"name": "下り249T"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "下り245T"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "下り241T"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "下り237T"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH61_6LT"
	},
	{
		"on": false,
		"last": "1113A",
		"name": "TH63_15LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH63_12RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH76_24T"
	},
	{
		"on": true,
		"last": "1021A",
		"name": "TH76_5LBT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH76_25T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH76_22T"
	},
	{
		"on": true,
		"last": "1206A",
		"name": "TH76_5LAT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH76_26イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_36ロT"
	},
	{
		"on": true,
		"last": "1275",
		"name": "TH67_23RT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_5LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_34T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_4LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_1RAT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_33イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_1RBT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_33ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH67_35ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_42イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_34LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_4T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_48T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_8T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_42ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_7T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_49イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_46ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_5RAT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_49ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_6LT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_9LCT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_46イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_5RBT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_9T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_43ロT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_43イT"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_1RET"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_6T"
	},
	{
		"on": false,
		"last": "",
		"name": "TH75_5T"
	}
]
