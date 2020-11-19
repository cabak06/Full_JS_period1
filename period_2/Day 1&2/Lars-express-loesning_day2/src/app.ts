require('dotenv').config();
import express from "express";
import path from "path";
import simple_middleware_logger from './middlewares/simpleLogger';
import myCors from './middlewares/my-cors'
import {requestLogger,err_Logger } from './middlewares/logger'
import { API_Exception } from "./routes/userApi";
const cors = require('cors')

const app = express();


app.use(express.static(path.join(process.cwd(),"public")))
app.use(express.json())
app.use(cors())
app.use(simple_middleware_logger)
//app.use(myCors)
app.use(err_Logger)
app.use(requestLogger)
let userAPIRouter = require('./routes/userApi');

app.use("/api/users",userAPIRouter);

app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" })
})


const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)

//404 does NOT take an error
app.use(function (req, res, next) {
  try{
  console.log("Got here, but passing the error on to the default handler")
  if(req.originalUrl.startsWith("/api")){
      throw new Error("HELLOi")
  }
}
catch(err){
  next(err)
}
})

app.use(function (err: any, req:any, res:any, next:any) {
  if(err.name ==="API_Exception"){
      return res.status(err.code).json({code: err.code, message: err.message})
  }
  next(err)  //Pass on to the default error-handler --> makes an (ugly) html response
})

console.log(`Server started, listening on port: ${PORT}`)
module.exports.server = server;


