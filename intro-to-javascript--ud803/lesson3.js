// if-else statement
/* var price = 15.00 ; 
 var money = 20.00 ;

 if (money >= price) {
    console.log('buy the hammer');
 } else {
    console.log('never mind.');
 }
*/


// else-if statements

/*var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}
*/


/*var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}
*/


/*var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");
*/


/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
/*var number = 2;

if (number % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}
*/


/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
/*var musicians = 0;

if (musicians === 1) {
    console.log('solo');
} 
else if (musicians === 2) {
    console.log('duo');
}
else if (musicians === 3) {
    console.log('trio');
}
else if (musicians === 4) {
    console.log('quartet');
}
else if (musicians > 4) {
    console.log('this is a large group');
}
else {
    console.log('not a group');   
}
*/


/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code

/*var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === 'ballroom' && suspect === 'Mr. Kalehoff') {
    weapon = 'poison';
    solved = true;
} 
else if (room === 'gallery' && suspect === 'Ms. Van Cleve') {
    weapon = 'trophy';
    solved = true;
} 
else if (room === 'biliards room' && suspect === 'Mrs. Sparr') {
weapon = 'pool stick';
solved = true;
} 
else if  (room === 'dining room' && suspect === 'Mr. Parkes'){
weapon = 'knife';
solved = true;
}
if (solved) {
    console.log(suspect + ' did it in the ' + room +' with the ' + weapon + ' !');
}
*/


/*
Truth tables for logical AND ( && ) and logical OR ( || ).

    && (AND)
A   B   A && B
true    true    true
true    false   false
false   true    false
false   false   false

    || (OR)
A   B   A || B
true    true    true
true    false   true
false   true    true
false   false   false
*/


/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code

/*var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log('Your balance is $' + balance.toFixed(2) + '.');
  } 
  else if (!isActive) {
    console.log('Your account is no longer active.');
  }
  else if (balance === 0) {
   console.log('Your account is empty.'); 
  } 
  else {
    console.log('Your balance is negative.\nPlease contact bank.'); 
  } 
} else {
    console.log('Thank you. Have a nice day!');
}
*/


/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
/*var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

if ((flavor === "vanilla" || flavor ===  "chocolate") &&
(vessel === "cone" || vessel ===  "bowl") &&
(toppings === "sprinkles" || toppings === "peanuts")) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a "+ vessel + " with " + toppings + ".")
}
*/

/*
Truthy and Falsy

list of all of the falsy values:

    the Boolean value false
    the null type
    the undefined type
    the number 0
    the empty string ""
    the odd value NaN

Everything evaluates to true.

*/

/*
if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
*/


/*
Ternary operator

The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.

conditional ? (if condition is true) : (if condition is false)
*/

/*var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);
*/

/*var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "the gate") + ".");
*/

/*
 var eatsPlants =  true;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? 'omnivore' : 'herbivore') : (eatsAnimals ? 'carnivore' : undefined)

console.log(category);
*/

/*
Switch statement

A switch statement is an another way to chain multiple else if statements that are based on the same value without using conditional statements. Instead, you just switch which piece of code is executed based on a value.


Break statement

The break statement can be used to terminate a switch statement and transfer control to the code following the terminated statement. By adding a break to each case clause, you fix the issue of the switch statement falling-through to other case clauses.

var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
} 
*/


