// Objects


// typeof
/*
typeof is an operator that returns the name of the data type that follows it:

typeof "hello" // returns "string"
typeof true // returns "boolean"
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
typeof function hello() { } // returns "function"

*/

// object example
/*
var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   }
};
typeof umbrella ;
*/

// Quiz: Umbrella (7-1)
/*
var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },
  close: function () {
      if (umbrella.isOpen === true) {
        umbrella.isOpen = false ;
        return 'Julia closes the umbrella!';
      } else {
        return "The umbrella is already closed!";
      }
  } 
};
*/


// Object-literal notation
/*
var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};
*/

/*
// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]
*/


// Quiz: Menu Items (7-2)

/*var breakfast = {
    name: 'The Lumberjack',
    price: '9.95',
    ingredients: ['eggs','sausage','toast','hashbrowns','pancakes']
}
*/


// Quiz: Bank Accounts 1 (7-3)
/*
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function () {
    return 'Welcome!\nYour balance is currently $' + savingsAccount.balance + ' and your interest rate is ' + savingsAccount.interestRatePercent + '%.'
  }
};

console.log(savingsAccount.printAccountSummary());
*/


// Quiz: Facebook Friends (7-5)
/*
var facebookProfile = {
    name: 'Joao',
    friends: 73,
    messages: ['Greetings all!', 'Guess what?'],
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function() {
        facebookProfile.friends += 1;
    },
    removeFriend: function() {
        facebookProfile.friends -= 1;
    }
}
*/


// Quiz: Donuts Revisited (7-6)
/*
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut) {
    console.log(donut.type + ' donuts cost $'+ donut.cost + ' each');
});
*/
