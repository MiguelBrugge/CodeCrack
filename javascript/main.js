import snippets from './snippets.js';

const answerForm = document.getElementById('answer-form');
const answerInput = document.getElementById('answer-input');
const skipButton = document.getElementById('skip-button');
const answerButton = document.getElementById('answer-button');

const snippetNameElement = document.getElementById('snippet-name');
const descriptionElement = document.getElementById('description-element');
const snippetInfo = document.getElementById('snippet-info');
const selectDifficulty = document.getElementById('select-difficulty');

const subjectsWrapper = document.getElementById('subjects-wrapper');
const checkBoxes = subjectsWrapper.getElementsByClassName('checkbox');
const codeSnippet = document.getElementsByTagName('code')[0];

let currentSnippet = snippets[0];
let globalOutput;
let difficulty = 'Random';
const selectedSubjects = new Set();

const getRandomNumber = maxNumber => Math.floor(Math.random() * (maxNumber + 1));

window.onload = event => {
    createSubjects();
    changeCodeSnippet();

    for (const checkbox of checkBoxes) {
        checkbox.onclick = function () {
            checkbox.classList.toggle('active');
            if (checkbox.classList.contains('active')) {
                selectedSubjects.add(checkbox.dataset.subject);
            } else {
                selectedSubjects.delete(checkbox.dataset.subject);
            }
        }
    }
}

function createSubjects() {
    const subjects = new Set();
    for (const snippet of snippets) {
        const subject = snippet.subject;
        if (subjects.has(subject)) continue;
        subjects.add(subject);
        subjectsWrapper.innerHTML +=
            `
            <div class="w-100 d-flex justify-content-between align-items-center p-1 py-2 rounded-2">
                <span>${subject}</span>
                <div class="rounded-2 checkbox" data-subject="${subject}"></div>
            </div>
        `;
    }
}

function changeCodeSnippet() {
    while (true) {
        let randomNumber = getRandomNumber(snippets.length - 1);
        if (snippets[randomNumber] === currentSnippet) {
            continue;
        }
        if (snippets[randomNumber].difficulty !== difficulty && difficulty != 'Random') {
            continue;
        }
        if (!selectedSubjects.has(snippets[randomNumber].subject) && selectedSubjects.size != 0) {
            continue;
        }
        currentSnippet = snippets[randomNumber];
        codeSnippet.innerHTML = currentSnippet.code;
        snippetNameElement.innerText = currentSnippet.name;
        snippetInfo.innerHTML = currentSnippet.subject + ' | ' + currentSnippet.difficulty;
        descriptionElement.innerHTML = currentSnippet.description;
        Prism.highlightElement(codeSnippet);
        break;
    }
}

function checkOutput() {
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
    const outputString = (globalOutput === undefined) ? 'undefined' : String(globalOutput);

    if (outputString == answerInput.value) {
        answerInput.value = '';
        globalOutput = undefined;
        changeCodeSnippet();
    } else {
        console.log('Incorrect answer: ' + globalOutput);
    }
    return outputString;
}

answerForm.onsubmit = function (event) {
    event.preventDefault();
    submitAnswer();
};

selectDifficulty.onchange = function () {
    difficulty = selectDifficulty.options[selectDifficulty.selectedIndex].value;
}

skipButton.onclick = function () {
    changeCodeSnippet();
}

answerButton.onclick = function () {
    alert(`Output: ${submitAnswer()}`);
}
