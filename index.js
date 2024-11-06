// OOP

// Object review

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw")
//   },
// }

// circle.draw()

// one or more methods in an object means it has "behavior"

// use a factory or constuctor function if an object will have behavior
// Every object (except the root object) has a prototype (parent).
// To get the prototype of an object:
// Object.getPrototypeOf(obj);

// In Chrome, you can inspect "__proto__" property. But you should
// not use that in the code.

// To get the attributes of a property:
// Object.getOwnPropertyDescriptor(obj, 'propertyName');

// To set the attributes for a property:
// Object.defineProperty(obj, 'propertyName', {
//     configurable: false,    // cannot be deleted
//     writable: false,
//     enumerable: false
// });

// Constructors have a "prototype" property. It returns the object
// that will be used as the prototype for objects created by the constructor.
// Object.prototype === Object.getPrototypeOf({})
// Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype.
// A single instance of this prototype will be stored in the memory.
// const x = {};
// const y = {};
// Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
// returns true

// Any changes to the prototype will be immediately visible to all objects
// referencing this prototype.

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory.
// Circle.prototype.draw = function() {}

// To get the own/instance properties:
// Object.keys(obj);

// To get all the properties (own + prototype):
// for (let key in obj) {}

// FACTORY
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw")
    },
  }
}

const circle1 = createCircle(1)
console.log(circle1)

// CONSTRUCTOR

function Circle(radius) {
  this.radius = radius

  this.defaultLocation = { x: 0, y: 0 }

  this.computeOptimumLocation = function () {
    // ...
  }

  this.draw = function () {
    this.computeOptimumLocation()
    console.log("draw")
  }
}
// the 'new' operator
const circle = new Circle(1)
circle.draw()

// StopWatch Exercise:

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started")

    running = true

    startTime = new Date()
  }

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started")

    running = false

    endTime = new Date()

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000
    duration += seconds
  }

  this.reset = function () {
    startTime = null
    endTime = null
    running = false
    duration = 0
  }

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration
    },
  })
}

// INHERITANCE

// base, super, or parent class
// derived, sub, or child class
// IS-A relationship

// Prototypical Inheritance
// no classes in JS.. only Objects
// Prototype = "parent" object
// every object in JS has a prototype, or constuctor property

// MULTILEVEL INHERITANCE
// Objects created by a given constructor will have the same prototype
// All arrays created by a given constructor will have the same prototype

let person = { name: "Bailey" }
// let objectBase = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString")
// console.log(person)
// console.log(descriptor)

Object.defineProperty(person, "name", {
  writable: false,
})

person.name = "John"

console.log(person)
// for (let key in person) {
//   console.log(key)
// }
