/*
 * Promises
 *
 * Promises are a library for asynchronous programming. 
 * A Promise represents an operation that hasn't completed yet, but is expected in the future.
 * Promises are used in many existing JavaScript libraries.
 *
 * Syntax
 * new Promise(function(resolve, reject) { ... });
 *
 * References
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * https://github.com/lukehoban/es6features
 */


/*
 * States of a promise
 *
 * pending: initial state, not fulfilled or rejected.
 * fulfilled: meaning that the operation completed successfully.
 * rejected: meaning that the operation failed.
 */

 var fetchData = function(userid){
 	return new Promise(function(resolve, reject){
 		// async task
 		setTimeout(function(){
 			if(userid == 1)
 				resolve({message: "Data successfully returned"});
 			else
 				reject({error: "Document not found", status: 404})
 		}, 100);
 	});
 }

 fetchData(1).then(function(data){
 	console.log(data); // {message: "Data successfully returned"}
 });

 fetchData("invalid text").then(function(data){
 	console.log(data); // won't execute
 }).catch(function(err){
 	console.log(err); // {error: "Document not found", status: 404}
 });


