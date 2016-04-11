/**
 *
 * ES6 has introduced two new keyword 'let' and 'const' for decalaring variables
 * So basically 'let' and 'const' are new alternative of 'var' for declaring variables
 */


/**
 * let
 *
 * let declares local variable for the nearest enclosing block
 * let has been in Firefox for a long time and is now a part of ES6.
 *
 * References:
 * https://github.com/sgaurav/understanding-es6/blob/master/let.js
 */

(function (myArray) {
	for(let i = 0; i<myArray.length; i++) {
		// variable i is declared only for this scope
		// i is undefined outside the loop

	  // do something with myArray[i]
	}

	console.log("i is "+typeof i); // undefined
})([1,2,3]);


/**
 *
 * Difference between 'let' and 'var' Keyword
 *
 * A variable defined using a var statement is known throughout the function it is defined in
 * A variable defined using a let statement is only known in the block it is defined in
 * 'var' declarations are hoisted and 'let' declarations are not hoisted
 *
 * References:
 * http://stackoverflow.com/questions/762011/let-keyword-vs-var-keyword
 */

function loop(arr) {
  // i IS NOT known here
  // j IS NOT known here

  for( var i = 0; i < arr.length; i++ ) {
      // i IS known here
  };

  // i IS known here
  // j IS NOT known here

  for( let j = 0; j < arr.length; j++ ) {
      // j IS known here

  };

  // i IS known here
  // j IS NOT known here
}
loop( [1,2,3] );


/**
 * The const statement creates a read-only constant.
 * const variables must be declared using an initializer, const foo = 'bar'
 * You can't override the value, still you can change object properties or array members
 *
 *
 * NOTE: 
 * Constants can be declared with uppercase or lowercase, but a common
 * convention is to use all-uppercase letters.
 *
 * References:
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const
 */


(function(){
	// Declare constants in Uppercase
	const MY_CONSTANT = 10;
	MY_CONSTANT = 20; // Error, can't override the value


	// const requires an initializer
	const FOO; // SyntaxError, it should be 		const FOO = "Some value";


	// you can change object properties
	const MY_OBJECT = {
		BAR: 1
	}	
	MY_OBJECT = 12;; // ERROR
	MY_OBJECT.BAR = 12; // NO ERROR
	console.log(MY_OBJECT);  // Object {BAR: 12}
})();