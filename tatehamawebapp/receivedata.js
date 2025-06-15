// JavaScript source code
async function Getdata() {
    const requestURL =
        "https://traincrew-multiats-server-passenger-dev.kesigomon.com/api/train"

    const reqest = new Request(requestURL);

    const responce = await fetch(reqest);
    const datastring = await responce.text(); // レスポンスをテキストとして取得

    Location_data = JSON.parse(datastring);

}

function GetManyTest(seed) {
    random = new Random(seed);
	TrackData = TrackData.filter(item => item.On === true);

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
			Name: row[0],
			CarStates: null,
			TrainClass: row[1],
			FromStation: row[2],
			Destinaton: row[3],
			Delay: Math.max(random.nextInt(-15, 15),0) // ランダムな遅延時間を設定
		};
	});

	// TrackDataのLastに基づいてTrainInfosをフィルタリング
	TrackData.forEach(track => {
		if (track.Last && trainInfos[track.Last]) {
			// TrainInfosに存在する場合、CarStatesを設定
			trainInfos[track.Last].CarStates = GetFormationData(random);
		}
	});

	// trainInfosからCarStatesがnullのものを削除
	Object.keys(trainInfos).forEach(key => {
		if (!trainInfos[key].CarStates) {
			delete trainInfos[key];
		}
    });
	

    Location_data = {
        "TrackCircuits": TrackData,
		"TrainInfos": trainInfos
	}

	// 上り下りの判定
	if (Location_data && Location_data.TrainInfos) {
		Object.values(Location_data.TrainInfos).forEach(train => {
			// Nameの末尾の数字を抽出
			const match = train.Name && train.Name.match(/(\d+)[^\d]*$/);
			if (match) {
				const num = parseInt(match[1], 10);
				if (num % 2 === 0 && Array.isArray(train.CarStates)) {
					train.CarStates.reverse();
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
   "TrackCircuits": [
      {
         "Name": "TH76_5LAT",
         "Last": "1206A",
         "On": true,
         "Lock": false
      },
      {
         "Name": "上り108T",
         "Last": "臨5236A",
         "On": true,
         "Lock": false
      },
      {
         "Name": "下り71T",
         "Last": "1113A",
         "On": true,
         "Lock": false
      },
      {
         "Name": "下り75T",
         "Last": "1283C",
         "On": true,
         "Lock": false
      },
      {
         "Name": "下り89T",
         "Last": "回9143",
         "On": true,
         "Lock": false
      }
   ],
   "TrainInfos": {
      "1113A": {
         "Name": "1113A",
         "CarStates": [
            {
               "CarModel": "3000",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "3000",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
                        {
               "CarModel": "3000",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "3000",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "3000",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
                        {
               "CarModel": "3000",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            }
         ],
         "TrainClass": 13,
         "FromStation": "TH01",
         "Destinaton": "TH76",
         "Delay": 10
      },
      "回9143": {
         "Name": "回9143",
         "CarStates": [
            {
               "CarModel": "3300",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "3300",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "3300",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "3300",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "3300",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "3300",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            }
         ],
         "TrainClass": 0,
         "FromStation": "TH76",
         "Destinaton": "TH65",
         "Delay": 7
      },
      "1206A": {
         "Name": "1206A",
         "CarStates": [
            {
               "CarModel": "50000",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "50000",
               "HasPantograph": true,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "50000",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "50000",
               "HasPantograph": true,
               "HasDriverCab": false,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "50000",
               "HasPantograph": true,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "50000",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            }
         ],
         "TrainClass": 14,
         "FromStation": "TH76",
         "Destinaton": "TH01",
         "Delay": 3
      },
      "1283C": {
         "Name": "1283C",
         "CarStates": [
            {
               "CarModel": "4300",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "4300",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "5320",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "5320",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "5320",
               "HasPantograph": false,
               "HasDriverCab": false,
               "HasConductorCab": false,
               "HasMotor": false,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "5320",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            }
         ],
         "TrainClass": 3,
         "FromStation": "TH65",
         "Destinaton": "TH76",
         "Delay": 3
      },
      "臨5236A": {
         "Name": "臨5236A",
         "CarStates": [
            {
               "CarModel": "5600",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "5600",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "5600",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "5600",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "5600",
               "HasPantograph": true,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            },
            {
               "CarModel": "5600",
               "HasPantograph": false,
               "HasDriverCab": true,
               "HasConductorCab": true,
               "HasMotor": true,
               "DoorClose": true,
               "BC_Press": 0,
               "Ampare": 0
            }
         ],
         "TrainClass": "17",
         "FromStation": "TH76",
         "DestinatonStation": "TH14",
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
			"CarModel": "4300",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4300",
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
			"CarModel": "4000R",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4000R",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4000R",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4000R",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4000R",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4000R",
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
			"CarModel": "4000",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4000",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4000",
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
			"CarModel": "3300V",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "3300V",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "3300V",
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
			"CarModel": "3020",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"CarModel": "3020",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"CarModel": "3020",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"CarModel": "3020",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"CarModel": "3020",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"CarModel": "3020",
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
			"CarModel": "3000",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"CarModel": "3000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"CarModel": "3000",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"CarModel": "3000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"CarModel": "3000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 395.9998,
			"Ampare": 0
		},
		{
			"CarModel": "3000",
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
			"CarModel": "50000",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 439.1578,
			"Ampare": 0
		},
		{
			"CarModel": "50000",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 439.9999,
			"Ampare": 0
		},
		{
			"CarModel": "50000",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 439.9999,
			"Ampare": 0
		},
		{
			"CarModel": "50000",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 439.9999,
			"Ampare": 0
		},
		{
			"CarModel": "50000",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 439.9999,
			"Ampare": 0
		},
		{
			"CarModel": "50000",
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
			"CarModel": "5600",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "5600",
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
			"CarModel": "5320",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "5320",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "5320",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "5320",
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
			"CarModel": "5300",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "5300",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "5300",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "5300",
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
			"CarModel": "5300",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "5300",
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
			"CarModel": "4600",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4600",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4600",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4600",
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
			"CarModel": "4600",
			"HasPantograph": true,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4600",
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
			"CarModel": "4321",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4321",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4321",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4321",
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
			"CarModel": "4300",
			"HasPantograph": false,
			"HasDriverCab": true,
			"HasConductorCab": true,
			"HasMotor": true,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4300",
			"HasPantograph": true,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4300",
			"HasPantograph": false,
			"HasDriverCab": false,
			"HasConductorCab": false,
			"HasMotor": false,
			"DoorClose": true,
			"BC_Press": 440,
			"Ampare": 0
		},
		{
			"CarModel": "4300",
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
		"On": false,
		"Last": "",
		"Name": "TH50_31イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH50_34ロT"
	},
	{
		"On": false,
		"Last": "1143",
		"Name": "TH64_21T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH64_12LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH64_12RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH64_14RT"
	},
	{
		"On": false,
		"Last": "1143",
		"Name": "TH64_22T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り398T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り404T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り406T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_1RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH50_33イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH50_12RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_TST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り405T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り403T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り397T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH50_14LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_22イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_4LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_8LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_9LET"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_25ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_21T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_1RBT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_24T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_22ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_23T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_1RDT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_1RCT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_9LAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_26T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_27ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り416T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り420T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り424T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_27イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_SST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_12LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_25イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り425T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り419T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH48_9LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_TST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH50_23LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH50_31ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH50_24LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH51_22ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "MFT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH50_TST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH50_33T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH54_22イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH54_21イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH54_12RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH54_22ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH53_21T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH53_13LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH53_15LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH53_15RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH53_22T"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH62_21T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH62_13LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH62_15LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH62_15RT"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH62_22T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH51_15LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_22ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH61_22T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH61_2RAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR3RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR上り5T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR上り4T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR上り3T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR上り2T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR上り1T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR1LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR下り1T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR下り2T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR下り3T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR下り4T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR下り5T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR上り浜園手前T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR3LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "JR1RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_24T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_DT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_ET"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_23イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_9LCT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_25T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_22イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_2RBT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_23ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_21T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_2RAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_9LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "AS1T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "AS2T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH57_21T"
	},
	{
		"On": true,
		"Last": "1140",
		"Name": "TH59_21ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "NA1T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "NA2T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH58_2RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH51_22イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH51_21ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH51_21イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH51_12RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH52_22イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH54_21ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH55S_21イT"
	},
	{
		"On": true,
		"Last": "",
		"Name": "TH59_21イT"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH61_21ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH63_22イT"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH63_21ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH53_12LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH53_12RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH53_14RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH52_21T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "SNT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "KST"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH62_12LT"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH62_12RT"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH62_14RT"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH61_2RT"
	},
	{
		"On": true,
		"Last": "試9191",
		"Name": "TH2T"
	},
	{
		"On": true,
		"Last": "試9191",
		"Name": "TH1T"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "MT2T"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "MT1T"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH63_22ロT"
	},
	{
		"On": false,
		"Last": "1143",
		"Name": "TH64_13LT"
	},
	{
		"On": false,
		"Last": "1143",
		"Name": "TH64_15LT"
	},
	{
		"On": false,
		"Last": "1143",
		"Name": "TH64_15RT"
	},
	{
		"On": true,
		"Last": "1113A",
		"Name": "FMT"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH63_21イT"
	},
	{
		"On": false,
		"Last": "1143",
		"Name": "TH65_50イT"
	},
	{
		"On": false,
		"Last": "1143",
		"Name": "TH65_XT"
	},
	{
		"On": false,
		"Last": "1143",
		"Name": "DF1T"
	},
	{
		"On": false,
		"Last": "1143",
		"Name": "DF2T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_OST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_10LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_45T"
	},
	{
		"On": false,
		"Last": "1184C",
		"Name": "TH66S_1RCT"
	},
	{
		"On": false,
		"Last": "1184C",
		"Name": "上り156T"
	},
	{
		"On": false,
		"Last": "1184C",
		"Name": "TH65_1RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH66S_5LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH65_TST"
	},
	{
		"On": true,
		"Last": "1184C",
		"Name": "TH65_41T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH65_42ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH65_42イT"
	},
	{
		"On": true,
		"Last": "1283C",
		"Name": "TH65_12LT"
	},
	{
		"On": false,
		"Last": "1283C",
		"Name": "TH65_44T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH65_11LT"
	},
	{
		"On": true,
		"Last": "1143",
		"Name": "TH65_45T"
	},
	{
		"On": true,
		"Last": "1184C",
		"Name": "TH65_3RT"
	},
	{
		"On": true,
		"Last": "1143",
		"Name": "TH65_47T"
	},
	{
		"On": false,
		"Last": "1283C",
		"Name": "TH65_48T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH65_6T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH65_5T"
	},
	{
		"On": false,
		"Last": "1283C",
		"Name": "TH65_50ロT"
	},
	{
		"On": false,
		"Last": "1283C",
		"Name": "TH65_YT"
	},
	{
		"On": false,
		"Last": "1283C",
		"Name": "TH65_ET"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH65_2RT"
	},
	{
		"On": false,
		"Last": "1143",
		"Name": "TH65_49T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH61_2RBT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH61_5RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り238T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り242T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り246T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り250T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH59_11RT"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH61_21イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_31T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_TST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り123T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り117T"
	},
	{
		"On": true,
		"Last": "1165",
		"Name": "下り111T"
	},
	{
		"On": true,
		"Last": "1165",
		"Name": "下り105T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り103T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH70_21イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH70_5LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り102T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り108T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り114T"
	},
	{
		"On": true,
		"Last": "9140B",
		"Name": "上り120T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り124T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_1RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_32T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH70_21ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH70_SST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り89T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_24T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_6LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH70_2LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH70_5LBT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_22T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_6LDT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_21T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_1RAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_23T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_1RBT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_6LCT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_TST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り75T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り71T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り67T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り59T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り55T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り49T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り45T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り41T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り35T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り27T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_50ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_9LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り26T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り30T"
	},
	{
		"On": true,
		"Last": "1166",
		"Name": "上り36T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り42T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り48T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り56T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り62T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り68T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り74T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_50イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_SST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_1RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り86T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り92T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH71_SST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH70_1RAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH54_15LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH52_12RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH52_15LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH52_22ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "NMT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_44T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH76_21イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH76_23T"
	},
	{
		"On": true,
		"Last": "1260",
		"Name": "TH76_5LDT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH76_21ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH76_5LCT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH55S_21ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH57_12RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH57_13RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り306T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り312T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り314T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り320T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り324T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH66S_53T"
	},
	{
		"On": false,
		"Last": "1184C",
		"Name": "TH66S_52T"
	},
	{
		"On": false,
		"Last": "1184C",
		"Name": "TH66S_55T"
	},
	{
		"On": true,
		"Last": "1150",
		"Name": "TH66S_54T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り151T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り145T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り143T"
	},
	{
		"On": true,
		"Last": "回9143",
		"Name": "下り137T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_10LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_35イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH66S_5LET"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り136T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り142T"
	},
	{
		"On": false,
		"Last": "1184C",
		"Name": "上り146T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_36イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_SST"
	},
	{
		"On": false,
		"Last": "1184C",
		"Name": "TH66S_1RT"
	},
	{
		"On": false,
		"Last": "1184C",
		"Name": "TH66S_51ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH66S_56T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH66S_1RAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH66S_57T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH66S_1RBT"
	},
	{
		"On": false,
		"Last": "1150",
		"Name": "TH66S_5LDT"
	},
	{
		"On": false,
		"Last": "1150",
		"Name": "TH66S_51イT"
	},
	{
		"On": true,
		"Last": "1150",
		"Name": "TH66S_13T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_23ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_9LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_22イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH76_27T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り7T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り9T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_TST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_41イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH76_26ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り6T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "上り8T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_1RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_41ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_37T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_34T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_10LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_32ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_35T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_11LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_33T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_21ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_24T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_2RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_1RAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_21イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_1RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_23イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_3RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_22ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_OST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_1RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH45_SST"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_36T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_2RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_1RAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_31T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_3RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH46_32イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH55S_11LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り323T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り317T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り313T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り311T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り305T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH57_14LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH50_34イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH55S_11RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TK1T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TK2T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH59_13LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH59_12LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "下り249T"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "下り245T"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "下り241T"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "下り237T"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH61_6LT"
	},
	{
		"On": false,
		"Last": "1113A",
		"Name": "TH63_15LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH63_12RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH76_24T"
	},
	{
		"On": true,
		"Last": "1021A",
		"Name": "TH76_5LBT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH76_25T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH76_22T"
	},
	{
		"On": true,
		"Last": "1206A",
		"Name": "TH76_5LAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH76_26イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_36ロT"
	},
	{
		"On": true,
		"Last": "1275",
		"Name": "TH67_23RT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_5LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_34T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_4LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_1RAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_33イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_1RBT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_33ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH67_35ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_42イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_34LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_4T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_48T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_8T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_42ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_7T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_49イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_46ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_5RAT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_49ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_6LT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_9LCT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_46イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_5RBT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_9T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_43ロT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_43イT"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_1RET"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_6T"
	},
	{
		"On": false,
		"Last": "",
		"Name": "TH75_5T"
	}
]
