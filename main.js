import snippets from './snippets.js';

const codeSnippet = document.getElementsByTagName('code')[0];
const answerInput = document.getElementById('answer-input');
const snippetNameElement = document.getElementById('snippet-name');
const answerForm = document.getElementById('answer-form');

let currentSnippet = snippets[0];
let globalOutput;
const getRandomNumber = maxNumber => Math.floor(Math.random() * (maxNumber + 1));

changeCodeSnippet();

function changeCodeSnippet() {
    while (true) {
        let randomNumber = getRandomNumber(snippets.length - 1);
        if (snippets[randomNumber] === currentSnippet) continue;
        currentSnippet = snippets[randomNumber];
        codeSnippet.innerHTML = currentSnippet.code;
        snippetNameElement.innerText = currentSnippet.name;
        Prism.highlightElement(codeSnippet);
        break;
    }
}

function checkOutput(){
    try {
        eval(`
            (function() {
                const consoleLog = console.log;
                console.log = (output) => { globalOutput = output; }; // Redirect console.log
                ${currentSnippet.code}
                console.log = consoleLog; // Restore original console.log
            })();
        `);
    } catch (e) {
        console.error('Error evaluating the code:', e);
        return;
    }
}

function submitAnswer() {
    checkOutput();
    if (globalOutput == answerInput.value) {
        answerInput.value = '';
        globalOutput = undefined;
        changeCodeSnippet();
    } else {
        console.log('Incorrect answer');
    }
}

answerForm.onsubmit = function(event) {
    event.preventDefault();
    submitAnswer();
};

