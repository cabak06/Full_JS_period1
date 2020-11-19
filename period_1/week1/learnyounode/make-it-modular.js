const myModule = require('./myModule');

const directory = process.argv[2];
const fileExtension = process.argv[3];

myModule(directory,fileExtension,function(err, filtered_list){
    if(err){
        return callback(err);
    }
    filtered_list.forEach(file => {
        console.log(file);
    });
})