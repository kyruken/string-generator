//All the words are in the words array
let wordsArray;

async function setWordsArray() {
    await fetch('https://random-word-api.herokuapp.com/all')
    .then((response) => response.json())
    .then((data) => wordsArray = data);
    console.log(wordsArray);
}

setWordsArray();


function createRandomWords() {
    let amountOfWords = getListInput();
    const wordContainer = document.createElement('div');
    for (let x = 0; x < amountOfWords; x++) {
        let newWord = getRandomWord();
        let pElement = document.createElement('p');
        pElement.textContent = newWord;
        wordContainer.appendChild(pElement);
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

function getNumberofWords() {
    const termsFieldSet = document.getElementById('termsfieldset');
    const checkboxInputs = termsFieldSet.querySelectorAll('input[type=checkbox]');
    const numberInputs = termsFieldSet.querySelectorAll('input[type=number]');

    checkboxInputs.forEach(input => {
        if (input.checked === true) {
            
        }
    })

    numberInputs.forEach(input => {
        if(input.value > 0) {
            console.log(input.value);
        }
    })


    // const numOfA = document.getElementById('anum');
    // const numOfB = document.getElementById('bnum');
    // const numOfC = document.getElementById('cnum');
    // const numOfD = document.getElementById('dnum');
    // const numOfE = document.getElementById('enum');
    // const numOfF = document.getElementById('fnum');
    // const numOfG = document.getElementById('gnum');
    // const numOfH = document.getElementById('hnum');
    // const numOfI = document.getElementById('inum');
    // const numOfJ = document.getElementById('jnum');
    // const numOfK = document.getElementById('knum');
    // const numOfL = document.getElementById('lnum');
    // const numOfM = document.getElementById('mnum');
    // const numOfN = document.getElementById('nnum');
    // const numOfO = document.getElementById('onum');
    // const numOfP = document.getElementById('pnum');
    // const numOfQ = document.getElementById('qnum');
    // const numOfR = document.getElementById('rnum');
    // const numOfS = document.getElementById('snum');
    // const numOfT = document.getElementById('tnum');
    // const numOfU = document.getElementById('unum');
    // const numOfV = document.getElementById('vnum');
    // const numOfW = document.getElementById('wnum');
    // const numOfX = document.getElementById('xnum');
    // const numOfY = document.getElementById('ynum');
    // const numOfZ = document.getElementById('znum');

}