const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const loops = [
  {
    name: "Simple For Loop",
    difficulty: "Easy",
    subject: "Loops",
    description: "A basic for loop that counts from 1 to a random number.",
    code: `
        let result = '';
        for (let i = 1; i <= ${getRandomInt(1, 10)}; i++) {
            result += i + ' ';
        }
        console.log(result.trim());
        `,
  },
  {
    name: "While Loop Basics",
    difficulty: "Easy",
    subject: "Loops",
    description: "Using a while loop to sum numbers until a threshold.",
    code: `
        let sum = 0;
        let i = 1;
        while (i <= ${getRandomInt(1, 10)}) {
            sum += i;
            i++;
        }
        console.log(sum);
        `,
  },
  {
    name: "Do-While Loop Example",
    difficulty: "Easy",
    subject: "Loops",
    description: "Demonstrating a do-while loop for counting.",
    code: `
        let count = 0;
        do {
            count++;
        } while (count < ${getRandomInt(1, 5)});
        console.log(count);
        `,
  },
  {
    name: "Nested For Loop",
    difficulty: "Medium",
    subject: "Loops",
    description: "Using nested loops to create a simple multiplication table.",
    code: `
        let table = '';
        for (let i = 1; i <= ${getRandomInt(2, 5)}; i++) {
            for (let j = 1; j <= ${getRandomInt(2, 5)}; j++) {
                table += i * j + ' ';
            }
            table += '\\n';
        }
        console.log(table);
        `,
  },
  {
    name: "For Loop with Break",
    difficulty: "Medium",
    subject: "Loops",
    description: "Breaking out of a loop when a condition is met.",
    code: `
        let found = false;
        for (let i = 1; i <= 10; i++) {
            if (i === ${getRandomInt(1, 10)}) {
                found = true;
                break;
            }
        }
        console.log(found);
        `,
  },
  {
    name: "For Loop with Continue",
    difficulty: "Medium",
    subject: "Loops",
    description: "Using continue to skip an iteration in a loop.",
    code: `
        let evens = '';
        for (let i = 1; i <= ${getRandomInt(5, 10)}; i++) {
            if (i % 2 !== 0) continue;
            evens += i + ' ';
        }
        console.log(evens.trim());
        `,
  },
  {
    name: "Sum of Even Numbers",
    difficulty: "Hard",
    subject: "Loops",
    description: "Calculating the sum of even numbers using a for loop.",
    code: `
        let sum = 0;
        for (let i = 0; i <= ${getRandomInt(5, 10)}; i += 2) {
            sum += i;
        }
        console.log(sum);
        `,
  },
  {
    name: "Reverse String with Loop",
    difficulty: "Hard",
    subject: "Loops",
    description: "Reversing a string using a for loop.",
    code: `
        const str = 'hello'.repeat(${getRandomInt(1, 3)});
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        console.log(reversed);
        `,
  },
  {
    name: "Filtering an Array",
    difficulty: "Hard",
    subject: "Loops",
    description: "Filtering out odd numbers from an array using a for loop.",
    code: `
        const numbers = Array.from({length: ${getRandomInt(5, 10)}}, (_, i) => i + 1);
        const evens = [];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) evens.push(numbers[i]);
        }
        console.log(evens);
        `,
  },
  {
    name: "Generating Fibonacci Sequence",
    difficulty: "Hard",
    subject: "Loops",
    description: "Creating the Fibonacci sequence up to a specified number.",
    code: `
        const fib = [0, 1];
        for (let i = 2; i < ${getRandomInt(5, 10)}; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        console.log(fib);
        `,
  },
];

export default loops;
