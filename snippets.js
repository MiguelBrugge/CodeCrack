const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const snippets = [
  {
    name: "Addition1",
    difficulty: "medium",
    code: `
      const a = ${getRandomInt(10, 50)};
      const b = ${getRandomInt(10, 50)};
      console.log(a + b);
    `,
  },
  {
    name: "Addition2",
    difficulty: "medium",
    code: `
      const a = ${getRandomInt(10, 50)};
      const b = ${getRandomInt(10, 50)};
      console.log(a + b);
    `,
  },
  {
    name: "Multiply1",
    difficulty: "medium",
    code: `
      let a = ${getRandomInt(10, 20)};
      let b = ${getRandomInt(10, 20)};
      console.log(a * b);
    `,
  },
  {
    name: "Divide1",
    difficulty: "medium",
    code: `
      let x = ${getRandomInt(20, 100)};
      let y = ${getRandomInt(1, 20)}; // Ensure y is not zero
      console.log(x / y);
    `,
  },
  {
    name: "Modulo1",
    difficulty: "medium",
    code: `
      let num = ${getRandomInt(20, 100)};
      console.log(num % 7);
    `,
  },
  {
    name: "Exponentiation1",
    difficulty: "medium",
    code: `
      const base = ${getRandomInt(2, 10)};
      const exponent = ${getRandomInt(2, 5)};
      console.log(Math.pow(base, exponent));
    `,
  },
  {
    name: "StringConcat1",
    difficulty: "medium",
    code: `
      const firstName = 'John';
      const lastName = 'Doe';
      const age = ${getRandomInt(20, 40)};
      console.log(\`\${firstName} \${lastName} is \${age} years old.\`);
    `,
  },
  // Hard Snippets
  {
    name: "FactorialFunction",
    difficulty: "hard",
    code: `
      function factorial(n) {
        if (n === 0) return 1;
        return n * factorial(n - 1);
      }
      console.log(factorial(${getRandomInt(5, 10)}));
    `,
  },
  {
    name: "FibonacciLoop",
    difficulty: "hard",
    code: `
      const n = ${getRandomInt(5, 10)};
      let fib = [0, 1];
      for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      console.log(fib.slice(0, n));
    `,
  },
  {
    name: "PrimeNumbers",
    difficulty: "hard",
    code: `
      function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return num > 1;
      }
      const limit = ${getRandomInt(10, 50)};
      const primes = [];
      for (let i = 2; i < limit; i++) {
        if (isPrime(i)) primes.push(i);
      }
      console.log(primes);
    `,
  },
];

export default snippets;
