//Provide the class with a nice (using template literals) toString() method  + a getter/setter for the colour property. Verify that you cannot (why) make an instance of this class.


abstract class Shape {
    private _color: string;
    constructor(color: string) {
      this._color = color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;
    get color(): string {return this._color;}
    set color(newColor: string) {this._color = newColor;}
    public toString(): string {
      return `The shape is ${this._color}`
    }
  }

/*

  you cant make an instance of the class due to it being an abstract class.
  Abstract classes can only be extended and instances can only be generated form 
  classes that arent abstract.
  
*/

  //B) Create a new class Circle that should extend the Shape class.

  class Circle extends Shape{
     
    constructor(_color: string, private _radius: number) {
        super(_color)
      }
      get radius():number{return this._radius};
      set radius(radius:number){this._radius = radius};

      get area(): number {
          return Math.PI * (Math.pow(this._radius,2));
      }
      get perimeter(): number {
         return Math.PI * (2 * this._radius);
      } 
    toString():string {return `Color is: ${this.color} and Radius is: ${this._radius}`}
  }

  let circle = new Circle("Blue",20);
  
  /*
  console.log(circle);
  console.log(circle.area);
  console.log(circle.perimeter)
  console.log(circle.area)
  console.log(circle.color)
  console.log(circle.radius)
  circle.radius = 100;
  circle.color = 'Yellow';
  console.log(circle.toString());
*/


//C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.

class Cylinder extends Circle{
    constructor(_color: string, _radius: number, private _height: number) {
        super(_color,_radius)
      }
      get height():number{return this._height};
      set height(height:number){this._height = height};

      get area(): number {return Math.PI * (Math.pow(this.radius,2))};
      get perimeter(): number {throw new Error('Not Implemented')};
      get volume(): number {return Math.PI * (Math.pow(this.radius,2) * (this._height))};
      public toString():string{return `Color is: ${this.color}, Radius is: ${this.radius} and Height is: ${this._height}`}
    };
/*
let cylinder = new Cylinder('Blue',10,5);
console.log(cylinder);
console.log(cylinder.area);
//console.log(cylinder.perimeter);
console.log(cylinder.volume);
cylinder.color = 'Yellow';
cylinder.radius = 5;
cylinder.height = 100;
console.log(cylinder.toString());
*/



   

