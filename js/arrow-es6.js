/**
 * Arrow function is the short form of regular function expressions.
 * Arrow functions bind this lexically
 * Arrow functions are also called "fat arrow" functions
 * Its allow you to write short and concise code
 *
 *
 * SYNTAX for ES6 Arrow functions
 * -------------------------------
 * keyword 'function' is not required
 * arrow sign '=>' will be used between function parameter and function body
 * 
 * (param1, param2, …, paramN) => { statements OR expression}
 * () => { statements }    is equivalent to     function(){statements}
 *
 *
 * References:
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * http://tc39wiki.calculist.org/es6/arrow-functions/
 * https://www.smashingmagazine.com/2015/10/es6-whats-new-next-version-javascript/
 */


// A function with no parameters requires parentheses:
var emptyFunction = () => {}; // arrow function
var emptyFunction = function(){}; // equivalent regular function


//Parentheses are optional for one parameter
var value = x => x; // arrow function withou parentheses
var value = function(x){return x}; // regular function
value(10); // 10



// regular sum function
var sum = function(x, y){
  return x+y;
}
// sum function using 'fat arrow'
var sum = (x,y)=>x+y;
sum(10,10) // 20



// use in array map
let books = [{title: 'X', price: 10}, {title: 'Y', price: 15}];
var titles = books.map( item => item.title ); // very concise code using arrow function
// ES5 equivalent:
var titles = books.map(function(item) {
  return item.title;
});
console.log(titles); // [X,Y]

  

//Returning object literal. Requires Brackets.
var myFunction = () => ({ "myProp" : 123 });

//ES5 equivalent:
var myFunction = function() {
    return { "myProp" : 123 };
};


// annonymous functions
var x_es6 =  ((()=>55))() ; // x_es6 = 55;
var x_es5 = (function(){return 55})(); // x_es5 = 55;

var y_es6 = (x=>x*2)(10); // y_es6 = 20;
var y_es5 = (function(x){return x*2})(10); // y_es5 = 20;











