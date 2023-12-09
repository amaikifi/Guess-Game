let words = ['banana', 'apple', 'orange', 'zoo', 'hungry', 'purple', 'red'];
let word = document.getElementById('word');
let message = document.getElementById('message');
let wordRndArray, wordRndIndex, wordRndLetter, result;
let score = 0
function generateWord() {
    let wordIndex = Math.floor(Math.random() * words.length);
    let wordRnd = words[wordIndex];
    wordRndArray = wordRnd.split('');
    wordRndIndex = Math.floor(Math.random() * wordRndArray.length);
    wordRndLetter = wordRndArray[wordRndIndex];
    let replace = wordRndLetter.replace(wordRndLetter, '_');
    wordRndArray[wordRndIndex] = replace;
    result = wordRndArray.join('');
    word.innerText = result;
}

function check() {
    let input = document.getElementById('input').value;
    if (input === wordRndLetter) {
        message.textContent = 'Correct!';
        wordRndArray[wordRndIndex] = input;
        result = wordRndArray.join('');
        word.innerText = result;
        score += 1
        let scoreH = document.getElementById('score')
        scoreH.innerText = score
        
        newWord()
    } else {
        message.textContent = 'Wrong!';
    }
}

function newWord() {
    generateWord();
    message.textContent = '';
    document.getElementById('input').value = '';
}
// Generate the initial word
generateWord();

let checkBtn = document.getElementById('checkBtn')
let audio = document.getElementById('audio')
let audio2 = document.getElementById('audio2')
let newWordBtn = document.getElementById('newWordBtn')
checkBtn.addEventListener('mouseover', function() {
    audio.play()
})
newWordBtn.addEventListener('mouseover', function() {
    audio.play()
})

checkBtn.addEventListener('click', function() {
    audio2.play()
})

newWordBtn.addEventListener('click', function() {
    audio2.play()
})

