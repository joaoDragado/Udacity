// Intro to Arrays

/*
// creates a `donuts` array with three strings
var donuts = ["glazed", "powdered", "jelly"];

// creates a `mixedData` array with mixed data types
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];

// creates a `arraysInArrays` array with three arrays

var arraysInArrays = [
  [1, 2, 3], 
  ["Julia", "James"], 
  [true, false, true, false]
];
*/

// Indexing
/*
var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array
*/


// Quiz: UdaciFamily (6-1)
/*
var udaciFamily = ["Julia", "James", "Joao"];
console.log(udaciFamily);
*/


// Array Properties and Methods


//Length
/*var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);
*/

//Push
/*var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
donuts.push("powdered"); // the `push()` method returns 7 because the `donuts` array now has 7 elements
*/

//Pop
/*var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];

donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array
*/

//Splice

/*
splice() is another handy method that allows you to add and remove elements from anywhere within an array.

The 1st argument represents the starting index from where you want to change the array, 
the 2nd argument represents the numbers of elements you want to remove, and 
the remaining arguments represent the elements you want to add.
*/

/*var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
*/


// Quiz: Quidditch Cup (6-5)
/*
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(list) {
    return list.length >= 7 ? true : false ;
}

console.log(hasEnoughPlayers(team));
*/


// Quiz: Joining the Crew (6-6)
/*
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];


var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor, sister, shepherd);
*/


/*
var reverseMe = ["h", "e", "l", "l", "o"];
reverseMe.reverse();*/

/*var sortMe = [2, 1, 10, 7, 6];

//console.log(sortMe.sort()); // returns [ 1, 10, 2, 6, 7 ]

console.log(sortMe.sort(function compareNumbers(a, b) {
  return a - b;
})); // sane output
*/

/*
var removeFirstElement = ["a", "b", "c"];
removeFirstElement.shift();
*/

/*
var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
turnMeIntoAString.join('');
*/


//The forEach Loop

/*var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
*/

// Quiz: Another Type of Loop (6-8)

/*var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach( function(num, index) {
     if (num % 3 === 0) {
        test[index] = num + 100; 
    }
    //console.log(num);
});
console.log(test);
*/


// Map

/*var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

*/

// Quiz: I Got Bills (6-9)
/*
var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function(elem) {
    return Number((elem*1.15).toFixed(2)) ;
})

console.log(totals);
*/


// 2D Arrays - tables
/*
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}
*/


// Quiz: Nested Numbers (6-10)
/*
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];


for (var row = 0; row < numbers.length; row++) {
  for (var column = 0; column < numbers[row].length; column++) {
    numbers[row][column] = ((numbers[row][column] % 2) === 0) ? 'even' : 'odd' ;
  }
}

console.log(numbers);
*/
