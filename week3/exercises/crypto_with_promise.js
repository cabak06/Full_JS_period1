var crypto = require('crypto');

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

 const executeRandomSecurePromises =  function execute(){
    Promise.all([makeSecureRandom(48),makeSecureRandom(40),makeSecureRandom(32)])
    .then(dataList=>{
        dataList.forEach(data=>{
            secureRandoms.randoms.push({length: data.length, random:  data.buffer}); 
           
        })
        console.log(secureRandoms);
    })
 }


 module.exports.executeRandomSecurePromises = executeRandomSecurePromises;