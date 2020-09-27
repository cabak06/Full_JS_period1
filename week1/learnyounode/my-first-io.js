const fs = require('fs');

let file = fs.readFileSync(process.argv[2]);
let newlines = file.toString().split('\n').length-1;
console.log(newlines);