/*
a) Implement a generic function which will take an array of any kind, and return the array reversed
(just use the built-in reverse function), so the three first calls below will print the reversed array,
and the last call will fail.
*/
class GenericLogger {
    constructor() {
        this.reverseArr = (a, b, c) => {
            return [c, b, a];
        };
    }
}
let logger_string = new GenericLogger();
let logger_number = new GenericLogger();
let logger_bool = new GenericLogger();
let logger_err = new GenericLogger();
/*
console.log(logger_string.reverseArr('a','b','c'));
console.log(logger_number.reverseArr(10,20,30));
console.log(logger_bool.reverseArr(true,true,false));
//console.log(logger_err.reverseArr('kj',4,5));
*/
//b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
class DataHolder {
    constructor(_value) {
        this._value = _value;
    }
    get value() { return this._value; }
    ;
    set value(value) { this._value = value; }
    ;
}
let d = new DataHolder("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);
let d2 = new DataHolder(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
