/*
 * Modules
 * Module is a completely new feature of ES6
 * A JavaScript module is a file that exports something for other modules to consume. 
 *
 * Modules are just a way of packaging related JavaScript code in its own scope 
 * which can be consumed by other JavaScript programs.
 * Using 'import' and 'export' keyword we can export some functionality for other modules to import
 * 
 * 
 * CommonJS
 * CommonJS is a non-browser JavaScript specification for creating modules.
 * CommonJS is not available for browser JavaScript. It's mostly used in NodeJS.
 * Now CommonJS features has been introduced in the new javascript(ES6)
 *
 *
 * References:
 * https://strongloop.com/strongblog/an-introduction-to-javascript-es6-modules/
 * https://github.com/lukehoban/es6features
 */


/*
 * Default Exports
 * Every module can have one, and only one default export 
 * Default export can be imported without specifying variable name. 
 */

 // hello-world.js
export default function() {}
 
// main.js
import helloWorld from './hello-world';
helloWorld();




/*
 * Default Exports
 * A module can have any number of named exports of any type.
 * You need to specify name of the variable you wish to export and use the same name to import it
 */


 // math.js
const PI = 3.14;
const value = 42;
export {PI, value};
/* You can also change the export name without renaming the original variable */
export {value as THE_ANSWER};


/*
 * Import
 * use  * to import all exports of the module
 * Don't need to use file extension( *.js), just specify the path in require()
 * 
 */

// single import
import PI from './math';

// Multiple import
import {PI, value} from './math';
console.log(PI, value); // Output: 3.14     42

// Import all
import * as iMath from './math';
console.log(iMath.PI);
console.log(iMath.value);
console.log(iMath.THE_ANSWER);


/*
 * Imported Variables Are Read-only
 *
 *
 * No matter what kind of declaration is being exported from a module, 
 * imported variables are always read-only.
 * You can, however, change an imported object's properties.
 */


// module.js
export let count = 0;
export const table = {foo: 'bar'};
 
// main.js
import {count, table} from './module';
 
table.foo = 'Bar'; // OK
count++; // read-only error



/*
 * A bigger example
 *
 * Consider the following folder structure for your projects

	Project:
		controllers/
			- userController.js
			- authenticate.js

		utils/
			- tokenizer.js

		main.js
*/

// tokenizer.js
	export function generateToken(){ // exporting tokenizer function
		return Math.random().toString(36).substring(7);
	}


// controllers/authController.js
	var tokenizer = require('../utils/tokenizer'); // importing tokenizer module

	export default function(username, password){
		/* do something with username and password*/
		return tokenizer.generateToken(); // calling generateToken of tokenizer.js
	}

// main.js
	var authenticate = require('./controllers/authenticate'); // importing authenticate module
	console.log( authenticate("myUserName", "myPassword") );  // Output: A random token for authentication



