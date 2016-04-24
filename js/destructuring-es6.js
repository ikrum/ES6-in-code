/*
 * The destructuring assignment syntax allow you to extract data from arrays or objects 
 *
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */


/*
 * Array destructuring
 */

(function(){

	var a, b, rest;
	[a, b, ...rest] = [1, 2, 3, 4, 5]
	console.log(a) // 1
	console.log(b) // 2
	console.log(rest) // [3, 4, 5]

	var foo = ["one", "two", "three"];
	var [one, two, three] = foo;
	console.log(one); // "one"
	console.log(two); // "two"
	console.log(three); // "three"

})();

/*
 * We can assign a default value if the array index is undefined
 */
(function(){
	var a, b;
	[a=5, b=7] = [1];
	console.log(a); // 1
	console.log(b); // 7
})();

/*
 * Swapping variables
 */

(function(){
	var a = 1;
	var b = 3;

	[a, b] = [b, a];
	console.log(a); // 3
	console.log(b); // 1
})();

/*
 * function returns multiple values and assign using array destructuring feature
 * Here we are ignoring 2 and 6 array indexes
 */

(function(){
	function myFunction(){
	  return [1,2,3,4,5,6];
	}

	var a,b,c,d,e,f;
	[a,,c,d,e] = myFunction();
	console.log(a,b,c,d,e,f); // 1 undefined 3 4 5 undefined
})();



/*
 * Object destructuring
 */

var obj = {name: "john", age: 45};
var {name, age} = obj;

console.log(name); // john
console.log(age); // 45