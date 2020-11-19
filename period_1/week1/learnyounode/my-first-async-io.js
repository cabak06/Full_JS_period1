const fs = require('fs');

let file = fs.readFile(process.argv[2], 'utf8', function(err,data){

    if(err){
        return err
    }
    const newlines = data.toString().split('\n').length-1;
    console.log(newlines);
});

