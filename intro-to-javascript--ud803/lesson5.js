/*// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

// function returns "Hello!" and console.log prints the return value
console.log(sayHello());
*/


// Quiz: Laugh it Off 1 (5-1)

/*function laugh() {
    var message = 'hahahahahahahahahaha!';
    return message ;
}
console.log(laugh());
*/


//Quiz: Laugh it Off 2 (5-2)

/*
function laugh(num) {
    var message = 'ha!';
    for (var i = 1; i < num; i++) {
        message = 'ha' + message ;
    }
    return message ;
}
console.log(laugh(2));
*/


// 

/*function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);
*/

// Hoisting

/*sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}
*/


// Quiz: Build a Triangle (5-3)

/*function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(length) {
    var triangle = '';
    for (var i = 1 ; i <= length ; i++) {
        triangle += makeLine(i); 
    }
    return triangle ;
}

console.log(buildTriangle(10));
*/


// Function Expressions

/*var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
*/

/*
Unlike  function declarations which are hoisted and loaded before the script is actually run, 
Function expressions are not hoisted, since they involve variable assignment, and only variable declarations are hoisted. 
The function expression will not be loaded until the interpreter reaches it in the script.
*/


// Callbacks

/*// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));
*/


// Inline function expressions

/*
// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");
*/


// Inline function declaration

/*
// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
*/ 


// Quiz: Laugh (5-4)
/*
 var laugh = function (num) {
    var exp = '';
    for (var i = 0; i < num; i++) {
        exp += 'ha' 
    }
    exp +='!'
    return exp
}

console.log(laugh(10));
*/


// Quiz: Cry (5-5)

/*
var cry = function boohoo() {
    return 'boohoo!' ;
}

console.log(cry());
*/


// Quiz: Inline (5-6)

/*function emotions(myString, myFunc) {
    console.log('I am ' + myString + ', ' + myFunc(2));
}


emotions("happy", function laugh(num) {
    var exp = '';
    for (var i = 0; i < num; i++) {
        exp += 'ha' 
    }
    exp +='!'
    return exp
});
*/
