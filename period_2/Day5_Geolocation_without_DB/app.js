const { response } = require('express');
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Geo-Location Demonstration!'))
const gju = require('geojson-utils');
const { gameArea, players } = require('./gameData')


const playerInsideGamearea1 = players[0];
const playerInsideGamearea2 = players[1];
const playerOutsideGamearea1 = players[2];
const playerOutsideGamearea2 = players[3];

//Check whether the caller is located in the Game Area
app.get('/geoapi/isuserinarea/:lon/:lat/', (req,res)=>{

    const point = {
        "type":"Point",
        "coordinates":[req.params.lon,req.params.lat]
    };

    const response = {
        status: false,
        msg: 'Point was NOT inside tested polygon'
    }

    const playerIsInGameArea = gju.pointInPolygon(point,gameArea);
    
    if(playerIsInGameArea) {
        response.status = true;
        response.msg = 'Point was inside the tested polygon'
    }
    return res.send(response);
})


// Find Players near the caller
//12.55711555480957/55.688617043676594/200
app.get('/geoapi/findNearbyPlayers/:lon/:lat/:rad/', (req,res)=>{
    let playersFound = [];

    const radiusCenterForSearch = {
        "type":"Point",
        "coordinates":[req.params.lon,req.params.lat]
    };

    players.map(p =>{
        if(gju.geometryWithinRadius(p.geometry,radiusCenterForSearch,req.params.rad)){
            playersFound.push(p);
        }
    })
    return res.send(playersFound);
})


//Find Distance between caller, and another player
app.get('/geoapi/distanceToUser/:lon/:lat/:username/', (req,res)=>{

    let playerFound = {
        distance: 0.0,
        to:""
    }

    let playerNotFound = {
        msg:'User not found',
        status: 404
    }

    let playerName = players.find(p =>p.properties.name === req.params.username);
    
    if(playerName){

        playerFound.distance = gju.pointDistance(playerName.geometry, {type: 'Point', coordinates: [req.params.lon, req.params.lat]});
        playerFound.to = req.params.username
        return res.send(playerFound);
    
    }else{
        
        return res.send(playerNotFound)
    }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))



