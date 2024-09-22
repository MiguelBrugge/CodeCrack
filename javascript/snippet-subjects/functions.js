const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const functions = [
    {
      name: "Basic Function Declaration",
      difficulty: "Easy",
      subject: "Functions",
      description: "Demonstrating a basic function declaration and invocation.",
      code: `
        function add(a, b) {
          return a + b;
        }
        console.log(add(${getRandomInt(0, 10)}, ${getRandomInt(0, 10)}));
      `,
    },
    {
      name: "Anonymous Function Expression",
      difficulty: "Easy",
      subject: "Functions",
      description: "Using an anonymous function to perform subtraction.",
      code: `
        const subtract = function(a, b) {
          return a - b;
        };
        console.log(subtract(${getRandomInt(0, 10)}, ${getRandomInt(0, 10)}));
      `,
    },
    {
      name: "Arrow Function Basics",
      difficulty: "Easy",
      subject: "Functions",
      description: "An introduction to arrow functions with multiplication.",
      code: `
        const multiply = (a, b) => a * b;
        console.log(multiply(${getRandomInt(0, 10)}, ${getRandomInt(0, 10)}));
      `,
    },
    {
      name: "Function Returning a Function",
      difficulty: "Medium",
      subject: "Functions",
      description: "A function that returns another function for division.",
      code: `
        function createDivider(divisor) {
          return function(num) {
            return num / divisor;
          };
        }
        const divideByTwo = createDivider(2);
        console.log(divideByTwo(${getRandomInt(1, 20)}));
      `,
    },
    {
      name: "Default Function Parameters",
      difficulty: "Medium",
      subject: "Functions",
      description: "Using default parameters in a function to add.",
      code: `
        function add(a, b = 5) {
          return a + b;
        }
        console.log(add(${getRandomInt(0, 10)}));
      `,
    },
    {
      name: "IIFE (Immediately Invoked Function Expression)",
      difficulty: "Medium",
      subject: "Functions",
      description: "Using an IIFE to calculate the square of a number.",
      code: `
        const result = (function(num) {
          return num * num;
        })(${getRandomInt(0, 10)});
        console.log(result);
      `,
    },
    {
      name: "Higher-Order Function",
      difficulty: "Hard",
      subject: "Functions",
      description: "A higher-order function that applies a given operation.",
      code: `
        function operate(a, b, operation) {
          return operation(a, b);
        }
        console.log(operate(${getRandomInt(1, 10)}, ${getRandomInt(1, 10)}, (x, y) => x ** y));
      `,
    },
    {
      name: "Function with Rest Parameters",
      difficulty: "Hard",
      subject: "Functions",
      description: "Using rest parameters to sum multiple values.",
      code: `
        function sum(...args) {
          return args.reduce((acc, curr) => acc + curr, 0);
        }
        console.log(sum(${getRandomInt(1, 10)}, ${getRandomInt(1, 10)}, ${getRandomInt(1, 10)}));
      `,
    },
    {
      name: "Closure Example",
      difficulty: "Hard",
      subject: "Functions",
      description: "A closure that maintains state between calls.",
      code: `
        function counter() {
          let count = 0;
          return function() {
            count++;
            return count;
          };
        }
        const increment = counter();
        console.log(increment());
      `,
    },
    {
      name: "Function Binding",
      difficulty: "Hard",
      subject: "Functions",
      description: "Using `bind` to create a new function with a preset parameter.",
      code: `
        function greet(greeting, name) {
          return \`\${greeting}, \${name}!\`;
        }
        const greetHello = greet.bind(null, 'Hello');
        console.log(greetHello('Alice'));
      `,
    },
  ];
  
  export default functions;
  