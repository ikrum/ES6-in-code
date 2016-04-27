"use strict";

/**
 * JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.
 * The bodies of class declarations and class expressions are executed in strict mode.
 *
 * To declare a class, you use the 'class' keyword 
 * class ClassName{  }
 *
 *References:
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
 * http://stackoverflow.com/questions/36099721/javascript-what-is-the-difference-between-function-and-class
 */


// Create a Class named
class MyClass{

}

/*
 * Constructor
 *
 * The constructor method is a special method for creating and initializing an object
 * There can only be one special method with the name "constructor" in a class.
 */

class Polygon {
  constructor(width, height) { // constructor method
    this._width = width;
    this._height = height;
  }
}


/**
 *
 * Above example can be achieved by the following function
 */
function PolygonFunc(width, height) {
  this._width = width;
  this._height = height;
}


/**
 * 
 * What is the difference between Function and Class
 * 
 * JavaScript classes are syntactical sugar over JavaScript's existing prototype-based inheritance
 * Classes are in fact "special functions"
 * 
 * In terms of syntax and uses Class is different from Functions
 *
 *
 * DEFINE CLASS BODY
 *********************************************************
 * Constructor
 * -----------
 * A special function named 'constructor'
 *
 * Member Methods
 * --------------
 * property( parameters… ) {},
 * 
 * 
 * ES5 Getter Setters
 * ------------------
 * get property() {},
 * set property(value) {}
 *
 *
 * Static methods
 * --------------
 * Define static methods using 'static' keyword
 * Static methods are called without creating the instance of the class
 * Those methods are often used to create utility functions for an application.
 */

class Car {
  // constructor
  constructor(owner) {
    this._owner = owner;
    this._distance = 0;
    this._destination = "";
  }

  // member method
  move(){
    this._distance += 1;
  }

  // getter setters
  get destination(){
    return this._destination;
  }
  set destination(location){
    this._destination = location;
  }
  get owner(){
    return this._owner;
  }
  get distance(){
    return this._distance;
  }
  
  // Static methods
  static status(){
    return "ACTIVE";
  }
}

var car = new Car("John");
console.log(car.owner); // John

console.log(car.destination); // empty string
car.destination = "Town Hall"; // setting the destination 
console.log(car.destination); // TownHall

console.log(car.distance); // 0
car.move(); // calling member method
console.log(car.distance); // 1

// use of static method
console.log(car.status()) // ERROR , static functions are not a member of the car object
console.log(Car.status()) // ACTIVE, call static function directly  ClassName.yourStaticFunction();



/**
 * Hoisting
 *
 * function declarations are hoisted and class declarations are not.
 */
var p = new Box(); // ReferenceError, can't be used before declaration
class Box {}

/*
 * Only methods to be declared inside the class body.
 */
class notWorking {
  var privateVar; // ERROR
  return 1;  // ERROR
};