/*
 * JavaScript Generators
 * 
 * ECMAScript 6 specification introduced a new JavaScript feature called as JavaScript Generators.
 * Generators are functions which can be exited and later re-entered.
 * 'yield' keyword and function*() syntax together make JS Generators.
 *
 *
 * References
 * http://qnimate.com/javascript-yield-keyword-and-function-syntax/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/yield
 */

/*
 * Generator function
 *
 * The function* declaration (function keyword followed by an asterisk) defines a generator function
 * It returns a Generator object.
 *
 *
 * yield
 * The yield keyword is used to pause and resume a generator function
 */

function* getIds()
{
    yield 1; // return 1 and pause
    yield 3; // return 3 and pause
    yield 5; // return 5 and pause
    yield 7; // return 7 and pause
}

var ids = getIds(); // return generator object

console.log(ids.next()); // { value: 1, done: false }
console.log(ids.next()); // { value: 3, done: false }
console.log(ids.next()); // { value: 5, done: false }
console.log(ids.next()); // { value: 7, done: false }
console.log(ids.next()); // { value: undefined, done: true }

// The yield* expression is used to delegate to another generator or iterable object.
function* myGenerator() {
  yield* [1, 2, 3];
  return "foo";
}

var gen = myGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next()); // myGenerator() returned { value: "foo", done: true } at this point
