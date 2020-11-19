const count = require('./tasks.js')();
const count2 = require('./tasks.js')();
const count3 = require('./tasks.js')();

count.inc();
console.log(count.value());
count.inc();
console.log(count.value());
console.log(count2.value());
console.log(count3.value());