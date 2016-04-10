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

 @Reference			http://stackoverflow.com/questions/762011/let-keyword-vs-var-keyword
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
