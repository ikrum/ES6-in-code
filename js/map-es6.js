/*
 * Map
 *
 * Map is a key/value data structure in ES6. It provides a better data structure to be used for hash-maps.
 *
 * References
 * https://ponyfoo.com/articles/es6-maps-in-depth
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

// Create a map object
var map = new Map();
// Use map.set(key, value) to add entries
map.set('max_size', 20);
map.set('max_speed', 150);
map.set('model', "Primo X3");
map.set('info', { description: 'a long description of the model.', specifications: [] });

/* number of key/value pairs in the Map object. */
console.log(map.size); // Output 	4

/* get the value associated to the key */
console.log(map.get('max_speed')); // output 	150

/* update/override the existing key/value */
map.set('max_speed', 220);
console.log(map.get('max_speed')); // output 	220

/* Delete key */
map.set('max_speed');
console.log(map.get('max_speed')); // output 	undefined

/* check if the key exists */
console.log(map.has("unknown_key")); // output false

/*
 * A Map object iterates its elements in insertion order 
 * a for...of loop returns an array of [key, value] for each iteration.
 */
for(let item of map){
	console.log(item);

	/*  Output
		["max_size", 20]
		["max_speed", undefined]
		["model", "Primo X3"]
		["info", Object]
	*/
}


/*
 * Diffecence between Map and array
 *
 * One of the important differences is also that you’re able to use anything for the keys. 
 * You’re not just limited to primitive values like symbols, numbers, or strings,
 * but you can even use functions, objects and dates – too. 
 * Keys won’t be casted to strings like with regular objects, either.
 */

var myMap = new Map()
myMap.set(new Date(), function today () {});
myMap.set(() => 'key', { pony: 'foo' });
myMap.set(Symbol('items'), [1, 2]);



/*
 * WeakMap
 * "WeakMaps" provides leak-free object-key’d side tables.
 * "Map" references are strong pointer whereas "WeakMap" references are weak pointers.
 */

let weakmap = new WeakMap();
let foo = { foo: 'bar' };
weakmap.set(foo, 10);
console.log(weakmap.get(foo)); // bar
foo = {foo: 'new_value'};
console.log(weakmap.get(foo)); // undefined


// “WeakMap” keys cannot be primitive types
weakmap.set(10, 55); //throws invalid type error