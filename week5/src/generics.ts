/*
a) Implement a generic function which will take an array of any kind, and return the array reversed 
(just use the built-in reverse function), so the three first calls below will print the reversed array, 
and the last call will fail.
*/

class GenericLogger<T,U,V>{
    reverseArr = (a:T,b:U,c:V) =>{
        return [c,b,a];
    }
}
let logger_string = new GenericLogger<string,string,string>();
let logger_number = new GenericLogger<number,number,number>();
let logger_bool = new GenericLogger<boolean,boolean,boolean>();
let logger_err = new GenericLogger<number,number,number>();

/*
console.log(logger_string.reverseArr('a','b','c'));
console.log(logger_number.reverseArr(10,20,30));
console.log(logger_bool.reverseArr(true,true,false));
//console.log(logger_err.reverseArr('kj',4,5));
*/


//b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:

class DataHolder<T>{
    private _value: T;
    constructor(_value: T) {
      this._value = _value;
    }

    get value():T{return this._value};
    set value(value:T){this._value = value};
}

let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);