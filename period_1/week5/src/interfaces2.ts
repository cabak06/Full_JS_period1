import * as _ from "lodash";



//a) Create an interface to describe a function: myFunc that should take three string parameters and return a String Array

interface MyFunc{

    (str1: string, str2: string, str3: string): string[];
}

//b) Design a function "implementing" this interface which returns an array with the three strings

let return_arr: MyFunc = function(str1:string,str2:string,str3:string): string[]{
    return [str1,str2,str3];
}
console.log(return_arr('Hello','World','Test'));



//c) Design another implementation that returns an array, with the three strings uppercased.

let return_arr_uppercase: MyFunc = function(str1:string,str2:string,str3:string): string[]{
    return [str1.toUpperCase(),str2.toUpperCase(),str3.toUpperCase()];
}
console.log(return_arr_uppercase('Hello','World','Test'));


//d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, to simulate a method that uses the interface.
let f2 = function logger(f1: MyFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}

//e) Test f2 with the two implementations created in b+c.

f2(return_arr);
f2(return_arr_uppercase);


//f) Verify that f2 cannot be used with functions that do not obey the myFunc interface

let func_err = function(numb1:number,str2:string,str3:string): any[]{
    return [numb1,str2,str3];
}
/*
f2(func_err);

interfaces2.ts:48:4 - error TS2345: Argument of type '(numb1: number, str2: string, str3: string) => any[]' is not assignable to parameter of type 'MyFunc'.
Types of parameters 'numb1' and 'str1' are incompatible.
Type 'string' is not assignable to type 'number'.
*/














/*
// V2
 
function loggerV1(a:any,b:any){
    console.log(`Value-1: ${a}, Value-2: ${b}`)
  }
   
  let n1 = 45
  let s1 = "Hello Class"
  //loggerV1(n1,s1);
   
  function loggerV2(a:number,b:string){
    console.log(`Value-1: ${a}, Value-2: ${b}`)
  }
  function loggerV2Return(a:number,b:string):string{
    return `Value-1: ${a}, Value-2: ${b}`
  }
   
  loggerV2(n1,s1);
  
*/

/*

//V3
 
interface IPerson {name:string}
interface IAddress {street:string}
 
function loggerV3(a:IPerson,b:IAddress){
  console.log(`Value-1: ${a}, Value-2: ${b}`)
}
 
// Duck typing
loggerV3({name:"Kurt Wonnegut"},{street: "Lyngbyvej 67"})
 


*/

/*
//V4
class Person implements IPerson {
  //private _name : String;
  #name: string
  constructor (name: string){this.#name = name}
  get name():string {return this.#name}
  set name(name:string) {this.#name= name}
  toString():string {return this.#name}
}
 
class Address implements IAddress {
  //private _name : String;
  _street: string
  constructor (street: string){this._street = street}
  get street():string {return this._street}
  set street (street:string) {this._street= street}
  toString():string {return this._street}
}
 
let p1 = new Person("Kurt Wonnegut");
let a1 = new Address("Lyngbyvej 45");



*/


/*
//Generisk -- not the way to do it-- too generic





*/