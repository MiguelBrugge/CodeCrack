const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const hoisting = [
  {
    name: "Variable Hoisting",
    difficulty: "Easy",
    subject: "Hoisting",
    description: "This snippet demonstrates variable hoisting in JavaScript, where the declaration is moved to the top of the scope. The variable's value is logged before it is defined.",
    code: `
      console.log(variable);
      var variable = ${getRandomInt(0, 10)};
    `,
  },
  {
    name: "Function Hoisting",
    difficulty: "Easy",
    subject: "Hoisting",
    description: "Here, the function declaration is hoisted, allowing it to be called before its definition. This illustrates how function hoisting works in JavaScript.",
    code: `
      printNumber(${getRandomInt(0, 10)});

      function printNumber(number){
        console.log(number);
      }
    `,
  },
  {
    name: "Arrow Function Hoisting",
    difficulty: "Easy",
    subject: "Hoisting",
    description: "In this example, an arrow function is declared after its call, leading to an error. This shows that arrow functions are not hoisted like regular function declarations.",
    code: `
      try {
        printNumber(${getRandomInt(0, 10)});
      } catch{}

      const printNumber = number => {
        console.log(number);
      }

      printNumber(${getRandomInt(0, 10)});
    `,
  },
  {
    name: "Catch the var",
    difficulty: "Medium",
    subject: "Hoisting",
    description: "This snippet illustrates a case where a variable is declared after its usage within a function. The 'catch' block reveals the hoisting behavior of the 'var' keyword.",
    code: `
      testFunction();

      function testFunction() {
        try {
          console.log('y:', y); 
        } catch (e) {
          var y = ${getRandomInt(0, 10)};
          console.log('catch'); 
        }
      }
    `,
  },
  {
    name: "Function Expression Hoisting",
    difficulty: "Medium",
    subject: "Hoisting",
    description: "This example demonstrates that function expressions are not hoisted. Calling the function before its definition results in an error.",
    code: `
      try {
        hoistedFunc();
      } catch {}

      var hoistedFunc = function() {
        console.log("Function expression not hoisted");
      };
    `,
  },
  {
    name: "Temporal Dead Zone with Let",
    difficulty: "Medium",
    subject: "Hoisting",
    description: "This snippet shows the temporal dead zone behavior of 'let'. Trying to access 'myLet' before its declaration leads to a reference error.",
    code: `
      try {
        console.log(myVar);
        console.log(myLet);
      } catch {}

      var myVar = ${getRandomInt(0, 10)};
      let myLet = ${getRandomInt(0, 10)};
    `,
  },
  {
    name: "Class Declaration Hoisting",
    difficulty: "Hard",
    subject: "Hoisting",
    description: "This example illustrates that class declarations are not hoisted. Trying to instantiate a class before its declaration results in an error.",
    code: `
      try {
        const instance = new MyClass();
      } catch {}

      class MyClass {
        constructor() {
          console.log("Instance created");
        }
      }
    `,
  },
  {
    name: "Hoisting with Function Re-Assignment",
    difficulty: "Hard",
    subject: "Hoisting",
    description: "This snippet demonstrates the impact of hoisting when re-assigning a function. The original function can be called before it's reassigned.",
    code: `
      hoistMe();
      
      function hoistMe() {
        console.log("Original function");
      }

      var hoistMe = function() {
        console.log("Reassigned function");
      };
    `,
  },
  {
    name: "Let Hoisting in Block Scope",
    difficulty: "Hard",
    subject: "Hoisting",
    description: "This example shows how 'let' declarations are block-scoped and cannot be accessed before their declaration. Accessing 'myLet' leads to a reference error.",
    code: `
      try {
        console.log(myLet);
      } catch {}

      let myLet = ${getRandomInt(0, 10)};
      console.log(myLet);
    `,
  }
];

export default hoisting;
