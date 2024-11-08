// Hoisting

sayHello()
// function declaration
// function declarations are hoisted
// sayHello() can be called before the function declaration
function sayHello() {}

// function expression
// function expressions are NOT hoisted
const sayGoodbye = function () {}

// Classes are NOT hoisted

// class Expression
const Square = class {}

// class Declaration
// declarations are more widely used, cleaner, simpler
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  // Instance method
  draw() {}

  // Static method
  static parse(str) {
    const radius = JSON.parse(str).radius
    return new Circle(radius)
  }
}

const circle = Circle.parse('{ "radius": 1 }')
console.log(circle)

const c = new Circle(1)
console.log(c)

// Private Members Using Symbols

const _radius = Symbol()

class Circle1 {
  constructor(radius) {
    this[_radius] = radius
  }
}

const c1 = new Circle1(1)
console.log(c1)

// Inheritance

class Shape {
  constructor(color) {
    this.color = color
  }

  move() {
    console.log("move")
  }
}

class Circle2 extends Shape {
  constructor(color, radius) {
    super(color)
    this.radius = radius
  }
  draw() {
    console.log("draw")
  }
}

const c2 = new Circle2("red", 1)
console.log(c2)

// NOTES

// class Circle {
//   constructor(radius) {
//     this.radius = radius
//   }

//   // These methods will be added to the prototype.
//   draw() {}

//   // This will be available on the Circle class (Circle.parse())
//   static parse(str) {}
// }

// // Using symbols to implement private properties and methods
// const _size = Symbol()
// const _draw = Symbol()

// class Square {
//   constructor(size) {
//     // "Kind of" private property
//     this[_size] = size
//   }

//   // "Kind of" private method
//   [_draw]() {}

//   // By "kind of" I mean: these properties and methods are essentally
//   // part of the object and are accessible from the outside. But accessing
//   // them is hard and awkward.
// }

// // using WeakMaps to implement private properties and methods
// const _width = new WeakMap()

// class Rectangle {
//   constructor(width) {
//     _width.set(this, width)
//   }

//   draw() {
//     console.log("Rectangle with width" + _width.get(this))
//   }
// }

// // WeakMaps give us better protection than symbols. There is no way
// // to access private members implemented using WeakMaps from the
// // outside of an object.

// // Inheritance
// class Triangle extends Shape {
//   constructor(color) {
//     // To call the base constructor
//     super(color)
//   }

//   draw() {
//     // Call the base method
//     super.draw()

//     // Do some other stuff here
//   }
// }

// Stack Exercise

const _items = new WeakMap()

class Stack {
  constructor() {
    _items.set(this, [])
  }

  push(obj) {
    _items.get(this).push(obj)
  }

  pop() {
    const items = _items.get(this)
    if (items.length === 0) {
      throw new Error("Stack is empty.")
    }

    return items.pop()
  }

  peak() {
    const items = _items.get(this)
    if (items.length === 0) {
      throw new Error("Stack is empty.")
    }
    return items[items.length - 1]
  }

  get count() {
    return _items.get(this).length
  }
}

// MODULE NOTES

// Module formats
//  - AMD / Asynchronous Module Definition (Browser)
//  - CommonJS (Node)
//  - UMD / Universal Module Definition (Browser + Node)
//  - ES6 Modules

// CommonJS (Used in Node)
// Exporting
// module.exports.Cirlce = Circle;
// // Importing
// const Circle = require('./circle');

// // ES6 Modules (Used in Browser)
// // Exporting
// export class Square {}
// // Importing
// import {Square} from './square';

// We use Babel to transpile our modern JavaScript code
// into code that browsers can understand (typically ES5).

// We use Webpack to combine our JavaScript files into a
// bundle.
