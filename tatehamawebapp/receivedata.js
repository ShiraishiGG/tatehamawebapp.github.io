// JavaScript source code
async function Getdata() { 
    const requestURL = 
    ""

    const reqest = new Request(requestURL);

    const responce = await fetch(reqest);
    const datastring = await responce.text(); // レスポンスをテキストとして取得

    Location_data = JSON.parse(datastring);


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
    `);
}