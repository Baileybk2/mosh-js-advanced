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
