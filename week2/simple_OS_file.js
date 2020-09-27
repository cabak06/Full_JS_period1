/*

1) Simple OS-info file
Create a javascript file that, using nodes CommonJS 
module system (require/exports), will export an object
with the following info (demonstrated for a Window PC)

*/

const os = require('os');

const os_Obj = {
    platform: os.platform(),
    osType: os.type(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    EOL: JSON.stringify(os.EOL)
}


module.exports.os_Obj = os_Obj;
