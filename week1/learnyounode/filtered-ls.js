const fs = require('fs');
const path = require('path');

let directory = process.argv[2];
fileExtension = '.' + process.argv[3];

let files = fs.readdir(directory,function(err,list_of_files){
    
    if(err){
        return err;
    }
    list_of_files.forEach(file => {
        if(path.extname(file) === fileExtension){
           console.log(file);
        }
    });
})
