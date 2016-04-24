/*
 * Modules
 * Module is a completely new feature of ES6
 * A JavaScript module is a file that exports something for other modules to consume. 
 *
 * Modules are just a way of packaging related JavaScript code in its own scope 
 * which can be consumed by other JavaScript programs.
 *
 * Using 'import' and 'export' keyword we can export some functionality for other modules to import
 */

  

/*
* CommonJS
* CommonJS is a non-browser JavaScript specification for creating modules.
* CommonJS is not available for browser JavaScript. Its mostly used in NodeJS.
*
* Now CommonJS features has been introduced in the new javascript(ES6)
*/


/*
 * Export a module
 *
 * Consider the following folder stucture for your projects

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
