import express from "express";
import gameFacade from "../facades/gameFacade";
const router = express.Router();
import { ApiError } from "../errors/apiError"

//import * as mongo from "mongodb"
import setup from "../config/setupDB"
import userFacade from '../facades/userFacadeWithDB';



(async function setupDB() {
  const client = await setup();
  await userFacade.setDatabase(client);
  await gameFacade.setDataBase(client);
})()

router.get('/', function (req, res, next) {
	res.send("You are in..");
})


router.post('/nearbyplayers', async function (req, res, next) {
  try {
    const { userName, password, lon, lat, distance } = req.body;
    if (isNaN(lon) || isNaN(lat) || isNaN(distance)) throw new ApiError("lon, lat, dist, must be numbers", 422);
		const nearbyPlayers = await gameFacade.nearbyPlayers(userName, password, lon, lat, distance);
		res.json(nearbyPlayers)
    
    //Read the exercise and check what must be sent with the request. Grab this information from the request body, and 
    //call the method (the skeleton is already there) nearbyPlayers(....) in the gameFacade and send back the result to the client
    
    /*const response = await gameFacade.nearbyPlayers(........)
    return res.json(response) */
  } catch (err) {
    next(err)
  }
})

router.post('/getPostIfReached', async function (req, res, next) {
  throw new Error("Not yet implemented")
})

module.exports = router;