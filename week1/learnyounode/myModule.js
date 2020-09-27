const fs = require('fs');
const path = require('path'); 


module.exports = (directory, fileExtension, callback) =>{
    fileExtension = '.' + fileExtension;
    fs.readdir(directory,function(err,list_of_files){
        if(err){
            return callback(err);
        }
        const filtered = list_of_files.filter(file =>{
            return path.extname(file) === fileExtension;
        }); 

       return callback(null, filtered); 
    });
}
