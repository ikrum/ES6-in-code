/**
 *
 * ES6 provieds a new syntax to initialize parameters if they were not explicitly supplied
 *
 *
 * References
 * http://tc39wiki.calculist.org/es6/default-parameter-values/
 * http://qnimate.com/post-series/ecmascript-6-complete-tutorial/
 */


/*
 * In ES5 we used to check undefined variables and  set a default value
 */

function getData(options){
	options = options || {}; // set a default value to {}
}
getData(); // options parameter is not passed

/* OR */
function multiply(a, b){
  var b = typeof b !== 'undefined' ?  b : 1;
  console.log( a*b ) // 5
}
multiply(5); 



/*
 * In ES6 you can define default values to function parameters
 */

function devide(a,b=1){
	console.log( a/b ); // 5
}
devide(5);



/*
 * passing undefined is considered as missing an argument.
 * But null is being passed as a value
 */
(function(a = 1, b = 2, c = 3, d=10){
	console.log(a, b, c, d); // Output "1 7 null 10"

})(undefined,7,null);



/*
 * Defaults can also be expressions
 */

(function(x = 1, y = 2, z = 3 + 5){
	console.log(x, y, z); // Output "6 7 8"
})(6,7);