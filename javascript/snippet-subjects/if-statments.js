const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const ifStatements = [
    {
        name: "Basic Condition",
        difficulty: "Easy",
        subject: "If Statements",
        description: "This snippet checks if a random number is greater than 5.",
        code: `
    const number = ${getRandomInt(0, 10)};
    if (number > 5) {
        console.log(\`The number \${number} is greater than 5.\`);
    }
    console.log(0);
    `
    },
    {
        name: "Even or Odd",
        difficulty: "Easy",
        subject: "If Statements",
        description: "This snippet determines if a random number is even or odd.",
        code: `
    const number = ${getRandomInt(0, 10)};
    if (number % 2 === 0) {
        console.log(\`The number \${number} is even.\`);
    } else {
        console.log(\`The number \${number} is odd.\`);
    }
    `
    },
    {
        name: "Range Check",
        difficulty: "Easy",
        subject: "If Statements",
        description: "This snippet checks if a random number falls within a certain range.",
        code: `
    const number = ${getRandomInt(0, 10)};
    if (number >= 3 && number <= 7) {
        console.log(\`The number \${number} is between 3 and 7.\`);
    }
    console.log(0);
    `
    },
    {
        name: "String Comparison",
        difficulty: "Easy",
        subject: "If Statements",
        description: "This snippet compares a random number to see if it matches a string value.",
        code: `
    const number = ${getRandomInt(0, 10)};
    if (number.toString() === '5') {
        console.log(\`The number is exactly '5'.\`);
    }
    console.log(0);
    `
    },
    {
        name: "Falsy Value Check",
        difficulty: "Easy",
        subject: "If Statements",
        description: "This snippet checks if a value is falsy (e.g., 0).",
        code: `
    const value = ${getRandomInt(0, 10)};
    if (!value) {
        console.log(\`The value is falsy.\`);
    }
    console.log(0);
    `
    },
    {
        name: "Nested Conditions",
        difficulty: "Medium",
        subject: "If Statements",
        description: "This snippet evaluates multiple nested if statements based on random numbers.",
        code: `
    const a = ${getRandomInt(0, 10)};
    const b = ${getRandomInt(0, 10)};
    if (a > 5) {
        if (b > 5) {
            console.log(\`Both \${a} and \${b} are greater than 5.\`);
        }
        console.log(1);
    }
    console.log(0);
    `
    },
    {
        name: "Ternary Operator",
        difficulty: "Medium",
        subject: "If Statements",
        description: "This snippet uses the ternary operator to decide between two outcomes.",
        code: `
    const number = ${getRandomInt(0, 10)};
    console.log(\`The number is \${number > 5 ? 'greater than 5' : 'less than or equal to 5'}.\`);
    `
    },
    {
        name: "Else If Chain",
        difficulty: "Medium",
        subject: "If Statements",
        description: "This snippet uses an if-else if chain to check for multiple conditions.",
        code: `
    const number = ${getRandomInt(0, 10)};
    if (number > 7) {
        console.log(\`The number \${number} is greater than 7.\`);
    } else if (number > 4) {
        console.log(\`The number \${number} is greater than 4.\`);
    } else {
        console.log(\`The number \${number} is 4 or less.\`);
    }
    `
    },
    {
        name: "Short-Circuiting",
        difficulty: "Medium",
        subject: "If Statements",
        description: "This snippet demonstrates logical short-circuit evaluation with `&&`.",
        code: `
    const a = ${getRandomInt(0, 10)};
    const b = ${getRandomInt(0, 10)};
    a > 5 && b > 5 && console.log(\`Both \${a} and \${b} are greater than 5.\`);
    `
    },
    {
        name: "Multiple Conditions",
        difficulty: "Medium",
        subject: "If Statements",
        description: "This snippet evaluates multiple conditions using `||`.",
        code: `
    const x = ${getRandomInt(0, 10)};
    if (x === 3 || x === 7) {
        console.log(\`\${x} is either 3 or 7.\`);
    }
    console.log("0");
    `
    },
    {
        name: "Advanced Ternary Operator",
        difficulty: "Hard",
        subject: "If Statements",
        description: "This snippet uses a more complex ternary operator with multiple conditions.",
        code: `
    const num = ${getRandomInt(0, 10)};
    console.log(
        num > 8 ? 'High' :
        num > 5 ? 'Medium' : 
        num > 2 ? 'Low' : 'Very Low'
    );
    `
    },
    {
        name: "Switching Conditions",
        difficulty: "Hard",
        subject: "If Statements",
        description: "This snippet mimics a switch statement using if-else if constructs.",
        code: `
    const x = ${getRandomInt(0, 10)};
    if (x === 1) {
        console.log("One");
    } else if (x === 2) {
        console.log("Two");
    } else if (x === 3) {
        console.log("Three");
    } else {
        console.log("Other");
    }
    `
    },
    {
        name: "Complex Logical Conditions",
        difficulty: "Hard",
        subject: "If Statements",
        description: "This snippet evaluates multiple complex conditions with logical operators.",
        code: `
    const a = ${getRandomInt(0, 10)};
    const b = ${getRandomInt(0, 10)};
    if ((a > 3 && b < 7) || a === b) {
        console.log(\`\${a} and \${b} meet the condition.\`);
    }
    console.log(0);
    `
    },
    {
        name: "Nested Ternary Operator",
        difficulty: "Hard",
        subject: "If Statements",
        description: "This snippet uses a nested ternary operator for complex logic.",
        code: `
    const num = ${getRandomInt(0, 10)};
    console.log(
    num % 2 === 0 
        ? (num > 5 ? '>= 5' : '<= 5') 
        : 'Odd'
    );
    `
    },
    {
        name: "Deep Nesting with Short-Circuit",
        difficulty: "Hard",
        subject: "If Statements",
        description: "This snippet combines deep nesting and short-circuit evaluation.",
        code: `
      const a = ${getRandomInt(0, 10)};
      const b = ${getRandomInt(0, 10)};
      const c = ${getRandomInt(0, 10)};
      a > 5 && (b > 5 || c > 5) && console.log(\`\${a}, \${b}, and \${c} meet the complex condition.\`);
    `
    },
    {
        name: "Negation of p",
        difficulty: "Medium",
        subject: "If Statements",
        description: "This snippet checks if `p` is false using logical negation.",
        code: `
    const p = ${getRandomInt(0, 1)};
    if (!p) {
        console.log(1);
    }
    console.log(0);
    `
    },
    {
        name: "p OR NOT q",
        difficulty: "Medium",
        subject: "If Statements",
        description: "This snippet checks if `p` is true or `q` is false.",
        code: `
    const p = ${getRandomInt(0, 1)};
    const q = ${getRandomInt(0, 1)};
    if (p || !q) {
        console.log(1);
    }
    console.log(0);
    `
    },
    {
        name: "(p AND q) OR NOT q",
        difficulty: "Medium",
        subject: "If Statements",
        description: "This snippet checks if both `p` and `q` are true or `q` is false.",
        code: `
    const p = ${getRandomInt(0, 1)};
    const q = ${getRandomInt(0, 1)};
    if ((p && q) || !q) {
        console.log(1);
    }
    console.log(0);
    `
    },
    {
        name: "(p OR q) AND (q AND r)",
        difficulty: "Hard",
        subject: "If Statements",
        description: "This snippet checks if either `p` or `q` is true, and both `q` and `r` are true.",
        code: `
    const p = ${getRandomInt(0, 1)};
    const q = ${getRandomInt(0, 1)};
    const r = ${getRandomInt(0, 1)};
    if ((p || q) && (q && r)) {
        console.log(1);
    }
    console.log(0);
    `
    },
    {
        name: "(p OR q) AND NOT r",
        difficulty: "Hard",
        subject: "If Statements",
        description: "This snippet checks if either `p` or `q` is true, and `r` is false.",
        code: `
    const p = ${getRandomInt(0, 1)};
    const q = ${getRandomInt(0, 1)};
    const r = ${getRandomInt(0, 1)};
    if ((p || q) && !r) {
        console.log(1);
    }
    console.log(0);
    `
    },
    {
        name: "NOT[(p OR q) AND q]",
        difficulty: "Hard",
        subject: "If Statements",
        description: "This snippet negates the condition where either `p` or `q` is true, and `q` is true.",
        code: `
    const p = ${getRandomInt(0, 1)};
    const q = ${getRandomInt(0, 1)};
    if (!((p || q) && q)) {
        console.log(1);
    }
    console.log(0);
    `
    }
];

export default ifStatements;
