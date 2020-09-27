//Provide the class with a nice (using template literals) toString() method  + a getter/setter for the colour property. Verify that you cannot (why) make an instance of this class.
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() { return this._color; }
    set color(newColor) { this._color = newColor; }
    toString() {
        return `The shape is ${this._color}`;
    }
}
/*

  you cant make an instance of the class due to it being an abstract class.
  Abstract classes can only be extended and instances can only be generated form
  classes that arent abstract.
  
*/
//B) Create a new class Circle that should extend the Shape class.
class Circle extends Shape {
    constructor(_color, _radius) {
        super(_color);
        this._radius = _radius;
    }
    get radius() { return this._radius; }
    ;
    set radius(radius) { this._radius = radius; }
    ;
    get area() {
        return Math.PI * (Math.pow(this._radius, 2));
    }
    get perimeter() {
        return Math.PI * (2 * this._radius);
    }
    toString() { return `Color is: ${this.color} and Radius is: ${this._radius}`; }
}
let circle = new Circle("Blue", 20);
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
class Cylinder extends Circle {
    constructor(_color, _radius, _height) {
        super(_color, _radius);
        this._height = _height;
    }
    get height() { return this._height; }
    ;
    set height(height) { this._height = height; }
    ;
    get area() { return Math.PI * (Math.pow(this.radius, 2)); }
    ;
    get perimeter() { throw new Error('Not Implemented'); }
    ;
    get volume() { return Math.PI * (Math.pow(this.radius, 2) * (this._height)); }
    ;
    toString() { return `Color is: ${this.color}, Radius is: ${this.radius} and Height is: ${this._height}`; }
}
;
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
