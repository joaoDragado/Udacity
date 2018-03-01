
// Numbers Quiz 
/*assign the arithmetic expression to the foo variable,
and print its value to the console.
Uncomment the 2 lines below to run.
*/
//var foo = 4096 % 12;
//console.log(foo);


// Comparing Numbers Quiz

// var foo = (1 != 0);
// console.log(foo);

/*
 * Programming Quiz: First Expression (2-1)
 *
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

// this expression equals 4, change it to equal 42
//console.log(3*7 + 4*6 - 3);


//String Concatenation

//console.log("hello" + "world");

//console.log("Hello + 5*10");

//console.log("Hello" + 5*10);


//Variables

//var greeting = "Hello";
//console.log(greeting + ' World!')

//----------------------------//

/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
 *
 *     F = C x 1.8 + 32
 *
 * Log the fahrenheit variable to the console.
 *
 */

/*var celsius = 12;
var fahrenheit = celsius*1.8 + 32

console.log(fahrenheit);
*/


// String Indexing

//var name = "James";
//console.log(name[0]);

// var quote = "Stay awhile and listen!";
// console.log(quote[6]);


/*Escaping characters

In JavaScript, you use the backslash "\" to escape other characters.*/


/*Quiz Question

Enter each expression into the console. Check the ones that evaluate to true.
*/

//console.log('green'> 'Green');


/*
 * Programming Quiz: Favorite Food (2-3)
 */

//console.log('Pizza');


/*
 * Programming Quiz: String Equality for All (2-4)
 */

// fix the right side of the expression
/*var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);
*/

/*
 * Programming Quiz: All Tied Up (2-5)
 */

/*var joke = "Why couldn\'t the shoes go out and play?\nThey were all \"tied\" up!"
console.log(joke);
*/

/*
 * Programming Quiz: Yosa Buson (2-6)
 */

/*var haiku = 'Blowing from the west\n' + 'Fallen leaves gather\n' + 'In the east.'
console.log(haiku);
*/


// Null, Undefined, and NaN

/*null refers to the "value of nothing", 
while undefined refers to the "absence of value".
*/

// calculating the square root of a negative number will return NaN
//console.log(Math.sqrt(-10));

// trying to divide a string by 5 will return NaN
//console.log("hello"/5);


// Equality & Strict Equality

//console.log("1" == 1);

//Returns: true

//console.log(0 == false);

//Returns: true

/*Implicit type coercion ~ JavaScript is known as a loosely typed language.*/

// console.log("Hello" % 10);
//Returns: Nan

/*Because of Implicit type coercion, it’s actually considered bad practice to use the == and != operators when comparing values for equality. 

Instead, in JavaScript it’s better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type and value without doing the type conversion first. 

To perform a strict comparison, simply add an additional equals sign = to the end of the == and != operators.
*/

//console.log("1" === 1);

//Returns: true

//console.log(0 !== false);

//Returns: true

// console.log(true>=0);


/*
 * Programming Quiz: Semicolons! (2-8)
 */

/*var thingOne = 'red';
var thingTwo = 'blue';
console.log(thingOne + ' ' + thingTwo);
*/


/*
 * Programming Quiz: Out to Dinner (2-10)
 */

/*var bill = 10.25 + 3.99 + 7.15 ;
var tip = bill * 0.15 ;
var total = bill + tip ;
console.log('$' + total.toFixed(2));
*/


/*
 * Programming Quiz: MadLibs (2-11)
 * 
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

/*var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

var madLib = "The Intro to JavaScript course is "+ adjective1+ ". James and Julia are so "+ adjective2 +". I cannot wait to work through the rest of this "+ adjective3+ " content!"
console.log(madLib);
*/


/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and, using string concatenation 
      and the variables above, create an awesome message.
 * 3. Print the awesomeMessage variable to the console.
 */
 
/*
 * Notes:
 * - Using the above as an example, firstName would have been assigned to
 *   "Julia", interest to "cats", and hobby to "play video games".
 * - Be sure to include spaces and periods where necessary!
 */

/*var firstName = 'Joao' ;
var interest = 'dogs' ;
var hobby = 'play sports' ;

var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + "." ;
console.log(awesomeMessage);
*/
