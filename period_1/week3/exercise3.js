const now = require('performance-now');
const URL = "https://swapi.dev/api/people/";
const fetch = require("node-fetch");

function fetchPerson(url){
    try{
    let temp =  fetch(url).then(res =>{ return res.json()});  
    return temp;
    }catch (err) {
     console.log('Error ',err);
    }finally{
     console.log('Period.')
    }   
  }
  
  
  async function printNames() {
    console.log("Before");
    const person1 = await fetchPerson(URL+'1');
    const person2 = await fetchPerson(URL+'2');
    
    //Trying to fix the problem in order for requests to be made parallel
    const parallel_request = await Promise.all([person1, person2]);
    
    console.log(parallel_request[0].name);
    console.log(parallel_request[1].name);
    //console.log(person1.name);
    //console.log(person2.name)
    console.log("After all"); 
  }
  
//printNames();
