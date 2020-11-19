
var secureRandoms = {
    title: '6 secure randoms',
    randoms: []
};

//console.log(secureRandoms)

function execute(){
    require('crypto').randomBytes(48, function(err, buffer) {
    let secureHex = buffer.toString('hex');
    secureRandoms.randoms.push({length: 48, random:  secureHex});

    require('crypto').randomBytes(40, function(err, buffer) {
    let secureHex = buffer.toString('hex');
    secureRandoms.randoms.push({length: 40, random:  secureHex});
    
    require('crypto').randomBytes(38, function(err, buffer) {
    let secureHex = buffer.toString('hex');
     secureRandoms.randoms.push({length: 38, random:  secureHex});
    
    console.log(secureRandoms);              
                
           });
            
       });
   });
};

