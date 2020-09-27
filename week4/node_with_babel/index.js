import "core-js/proposals/promise-any"
import * as fetch from 'node-fetch';
import * as crypto from 'crypto';

var secureRandoms = {
    title: '6 secure randoms',
    randoms: []
};

 function makeSecureRandom(size){
    return new Promise((resolve,reject)=>{
        crypto.randomBytes(size, function(err, buffer) {
            let error = false;
            if(error){
              reject(new Error("Too Bad"));
            }
             resolve({length: size, buffer: buffer.toString('hex')});
         });
    })
 }

 //using promise(all)
 const executeRandomSecurePromises_all =  function execute(){
    Promise.all([makeSecureRandom(48),makeSecureRandom(40),makeSecureRandom(32)])
    .then(dataList=>{
        dataList.forEach(data=>{
            secureRandoms.randoms.push({length: data.length, random:  data.buffer}); 
           
        })
        console.log(secureRandoms);
    })
 }

// Using promise(any)
 const executeRandomSecurePromises_any =  function execute(){
    const promises = [makeSecureRandom(48),makeSecureRandom(40),makeSecureRandom(32)]
    Promise.any(promises).then((value) => console.log(value));    
 }
 



 function fetchChuckJoke(){
    try{
    let joke =  fetch('https://api.chucknorris.io/jokes/random').then(res =>{ return res.json()});  
    return joke;
    }catch (err) {
     console.log('Error ',err);
    }finally{
     //console.log()
    }   
  }


//promise all
function printJoke() {
    var jokes = [];
    const joke1 = fetchChuckJoke();
    const joke2 = fetchChuckJoke();
    const joke3 = fetchChuckJoke();
    Promise.all([joke1,joke2,joke3])
    .then(dataList=>{
        dataList.forEach(data =>{
            jokes.push(data.value);
        })
        console.log(jokes);
    })
 
  }

//prmise any  
let joke_any = () =>{
    const joke1 = fetchChuckJoke();
    const joke2 = fetchChuckJoke();
    const joke3 = fetchChuckJoke();

    const promises = [joke1,joke2,joke3];
    Promise.any(promises).then((data) => console.log(data.value));
}


//executeRandomSecurePromises_all();
//executeRandomSecurePromises_any();
//printJoke();
//joke_any();





//you have to run the file using "babel".. node node_modules/@babel/node/bin/babel-node index.js
 