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
              resolve(buffer.toString('hex'));
         });
    })
 }

 
 const executeRandomSecureAsync =  async function execute(){
     const secureRandom1 = await makeSecureRandom(48)
     secureRandoms.randoms.push( {length: 48, random:  secureRandom1});

     const secureRandom2 = await makeSecureRandom(40)
     secureRandoms.randoms.push( {length: 40, random:  secureRandom2});

     const secureRandom3 = await makeSecureRandom(32)
     secureRandoms.randoms.push( {length: 32, random:  secureRandom3});

     return secureRandoms;
    
 }

 module.exports.executeRandomSecureAsync = executeRandomSecureAsync;