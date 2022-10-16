//All the words are in the words array
let wordsArray;

async function setWordsArray() {
    await fetch('https://random-word-api.herokuapp.com/all')
    .then((response) => response.json())
    .then((data) => wordsArray = data);
    console.log(wordsArray);
}
addGenerateEvent();
setWordsArray();

function addGenerateEvent() {
    const generateButton = document.getElementById('generaterandom');
    generateButton.addEventListener('click', function(e){
        e.preventDefault();
        createRandomWords(getListInput());
    })
}

function createRandomWords(amountOfWords) {
    const wordContainer = document.createElement('div');
    for (let x = 0; x < amountOfWords; x++) {
        let newWord = getRandomWord();
        let pElement = document.createElement('p');
        pElement.textContent = newWord;
        wordContainer.appendChild(pElement);
    }

    document.body.appendChild(wordContainer);
}

function getFixedWords(amountOfWords, letter) {
    const wordContainer = document.createElement('div');
    let letterArray = [];
    let wordsAppended = 0;

    for (let x = 0; x < wordsArray.length; x++) {
        if(wordsArray[x].charAt(0) === letter){
            letterArray.push(wordsArray[x]);
        }
    }

    for (let x = 0; amountOfWords != wordsAppended; x++) {
        let randomNumber = Math.floor(Math.random() * letterArray.length);
        let pElement = document.createElement('p');
        pElement.textContent = letterArray[randomNumber];

        wordContainer.appendChild(pElement);
        wordsAppended++;
        //remove entry to stop duplicates
                
        letterArray.splice(randomNumber, 1);
    }

    document.body.appendChild(wordContainer);


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


function termsFieldSet() {
    const termsFieldSet = document.getElementById('termsfieldset');
    const checkboxInputs = termsFieldSet.querySelectorAll('input[type=checkbox]');

    checkboxInputs.forEach(input => {
        if (input.checked === true) {
            let inputLetter = input.id;
            let numberInput = input.nextElementSibling;
            let inputValue = numberInput.value;
            console.log('went through checkbox inputs');

            getFixedWords(inputValue, inputLetter);
            
        }
    })
}

