// Groups
/*
class Group {
  constructor() {
    this.data = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.data.push(value);
    }
  }
  delete(value) {
    if (this.has(value)) {
      this.data.splice(this.data.indexOf(value),1);
    }
  }
  has(value) {
    return this.data.includes(value);
  }
  static from(iter) {
    let obj = new Group();
    for (let val of iter) {
      obj.add(val);
    }
    return obj;
  }
}
*/

/*
let test = new Group();
test.add(5);
test.add(12);
test.add(7);
test.add(5);
test.add(25);
test.delete(7);
console.log(test);
console.log(test.has(5));
//
let test = Group.from([2,4,6]);
console.log(test);
*/


// Iteratable Group using generator

class Group {
  constructor() {
    this.data = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.data.push(value);
    }
  }
  delete(value) {
    if (this.has(value)) {
      this.data.splice(this.data.indexOf(value),1);
    }
  }
  has(value) {
    return this.data.includes(value);
  }
  static from(iter) {
    let obj = new Group();
    for (let val of iter) {
      obj.add(val);
    }
    return obj;
  }
  
  [Symbol.iterator]() {
    var index = -1;
    var data  = this.data;

    return {
      next: () => ({ value: data[++index], done: !(index in data) })
    };
  };
}



let test = Group.from([2,4,6]);

for (let i of test) {
  console.log(i);
}

