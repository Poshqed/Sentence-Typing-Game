window.addEventListener('load', init)

// Globals

let time = 30;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('.js-word-input');
const currentSentence = document.querySelector('.js-current-sentence');
const scoreDisplay = document.querySelector('.js-score');
const timeDisplay = document.querySelector('.js-total-time');
const message = document.querySelector('.js-message');
const secondsDisplay = document.querySelector('.js-time');
const button = document.querySelector('.js-button')
const button2 = document.querySelector('.js-button2')

const sentenceCollection = [
    'As he entered the church he could hear the soft voice of someone whispering into a cell phone.',
    'The hummingbird wings blurred while it eagerly sipped the sugar water from the feeder',
    'When you change your thoughts, remember to also change your world',
    'Success is not final; failure is not fatal: It is the courage to continue that counts',
    'Success is getting what you want, happiness is wanting what you get',
    'Experience is a hard teacher because she gives the test first, the lesson afterwards',
    'To know how much there is to know is the beginning of learning to live',
    'Opportunity is missed by most people because it is dressed in overalls and looks like work',
    'If you want something said, ask a man; if you want something done, ask a woman',
    'The elevator to success is out of order. You’ll have to use the stairs, one step at a time.',
    'People say nothing is impossible, but I do nothing every day',
    'I always wanted to be somebody, but now I realise I should have been more specific',
    'Friday sees more smiles than any other day of the workweek!',
    'It genuinely sounded like someone had been stabbed. I will make sure that never happens again',
    'Nearly every transaction or interaction leaves a data signature that someone somewhere is capturing and storing.',
    'The most interesting thing to me about these items is that each evolved from an idea of one of our operators',
    'government followed the right procedure and complied with the law. But there is a lot of improvising',
    'Jeffrey Goldberg posed that question to foreign policy influentials Robert Kagan, James Steinberg, and Nicholas Burns'

]

//Initialize Game
function init() {
    showSentence(sentenceCollection);

    wordInput.addEventListener('input', matchSentence)
    setInterval(checkStatus, 50)
}


//Pick and show a random sentence
function showSentence(sentenceCollection) {
    //generate random index no
    const randIndex = Math.floor(Math.random() * sentenceCollection.length);
    //random sentence
    currentSentence.innerText = sentenceCollection[randIndex]

}

button.addEventListener('click', beginGame)

function beginGame(e) {
    wordInput.focus()
    button.style.cursor = 'not-allowed'
    setInterval((countdown => {
        if (time > 0) {
            time--;

        } else if (time === 0) {
            isPlaying = false;
        }
        timeDisplay.innerHTML = time;
    }), 1000);
}


function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!'

    }

}

function matchSentence() {
    if (matchWords()) {
        isPlaying = true;
        time = 31;
        showSentence(sentenceCollection);
        wordInput.value = ''
        score++;
    }
    scoreDisplay.innerHTML = score;

}

function matchWords() {
    if (wordInput.value === currentSentence.innerText) {
        message.innerHTML = 'Correct!!!'
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

//incorporate a high score later using the local storage
//set timer according to the difficulty level