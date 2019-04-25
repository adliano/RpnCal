let operatorStack = [];
let numbersStack = [];
// idea is compare indexs
let operatos = ["-", "+", "*", "/", "^"];

let haveHigherOp = false;

// Need to be sure user enter everything inside " "
let input = process.argv[2];
// remove any whitespaces on string
input = input.replace(/\s/g, "").split("");

for (let i = 0; i < input.length; i++) {
  // check for numbers
  if (parseFloat(input[i])) {
    // push to the end of stack
    numbersStack.push(input[i]);
  } else if (operatos.indexOf(input[i]) >= 0) {
    if (haveHigherOp) {
      for (let op of operatorStack) {
        numbersStack.push(op);
      }
      operatorStack = [];
    }
    // push to the queue
    operatorStack.unshift(input[i]);
    if (operatos.indexOf(input[i]) > 1) {
      haveHigherOp = true;
    }
  }
}

console.log(numbersStack);

// 3 + (5 * 6) - 3
// push 3 to a
// unshift + to b
// push 5 to a
// unshift *  to b
// push 6 to a
// push b to a and empty b
// unshift  - to b
// push 3 to a
// push b to a
// so we have
// 3 5 6 * + 3 -
// 3 30 + 3 -
// 33 3 -
// 30
