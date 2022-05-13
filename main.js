let variable = 12; // this is an assignment

let myVariable = true;
if (myVariable === true) {
    console.log('The condition has been evaluated to true');
}

let a = 7;
if (a < 5) {
    console.log(a / 2);
} else {
    console.log(a * 2);
}

/*Questions:

What will be printed if we run the previous code snippet?: 
14

What should be changed to get 1 printed to the console?: 
console.log(a/a); 

*/

console.log('Create a loop which prints the numbers from 0-9.');

for (let i = 0; i < 10; i++) {
    console.log(i);
};

console.log('Change the previous loop to print the numbers from 1 to 10.');

for (let j = 1; j < 11; j++) {
    console.log(j);
};

console.log('Print the even numbers between 0 and 20.');

for (let x = 1; x < 20; x += 2) {
    console.log(x);
}

console.log('Use your previous for loops and create a function which print the first N numbers.');

function printNumbersTill(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    };    
};

console.log(printNumbersTill(15));
console.log(printNumbersTill(20));

console.log('Create a function which gets a name as parameter and then returns a greeting to the specified person.');

const greet = (name) => {
    console.log('Hello: ' + name);
}

console.log(greet('Marwin'));

console.log('Create a function which gets an array as parameter and prints each value from it.');

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

  console.log('Change your previous printValues function to use forEach loop.');

  let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  array.forEach((number) => {
      console.log(number);
  });
  