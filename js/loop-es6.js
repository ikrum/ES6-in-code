
//Iterating over an Array
(function(){
	let myArray = [1, 2, 3];
	for (let value of myArray) {
	  console.log(value);
	  // 1
		// 2
		// 3
	}
})();


// Iterating over a String
(function(){
	let myString = "abc";
	for (let value of myString) {
	  console.log(value);
	}
	// "a"
	// "b"
	// "c
})();


/*
 * Difference between for...of and for...in
 *
 * for..of takes the value from the iteretor and for..in takes the index
 * When you need only the item for the iterator you can use for..of lopp
 * If index or key is required then you could use regular for loop or for..in loop
 */

// when index is required, or you want to use object like associative array
(function(){
	var opts = {
		size: 20,
		flag: "OK"
	};
	for (let key in opts){
		// index is required
		if(key == "size"){
			// do something with key
		}

		// use like associative array
		console.log( opts[key] );
	}
})();

// when index is not required, we just need the value
(function(){
	var foo = ["a","b", "c"];
	for(let item of foo){
		console.log(item);
		//a
		//b
		//c
	}
})();
  