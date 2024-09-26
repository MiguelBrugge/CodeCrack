const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const ifStatements = [
  {
    name: "Check Greater Than 5",
    difficulty: "Easy",
    subject: "If Statements",
    description: "This snippet checks if a random number is greater than 5.",
    code: `
    const number = ${getRandomInt(1, 10)};

    if (number > 5) {
        console.log(1);
    } else if (number === 5) {
        console.log(2);
    } else {
        console.log(3);
    }
    `
  },
  {
    name: "Determine Even or Odd",
    difficulty: "Easy",
    subject: "If Statements",
    description: "This snippet determines if a random number is even or odd.",
    code: `
    const number = ${getRandomInt(1, 10)};

    if (number >= 10) {
        console.log(1);
    } else if (number < 5) {
        console.log(2);
    } else if (number < 7) {
        console.log(3);
    } else {
        console.log(4);
    }
    `
  },
  {
    name: "Check Number Range",
    difficulty: "Easy",
    subject: "If Statements",
    description: "This snippet checks if a random number falls within a certain range.",
    code: `
    const number = ${getRandomInt(1, 10)};
    const secondNumber = ${getRandomInt(1, 10)};

    if (secondNumber > number) {
        if (secondNumber > 6) {
            console.log(1);
        } else {
            console.log(2);
        }
    } else {
        console.log(3);
    }
    `
  },
  {
    name: "Compare with Boolean Values",
    difficulty: "Easy",
    subject: "If Statements",
    description: "This snippet compares a boolean condition based on random login status.",
    code: `
    const isLoggedIn = ${Math.random() < 0.5};
    const isAdmin = ${Math.random() < 0.5};

    if (isLoggedIn) {
        console.log(1);
    } else if (!isLoggedIn && isAdmin) {
        console.log(2);
    } else {
        console.log(3);
    }
    `
  },
  {
    name: "Check Falsy Values",
    difficulty: "Easy",
    subject: "If Statements",
    description: "This snippet checks if a value is falsy (e.g., 0).",
    code: `
    const age = ${getRandomInt(10, 30)};

    if (age >= 21) {
        console.log(1);
    } else if (age >= 18) {
        console.log(2);
    } else if (age >= 13) {
        console.log(3);
    } else {
        console.log(4);
    }
    `
  },
  {
    name: "Complex Condition Check",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet evaluates a random number against multiple conditions to determine its category.",
    code: `
    const number = ${getRandomInt(1, 50)};

    if (number > 30) {
        console.log(1);
    } else if (number > 20) {
        console.log(2);
    } else if (number > 10) {
        console.log(3);
    } else {
        console.log(4);
    }
    `
  },
  {
    name: "Weather Condition Assessment",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet assesses weather conditions based on random temperature and humidity levels.",
    code: `
    const temperature = ${getRandomInt(-10, 40)};
    const humidity = ${getRandomInt(0, 100)};

    if (temperature > 30 && humidity > 70) {
        console.log(1);
    } else if (temperature > 30 && humidity <= 70) {
        console.log(2);
    } else if (temperature <= 30 && humidity > 70) {
        console.log(3);
    } else {
        console.log(4);
    }
    `
  },
  {
    name: "Nested Conditional Logic",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet uses nested conditionals to evaluate the relationship between two random numbers.",
    code: `
    const firstNumber = ${getRandomInt(1, 20)};
    const secondNumber = ${getRandomInt(1, 20)};

    if (firstNumber > secondNumber) {
        if (firstNumber - secondNumber > 5) {
            console.log(1);
        } else {
            console.log(2);
        }
    } else if (firstNumber < secondNumber) {
        if (secondNumber - firstNumber > 5) {
            console.log(3);
        } else {
            console.log(4);
        }
    } else {
        console.log(5);
    }
    `
  },
  {
    name: "Access Control Based on Role",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet determines user access level based on random roles.",
    code: `
    const userRole = ['admin', 'editor', 'viewer'][${getRandomInt(0, 2)}];

    if (userRole === 'admin') {
        console.log(1);
    } else if (userRole === 'editor') {
        console.log(2);
    } else {
        console.log(3);
    }
    `
  },
  {
    name: "Advanced Falsy Value Check",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet checks if a value is falsy and determines its category.",
    code: `
    const value = ${getRandomInt(-10, 10)};

    if (!value) {
        console.log(1);
    } else if (value > 0) {
        console.log(2);
    } else if (value < 0) {
        console.log(3);
    }
    `
  },
  {
    name: "Complex Logical Conditions",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet evaluates multiple complex conditions with logical operators.",
    code: `
    const a = ${getRandomInt(0, 10)};
    const b = ${getRandomInt(0, 10)};

    if ((a > 3 && b < 7) || a === b) {
        console.log(\`\${a} and \${b} meet the condition.\`);
    }
    console.log(2);
    `
  },
  {
    name: "Number 1",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet checks if `p` is false using logical negation.",
    code: `
    const number = ${getRandomInt(0, 1)};

    if (!number) {
        console.log(1);
    }
    console.log(2);
    `
  },
  {
    name: "Number 2",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet checks if `p` is true or `q` is false.",
    code: `
    const number1 = ${getRandomInt(0, 1)};
    const number2 = ${getRandomInt(0, 1)};
    
    if (number1 || !number2) {
        console.log(1);
    }
    console.log(2);
    `
  },
  {
    name: "Number 3",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet checks if both `p` and `q` are true or `q` is false.",
    code: `
    const number1 = ${getRandomInt(0, 1)};
    const number2 = ${getRandomInt(0, 1)};

    if ((number1 && number2) || !number2) {
        console.log(1);
    }
    console.log(2);
    `
  },
  {
    name: "Number 4",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet checks if either `p` or `q` is true, and both `q` and `r` are true.",
    code: `
    const number1 = ${getRandomInt(0, 1)};
    const number2 = ${getRandomInt(0, 1)};
    const number3 = ${getRandomInt(0, 1)};

    if ((number1 || number2) && (number2 && number3)) {
        console.log(1);
    }
    console.log(2);
    `
  },
  {
    name: "Number 5",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet checks if either `p` or `q` is true, and `r` is false.",
    code: `
    const number1 = ${getRandomInt(0, 1)};
    const number2 = ${getRandomInt(0, 1)};
    const number3 = ${getRandomInt(0, 1)};

    if ((number1 || number2) && !number3) {
        console.log(1);
    }
    console.log(2);
    `
  },
  {
    name: "Number 6",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet negates the condition where either `p` or `q` is true, and `q` is true.",
    code: `
    const number1 = ${getRandomInt(0, 1)};
    const number2 = ${getRandomInt(0, 1)};

    if (!((number1 || number2) && number2)) {
        console.log(1);
    }
    console.log(2);
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
  }, {
    name: "Multi-Level Access Decider",
    difficulty: "Hard",
    subject: "If Statements",
    description: "This snippet evaluates multiple user attributes to determine access levels with ambiguous outcomes.",
    code: `
    const userLevel = ['superuser', 'moderator', 'guest'][${getRandomInt(0, 2)}];
    const hasSubscription = ${Math.random() < 0.5};
    const accountAge = ${getRandomInt(0, 5)}; // In years

    if (userLevel === 'superuser' || (userLevel === 'moderator' && hasSubscription)) {
        console.log('Access Level: 10');
    } else if (userLevel === 'guest' && accountAge > 1) {
        console.log('Access Level: 5');
    } else if (userLevel === 'moderator' && !hasSubscription) {
        console.log('Access Level: 3');
    } else {
        console.log('Access Level: 0');
    }
    `
  },
  {
    name: "Complex Number Classification",
    difficulty: "Hard",
    subject: "If Statements",
    description: "This snippet classifies a random number into intricate categories based on a range of logical conditions.",
    code: `
    const value = ${getRandomInt(-30, 30)};

    if (value === 0) {
        console.log('Zero - Neutral');
    } else if (value > 10 && value <= 20) {
        console.log('High Positive');
    } else if (value > 20 && value <= 30) {
        console.log('Very High Positive');
    } else if (value < -10 && value >= -20) {
        console.log('High Negative');
    } else if (value < -20) {
        console.log('Very High Negative');
    } else {
        console.log('Mild');
    }
    `
  },
  {
    name: "Obscure Evaluation Logic",
    difficulty: "Hard",
    subject: "If Statements",
    description: "This snippet uses convoluted conditions to evaluate two numbers and generate unexpected output.",
    code: `
    const a = ${getRandomInt(-20, 20)};
    const b = ${getRandomInt(-20, 20)};

    if (a === b) {
        console.log('Equal');
    } else if ((a + b) % 3 === 0) {
        if (a > b) {
            console.log('A is greater and sum is divisible by 3');
        } else {
            console.log('B is greater and sum is divisible by 3');
        }
    } else if (Math.abs(a - b) > 10) {
        console.log('Numbers are far apart');
    } else {
        console.log('Close Numbers');
    }
    `
  },
  {
    name: "Cryptic Permission Checker",
    difficulty: "Hard",
    subject: "If Statements",
    description: "This snippet checks various permissions and generates non-intuitive access levels based on random inputs.",
    code: `
    const permissions = ['read', 'write', 'execute'][${getRandomInt(0, 2)}];
    const hasTwoFactorAuth = ${Math.random() < 0.5};
    const securityClearance = ${getRandomInt(0, 3)}; // Level 0 to 2

    if (permissions === 'execute' && hasTwoFactorAuth) {
        console.log('Access Granted: Full');
    } else if (permissions === 'write' && securityClearance > 1) {
        console.log('Access Granted: Limited');
    } else if (permissions === 'read' && securityClearance === 0) {
        console.log('Access Granted: Read Only');
    } else {
        console.log('Access Denied');
    }
    `
  }
];

export default ifStatements;
