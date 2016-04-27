/*
 * Spread Operator
 *
 * The spread operator (...) is a very convenient syntax to expand elements 
 * of an array in specific places, such as arguments in function calls.
 *
 *
 *
 * References
 * http://qnimate.com/javascript-operator/
 * https://www.smashingmagazine.com/2015/10/es6-whats-new-next-version-javascript/
 */


// uses in variables
let values = [1, 2, 4];
let some = [...values, 8]; // [1, 2, 4, 8]
let more = [...values, 8, ...values]; // [1, 2, 4, 8, 1, 2, 4]

/*
 * uses of spread operator in function parameter
 * args is an array holding the arguments passed to the function
 */
(function(...args){   
  console.log(args); // [1,2,3]
})(1, 2, 3);

(function(a, b, ...args){
		console.log(a); // 1
		console.log(b); // 5
    console.log(args); // [7,9]
    console.log(args.length); // 2
})(1, 5, 7, 9); //"args" holds only 7 and 9

