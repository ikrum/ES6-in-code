/**
 * let
 *
 * Declare variable for a scope using 'let' keyword
 * 
 * Why is let important?
 */

(function () {
	for(let i = 0, i<myArray.length; i++) {
		// variable i is declared only for this scope
		// i is undefined outside the loop


	  // do something with myArray[i]
	}

	console.log(i); // undefined
})();


/**
 *
 * Difference between 'let' and 'var' Keyword
 *
 * A variable defined using a var statement is known throughout the function it is defined in
 * A variable defined using a let statement is only known in the block it is defined in
 * let variables are not Hoisting


 @Reference			http://stackoverflow.com/questions/762011/let-keyword-vs-var-keyword
 */



 // let is only visible in the for() loop and var is visible to the whole function.