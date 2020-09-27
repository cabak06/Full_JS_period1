// Opgave 2) --> CALLBACKS

/*
a) Implement a function: myFilter(array, callback)that takes an array as the first 
   argument, and a callback as the second and returns a new (filtered) array
   according to the code provided in the callback (that is with the same behaviour
   as the original filter method).
*/

let numbers  = [1,2,3,4,5,6,7,8,9,10];

function myFilter(array, callback){
    return callback(array);
};

function filteredNumbers(array){
 var filtered_numbers = [];
 array.forEach(number => {
     if(number > 3){
         filtered_numbers.push(number);
     }
 });
 return filtered_numbers;
}

// Using/testing with the filter-method.
let filt_numbers = numbers.filter( (number) =>{
 return number > 3
}); 

console.log(myFilter(numbers,filteredNumbers));
console.log(filt_numbers);



/*
b) Implement a function: myMap(array, callback)that, provided an array and a callback, 
   provides the same functionality as calling the existing map method on an array.
*/

let mapNumbers = [1,2,3,4,5,6,7,8,9,10];

function myMap(array, callback){
    return callback(array);
}

function mapped_callback(array){
    let temp = [];
    array.forEach( (number) =>{
    temp.push('*'+ number +'*');    
    })
return temp;
};


// Using/testing with the map-method.
let mapped_numbers = mapNumbers.map((number) =>{
    return '*'+ number +'*';
 
});

console.log(myMap(mapNumbers,mapped_callback)); 
console.log(mapped_numbers);









// 3) Prototype/property

Array.prototype.myFilter = function(callback){
    let temp = [];
    this.forEach(element =>{
     if (callback(element)) temp.push(element);
    });
    return temp;
};

Array.prototype.myMap = function(callback){
    let temp = [];
    this.forEach(element =>{
        if(callback(element)) temp.push(element);
    });
    return temp;
};

console.log(mapNumbers.myFilter((number) => (number < 5)));
console.log(mapNumbers.myMap((number) => (number > 5)));



/* The reduce-method.
   
a) Use join to create a single string from all, with 
       names: comma-, space. and  # - separated.
*/

var all= ["Lars", "Peter", "Jan", "Bo"];
joined_all = all.join(', # ');
console.log(joined_all);

// b)

var numbers_to_reduce = [2, 3, 67, 33]; 
const reduce_sum = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers_to_reduce.reduce(reduce_sum,0);
console.log(sum);

// c)

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

const reduce_average = (accumulator,member) => accumulator + member.age;
const total = members.reduce(reduce_average,0);
const average = total/members.length; 
console.log(average);

// d)

var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

var initialValue = {}
var reducer = function(accumulator, vote) {
  if (!accumulator[vote]) {
    accumulator[vote] = 1;
  } else {
    accumulator[vote] = accumulator[vote] + 1;
  }
  return accumulator;
}
var result = votes.reduce(reducer, initialValue) // {tacos: 2, pizza: 3, fries: 1, ice cream: 2}
console.log(result);





// Reusable Modules with Closures 
// 1) Implement and test the Closure Counter Example from today's lecture

function makeFunc(){
    var name = "Mozilla";
    function logName(){
       // console.log(name);
    }
    return logName;
}
var name = makeFunc();
name();


var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(currentValue){
        privateCounter += currentValue;
    }
    return{
     inc: () => {changeBy(1);},
           dec: () => {changeBy(-1);},
           value:() => { return privateCounter;} 
        }       
    };

    var counter1 = makeCounter();
    var counter2 = makeCounter();
    counter1.inc();
    counter1.dec();
    counter1.dec();
    console.log(counter1.value());
    console.log(counter2.value());

    module.exports = makeCounter;

    
    // Mangler opgave og opgave2/3 i closures.

    
