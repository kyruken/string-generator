//All the words are in the words array
let wordsArray;

async function setWordsArray() {
    await fetch('https://random-word-api.herokuapp.com/all')
    .then((response) => response.json())
    .then((data) => wordsArray = data);
    console.log(wordsArray);
}

setWordsArray();

let chosenLetter = document.getElementById('firstletter');

