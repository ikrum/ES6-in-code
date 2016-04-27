/*
 * Binary and Octal Literals
 *
 * Two new numeric literal forms are added for binary (b) and octal (o).
 * So in ES6 its more easier to identify binary and octal numbers.
 */

// "0b" lets you create a number using binary of the number directly.
var a = 0b11011101;
console.log(a); //221 
console.log(0b111110111 === 503) // true

// "0o" is a new way of creating a number using octal value in ES6. 
var b = 0o12;
console.log(b); //10
console.log(0o767 === 503); // true