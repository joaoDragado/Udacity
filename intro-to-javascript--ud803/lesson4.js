// Loops


// While loops
/*
var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}*/

 /*var x = 1;

while (x <= 20) {
    if (((x % 3) === 0) && ((x % 5) === 0)) {
        console.log('JuliaJames');
    } 
    else if ((x % 5) === 0) {
        console.log('James');
    }
    else if ((x % 3) === 0) {
        console.log('Julia');
     }
     else {
        console.log(x);
    }
    x = x + 1
 }   
*/


 /*var num = 99;

while (num > 1) {
     console.log(num + ' bottles of juice on the wall! ' + num + '  bottles of juice! Take one down, pass it around... ' + (num - 1) + ((num -1 !== 1) ? ' bottles' : ' bottle') + ' of juice on the wall!');
     num -= 1;
}
console.log('1 bottle of juice on the wall! 1  bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!');
*/


/*var count = 60;
while (count > -1) {
    if (count === 50) {
        console.log('Orbiter transfers from ground to internal power');
    }
    else if (count === 31) {
        console.log('Ground launch sequencer is go for auto sequence start');
    }
    else if (count === 16) {
        console.log('Activate launch pad sound suppression system');
    }
    else if (count === 10) {
        console.log('Activate main engine hydrogen burnoff system');
    }
    else if (count === 6) {
        console.log('Main engine start');
    }
    else if (count === 0) {
        console.log('Solid rocket booster ignition and liftoff!');
    } 
    else  {
        console.log('T-minus '+ count + ' seconds');
    }
    count -= 1;
}
*/


// for loops
/*
for ( start; stop; step ) {
  // do this thing
}


// example
for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}
*/

//Quiz: Changing the Loop (4-4)

/*for (var x = 9; x >= 1 ; x--) {
    console.log('hello ' + x);
    }
*/

// Quiz: Fix the Error 1 (4-5)

/*for (var x = 5; x < 10; x++) {
  console.log(x);
}
*/

// Quiz: Factorials! (4-7)
/*
var solution = 1;
for (var i = 1; i <= 12; i++) {
    solution *= i
}
console.log(solution);
//console.log(12*11*10*9*8*7*6*5*4*3*2);
*/


// Quiz: Find my Seat (4-8)

/*for (var i = 0 ;  i <= 25 ; i++) {
    for (var j = 0; j < 100; j++) {
        console.log(i+'-'+j);
    }
}
*/
