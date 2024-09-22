const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const precedence = [
  {
    name: "Basic Arithmetic Precedence",
    difficulty: "Easy",
    subject: "Precedence",
    description: "This example shows the precedence of addition and multiplication.",
    code: `
      const a = ${getRandomInt(0, 10)};
      const b = ${getRandomInt(0, 10)};
      const result = a + b * 4;
      console.log(result);
    `,
  },
  {
    name: "Parentheses Override",
    difficulty: "Easy",
    subject: "Precedence",
    description: "Using parentheses to change the order of operations.",
    code: `
      const a = ${getRandomInt(0, 10)};
      const b = ${getRandomInt(0, 10)};
      const result = (a + b) * 4;
      console.log(result);
    `,
  },
  {
    name: "Addition with Negation",
    difficulty: "Easy",
    subject: "Precedence",
    description: "Understanding how negation affects addition.",
    code: `
      const a = ${getRandomInt(0, 10)};
      const result = -a + 5;
      console.log(result);
    `,
  },
  {
    name: "Subtraction and Division",
    difficulty: "Easy",
    subject: "Precedence",
    description: "This example illustrates subtraction and division precedence.",
    code: `
      const a = ${getRandomInt(0, 10)};
      const b = ${getRandomInt(1, 10)};
      const result = a - b / 2;
      console.log(result);
    `,
  },
  {
    name: "Logical Operator Precedence",
    difficulty: "Medium",
    subject: "Precedence",
    description: "This example demonstrates the precedence of logical operators.",
    code: `
      const result = true || false && false;
      console.log(result);
    `,
  },
  {
    name: "Comparison and Logical Operators",
    difficulty: "Medium",
    subject: "Precedence",
    description: "Mixing comparison and logical operators to see precedence.",
    code: `
      const result = ${getRandomInt(0, 10)} > ${getRandomInt(0, 10)} && ${getRandomInt(0, 10)} < ${getRandomInt(0, 10)} || 1 === 1;
      console.log(result);
    `,
  },
  {
    name: "Combined Logical Operators",
    difficulty: "Medium",
    subject: "Precedence",
    description: "Combining logical AND and OR with true and false values.",
    code: `
      const result = false && true || true && false;
      console.log(result);
    `,
  },
  {
    name: "Ternary Operator",
    difficulty: "Medium",
    subject: "Precedence",
    description: "Understanding the precedence of the ternary operator.",
    code: `
      const a = ${getRandomInt(0, 10)};
      const result = true ? a + 3 : a * 2;
      console.log(result);
    `,
  },
  {
    name: "Ternary with Math",
    difficulty: "Medium",
    subject: "Precedence",
    description: "Using the ternary operator with more complex math.",
    code: `
      const a = ${getRandomInt(0, 10)};
      const b = ${getRandomInt(0, 10)};
      const result = a > b ? a - b : a + b;
      console.log(result);
    `,
  },
  {
    name: "Bitwise Operators",
    difficulty: "Hard",
    subject: "Precedence",
    description: "Exploring the precedence of bitwise AND and OR.",
    code: `
      const result = ${getRandomInt(0, 10)} & ${getRandomInt(0, 10)} | 1;
      console.log(result);
    `,
  },
  {
    name: "Chain of Operations",
    difficulty: "Hard",
    subject: "Precedence",
    description: "This example illustrates multiple operations with different precedences.",
    code: `
      const result = ${getRandomInt(0, 10)} + ${getRandomInt(0, 10)} * 3 - 4 / 2;
      console.log(result);
    `,
  },
  {
    name: "Assignment and Arithmetic",
    difficulty: "Hard",
    subject: "Precedence",
    description: "Understanding how assignment interacts with arithmetic operations.",
    code: `
      let x = ${getRandomInt(0, 10)};
      const result = x += 5 * 2;
      console.log(result);
    `,
  },
  {
    name: "Complex Bitwise Operations",
    difficulty: "Hard",
    subject: "Precedence",
    description: "Combining multiple bitwise operations.",
    code: `
      const result = (${getRandomInt(0, 10)} | ${getRandomInt(0, 10)}) & ${getRandomInt(0, 10)};
      console.log(result);
    `,
  },
  {
    name: "Nested Parentheses with Different Operators",
    difficulty: "Hard",
    subject: "Precedence",
    description: "Using nested parentheses to control precedence.",
    code: `
      const result = (${getRandomInt(0, 10)} + (${getRandomInt(0, 10)} * ${getRandomInt(1, 5)})) / 2) - 3;
      console.log(result);
    `,
  },
];

export default precedence;
