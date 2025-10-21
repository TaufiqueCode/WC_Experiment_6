const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Simple Node.js Calculator");
console.log("Choose operation: +, -, *, /");

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Enter operation: ", (op) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      switch (op) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = b !== 0 ? a / b : "Cannot divide by zero";
          break;
        default:
          result = "Invalid operation";
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});