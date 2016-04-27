/*
 * Template literals
 *
 * Template literals provide a clean way to create strings and perform string interpolation.
 * The syntax based on the dollar sign and curly braces ${..}. 
 * Template literals are enclosed by `backticks`.
 *
 *
 * References
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * https://www.smashingmagazine.com/2015/10/es6-whats-new-next-version-javascript/
 */
/*
 * Syntax
 *
 * 				`string text`
 *
 *				`string text line 1
 * 				 string text line 2`
 * 
 * 
 * 				`string text ${expression} string text`
 */

// Multi-line strings
var welcomeMsg = `Hello dear,
You can see me at second line at your output`;

console.log(welcomeMsg)


// String interpolation
var name = "John",
		age = 24,
		hobby = "Programming";

var story = `
My name is ${name}.
I am ${age} years old and I love ${hobby}

Regards
THE LAST LINE
`;
console.log(story);

// ES5 equivalent
var es5_story = "My name is "+ name +"\nI am "+age+" years old and I love "+hobby+"\n\n"+"Regards\nTHE LAST LINE";
console.log("\n\nES5 equivalent:");
console.log(es5_story);


/*
 * String Methods
 *
 * A couple of convenience methods have been added to the String prototype.
 * Here is the simple demonstration:
 */


 // Most of them basically eliminate some workarounds with the indexOf() method to achieve the same:
'my string'.startsWith('my'); //true
'my string'.endsWith('my'); // false
'my string'.includes('str'); // true

// create a repeating string
'my '.repeat(3); // 'my my my '