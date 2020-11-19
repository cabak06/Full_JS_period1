require('dotenv').config();
import express from "express";
import path from "path";
const app = express();
app.use(express.json());
app.use('/front', express.static('public'));
//const debug = require("debug")("game-case")
//whenever you have done console.log("Hello"), do debug("Hello")




const {UserFacade} = require("./facades/userFacade");

app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" })
});

app.get('/api/users', (req,res)=>{
  try{
    const users = res.send(UserFacade.getAllUsers());
  }catch(error) {
    res.status(404).send(error.message);
  }
  });

app.get('/api/users/:username', (req,res)=>{
  const user = UserFacade.getUser(req.params.username);
  if(!user) return res.status(404).send(`The user with the given username: ${req.params.id} was not found`);
  res.send(user);
  });


  app.post('/api/users', (req, res) => {
    try {
      const user = UserFacade.addUser(req.body);
      return res.send(user);
    } catch (e) {
      return res.status(400).send(e.message)
    }
  });

  app.delete('/api/users/:username', (req,res)=>{
    const user = UserFacade.deleteUser(req.params.username);
    if(!user) return res.status(404).send(`The user with the given username: ${req.params.id} was not found`);
    res.send(user);
  })





const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)
console.log(`Server started..., listening on port: ${PORT}`)
module.exports.server = server;


