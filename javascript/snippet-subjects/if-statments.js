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
    name: "Even or Odd",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet uses a simple ternary operator to check if a number is even or odd.",
    code: `
    const num = ${getRandomInt(0, 10)};

    console.log(num % 2 === 0 ? 'Even' : 'Odd');
    `
  },
  {
    name: "Positive, Negative or Zero",
    difficulty: "Medium",
    subject: "If Statements",
    description: "This snippet uses a ternary operator to check if a number is positive, negative, or zero.",
    code: `
    const num = ${getRandomInt(-10, 10)};

    console.log(num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero');
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
    name: "Nested Ternary Operator",
    difficulty: "Hard",
    subject: "If Statements",
    description: "This snippet uses a nested ternary operator for complex logic.",
    code: `
    const num = ${getRandomInt(0, 10)};
    const words = ['Low', 'Mid', 'High'];

    console.log(
        num % 2 === 0 
            ? (num > 5 
                ? words[2] // 'High' if num > 5
                : (num >= 3 
                    ? words[1] // 'Mid' if 3 <= num <= 5
                    : words[0])) // 'Low' if num < 3
            : 'Odd'
    );
    `
  },
  {
    name: "Multi-Level Access Decider",
    difficulty: "Hard",
    subject: "If Statements",
    description: "This snippet evaluates multiple user attributes to determine access levels with ambiguous outcomes.",
    code: `
    const userLevel = ['superuser', 'moderator', 'guest'][new Date().getSeconds() % 3];
    const hasSubscription = !!(new Date().getMinutes() % 2);
    const accountAge = new Date().getFullYear() - (2018 + (new Date().getSeconds() % 5)); // In years
    const accessLog = ['restricted', 'warning', 'clear'][new Date().getSeconds() % 3];

    if (userLevel === 'superuser' || (userLevel === 'moderator' && hasSubscription && accessLog !== 'restricted')) {
        console.log('Level 10');
    } else if (userLevel === 'guest' && accountAge > 1 && accessLog === 'clear') {
        console.log('Level 5');
    } else if (userLevel === 'moderator' && !hasSubscription && accessLog === 'warning') {
        console.log('Level 3');
    } else {
        console.log('Level 0');
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
        console.log(1);
    } else if (value > 10 && value <= 20) {
        console.log(2);
    } else if (value > 20 && value <= 30) {
        console.log(3);
    } else if (value < -10 && value >= -20) {
        console.log(4);
    } else if (value < -20) {
        console.log(5);
    } else {
        console.log(6);
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
        console.log(1);
    } else if ((a + b) % 3 === 0 && (a - b) % 2 === 0) {
        if (a > 0 && b < 0) {
            console.log(2);
        } else if (a % 2 === 0 || b % 2 === 0) {
            console.log(3);
        } else {
            console.log(4);
        }
    } else if (a * b < 0) {
        if (a + b < -10) {
            console.log(5);
        } else {
            console.log(6);
        }
    } else if ((a > 10 && b < 0) || (b > 10 && a < 0)) {
        console.log(7);
    } else {
        console.log(8);
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
    const securityClearance = ${getRandomInt(0, 3)};
    const deviceTrustLevel = ${getRandomInt(1, 5)};
    const isRemoteAccess = ${Math.random() < 0.3};
  
    function encryptedCheck(a, b) {
        return ((a * b) % 2 === 0) && (a ^ b) > 1;
    }
  
    if (permissions === 'execute' && hasTwoFactorAuth && encryptedCheck(securityClearance, deviceTrustLevel)) {
        console.log(1);
    } else if (permissions === 'write' && securityClearance > 1 && (isRemoteAccess ? deviceTrustLevel > 3 : deviceTrustLevel < 3)) {
        console.log(2);
    } else if (permissions === 'read' && securityClearance === 0 && encryptedCheck(deviceTrustLevel, securityClearance + 2)) {
        console.log(3);
    } else if ((permissions === 'write' || permissions === 'execute') && !hasTwoFactorAuth && !isRemoteAccess) {
        if (deviceTrustLevel > 2 || encryptedCheck(securityClearance, deviceTrustLevel)) {
            console.log(5);
        } else {
            console.log(6);
        }
    } else {
        console.log(4);
    }
    `
  }
];

export default ifStatements;
