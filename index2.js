// function Shape() {}
// function Circle() {}

// // Prototypical inheritance
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// function Rectangle(color) {
//     // To call the super constructor
//     Shape.call(this, color);
// }

// // Method overriding
// Shape.prototype.draw = function() {}
// Circle.prototype.draw = function() {
//     // Call the base implementation
//     Shape.prototype.draw.call(this);

//     // Do additional stuff here
// }

// Don't create large inheritance hierarchies.
// One level of inheritance is fine.

// // Use mixins to combine multiple objects
// // and implement composition in JavaScript.
// const canEat = {
//     eat: function() {}
// };

// const canWalk = {
//     walk: function() {}
// };

// function mixin(target, ...sources) {
//     // Copies all the properties from all the source objects
//     // to the target object.
//     Object.assign(target, ...sources);
// }

// function Person() {}

// mixin(Person.prototype, canEat, canWalk);

// Shape Constructor function
function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function () {
  console.log("duplicate")
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}

// calling the Super Constructor
function Circle(radius, color) {
  Shape.call(this, color)
  this.radius = radius
}

extend(Circle, Shape)

Circle.prototype.draw = function () {
  console.log("draw")
}

function Square(size) {
  this.size = size
}

extend(Square, Shape)

const s = new Shape()
const c = new Circle(1, "red")
const sq = new Square(10)

console.log(sq)

// mixins
// REST operator
function mixin(target, ...sources) {
  // SPREAD operator
  Object.assign(target, ...sources)
}

const canEat = {
  eat: function () {
    this.hunger--
    console.log("eating")
  },
}

const canWalk = {
  walk: function () {
    console.log("walking")
  },
}

const canSwim = {
  swim: function () {
    console.log("swim")
  },
}

function Person() {}

mixin(Person.prototype, canEat, canWalk)

const person = new Person()
console.log(person)

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim)

const goldFish = new Goldfish()
console.log(goldFish)
