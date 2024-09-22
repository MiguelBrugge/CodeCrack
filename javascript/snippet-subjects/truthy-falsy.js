const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const truthyFalsyExamples = [
    {
        name: "Boolean Evaluation",
        difficulty: "Easy",
        subject: "Truthy/Falsy",
        description: "Evaluating truthiness of various values.",
        code: `
        console.log(Boolean('${getRandomInt(0, 10) ? "Hello" : ""}') && Boolean(${getRandomInt(0, 10)}) && Boolean([]));
        `,
    },
    {
        name: "Truthy Numbers",
        difficulty: "Easy",
        subject: "Truthy/Falsy",
        description: "Using numbers in logical expressions.",
        code: `
        console.log(${getRandomInt(0, 10)} || 0 || ${getRandomInt(-10, 0)});
        `,
    },
    {
        name: "Falsy Strings",
        difficulty: "Medium",
        subject: "Truthy/Falsy",
        description: "Checking the truthiness of strings.",
        code: `
        console.log('' || 'Non-empty' || ${getRandomInt(0, 10) === 0});
        `,
    },
    {
        name: "Falsy Objects",
        difficulty: "Medium",
        subject: "Truthy/Falsy",
        description: "Understanding objects and their truthiness.",
        code: `
        console.log(${getRandomInt(0, 10) === 0 ? "null" : "{}"} || {} || ${getRandomInt(0, 10) === 0 ? "undefined" : "42"});
        `,
    },
    {
        name: "Complex Conditions",
        difficulty: "Medium",
        subject: "Truthy/Falsy",
        description: "Combining multiple truthy and falsy values.",
        code: `
        console.log((${getRandomInt(0, 10)} && 1) || ('' && 'Hello') || (undefined || ${getRandomInt(0, 10)}));
        `,
    },
    {
        name: "Truthy in Arrays",
        difficulty: "Hard",
        subject: "Truthy/Falsy",
        description: "Evaluating truthy values in arrays.",
        code: `
        console.log([${getRandomInt(0, 10) === 0 ? "null" : "1"}, ${getRandomInt(0, 10)}, false, 'Truth'] || [undefined]);
        `,
    },
    {
        name: "Default Parameters in Functions",
        difficulty: "Hard",
        subject: "Truthy/Falsy",
        description: "Using truthy values with default parameters.",
        code: `
        function check(value = 'default') {
            return value;
        }
        console.log(check(${getRandomInt(0, 10) === 0 ? "null" : "'value'"}));
        `,
    },
    {
        name: "Logical Operators",
        difficulty: "Hard",
        subject: "Truthy/Falsy",
        description: "Using logical operators to evaluate conditions.",
        code: `
        console.log(true && (false || '${getRandomInt(0, 10) ? "Truthy" : ""}') && ${getRandomInt(0, 10)});
        `,
    },
    {
        name: "Short-circuit Evaluation",
        difficulty: "Hard",
        subject: "Truthy/Falsy",
        description: "Understanding short-circuit evaluation with logical operators.",
        code: `
        console.log(({} && ${getRandomInt(0, 10)}) || (false && []));
        `,
    },
    {
        name: "Nullish Coalescing",
        difficulty: "Hard",
        subject: "Truthy/Falsy",
        description: "Using nullish coalescing to evaluate values.",
        code: `
        console.log(${getRandomInt(0, 10) === 0 ? "null" : "undefined"} ?? undefined ?? 'default');
        `,
    },
];

export default truthyFalsyExamples;
