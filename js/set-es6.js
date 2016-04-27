/*
 * Set
 *
 * JavaScript "Set" object is a collection of unique keys. Keys are object references or primitive types.
 * Similar to Map, but not quite the same
 * Set doesn't have keys, there's only values
 * Sets can't have duplicate values because the values are also used as keys
 *
 * References
 * http://qnimate.com/javascript-set-object/
 * http://qnimate.com/difference-between-set-and-weakset-in-javascript/
 * http://stackoverflow.com/questions/30556078/ecmascript-6-what-is-weakset-for
 * http://www.sitepoint.com/preparing-ecmascript-6-set-weakset/
 */


//create a set
var set = new Set();

//add keys to the set
set.add({name: "John"});
set.add(10);
set.add("foo");

//check if a provided key is present
console.log(set.has("foo"));

// get the values of the set
console.log(set.values());
/* output
 * 		0:object
 * 		1:10
 * 		2:"foo"
 */

//loop through the keys in an set
for(var i of set){
    console.log(i);
    /* Output
     * 		Object {name: "John"}
     *		10
     *		foo
     */
}

//delete a key
set.delete("foo");

//create a set from array values
var mySet = new Set([1, 2, 3, 4, 5]); 

//size of set
console.log(mySet.size); //5


/*
 * WeakSet
 *
 * Much like with WeakMap and Map
 * You can only .add, .has, and .delete values from a WeakSet.
 *
 * WeakSet has only three key functionalities: 
 * Weakly link an object into the set
 * Remove a link to an object from the set
 * Check if an object has already been linked to the set
 */

//cannot be created from array
var weakset = new WeakSet();

var obj = {name: 'John'};

// Adds an object to the set
weakset.add(obj);
/*
 * Checks whether the Object {name: 'John Doe'} exists in the weak set. 
 * Prints "false" because, although it has same values and properties, they are different objects
 */
console.log(weakset.has({name: 'John'})); // false
console.log(weakset.has(obj)); // true
console.log(weakset.size);//undefined

//you can’t iterate over WeakSet
//doesn't execute throws error
for(var i of weakset){
    console.log(i);
}

// we can’t use primitive values.
var fooSet = new WeakSet()
fooSet.add(Symbol())
// TypeError: invalid value used in weak set