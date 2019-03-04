function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

sum(1, 2, 3, 4);
sum(1);

function sum(a, b, ...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

let numbers = [1, 2, 3, 4, 5];
sum(...numbers);

function Person(age, height) {
  this.age = age;
  this.height = height;
  this.print = () => {
    return `Age: ${this.age} and Height:${this.height}`;
  };
}
