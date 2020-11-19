const gameArea = {
          "type": "Polygon",
          "coordinates": [
            [
              [
                12.545614242553711,
                55.69746993163952
              ],
              [
                12.54140853881836,
                55.682617226030914
              ],
              [
                12.553768157958984,
                55.68682687186489
              ],
              [
                12.555742263793945,
                55.69064903128138
              ],
              [
                12.545614242553711,
                55.69746993163952
              ]
            ]
          ]
        
      }
     
const players = [ 
    {
        "type": "Feature",
        "properties": {"name": "insidePlayer1"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.548103332519531,
            55.69171336359679
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"insidePlayer2"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.547760009765623,
            55.68948790843797
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"outsidePlayer1"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.557201385498047,
            55.68876218915045
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"outsidePlayer2"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.556514739990233,
            55.687020407903816
          ]
        }
      }
    ];
module.exports = {gameArea,players}