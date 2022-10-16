//All the words are in the words array
let wordsArray;
let isPreviousGenerated = false;

addGenerateEvent();
setWordsArray();

async function setWordsArray() {
    await fetch('https://random-word-api.herokuapp.com/all')
    .then((response) => response.json())
    .then((data) => wordsArray = data);
}

function createRandomWords(amountOfWords) {
    let wordContainer = document.createElement('span');
    for (let x = 0; x < amountOfWords; x++) {
        let newWord = getRandomWord();
        let pElement = document.createElement('span');
        if (x != amountOfWords-1) {
            pElement.textContent = `"${newWord}", `;

        }

        else {
            pElement.textContent = `"${newWord}"`;
        }
        wordContainer.appendChild(pElement);
    }

    document.body.appendChild(wordContainer);

}

function getFixedWords(amountOfWords, letter) {
    let letterArray = [];
    let wordsAppended = 0;

    for (let x = 0; x < wordsArray.length; x++) {
        if(wordsArray[x].charAt(0) === letter){
            letterArray.push(wordsArray[x]);
        }
    }

    for (let x = 0; amountOfWords != wordsAppended; x++) {
        let randomNumber = Math.floor(Math.random() * letterArray.length);
        let pElement = document.createElement('span');

        pElement.textContent = `"${letterArray[randomNumber]}", `;

        wordContainer.appendChild(pElement);
        wordsAppended++;

        //remove entry to stop duplicates
        letterArray.splice(randomNumber, 1);
    }

}

function addGenerateEvent() {
    const generateRandomButton = document.getElementById('generaterandom');
    const generateFixedButton = document.getElementById('generatefixed');
    generateRandomButton.addEventListener('click', function(e){
        e.preventDefault();
        if (isPreviousGenerated === true) {
            document.body.removeChild(document.body.lastElementChild);
            isPreviousGenerated = false;
        }
        createRandomWords(getListInput());
        isPreviousGenerated = true;
    })

    generateFixedButton.addEventListener('click', function(e){
        e.preventDefault();
        createFixedWords();
        isPreviousGenerated = true;
    })
}

//For first words box input
function getListInput() {
    const randomListInput = document.getElementById('words');
    return randomListInput.value;
}

function getRandomWord() {
    let randomNumber = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomNumber];
}

function createFixedWords() {
    const termsFieldSet = document.getElementById('termsfieldset');
    const checkboxInputs = termsFieldSet.querySelectorAll('input[type=checkbox]');

    checkboxInputs.forEach(input => {
        if (input.checked === true) {
            let inputLetter = input.id;
            let numberInput = input.nextElementSibling;
            let inputValue = numberInput.value;
            document.body.appendChild(wordContainer);
            getFixedWords(inputValue, inputLetter);
            
        }
    })
}


