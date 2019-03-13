window.addEventListener('load', init);

// Global variables

// Avaailable levels
const levels = {
	easy: 5,
	medium:3,
	hard: 1
}
//To change the leveels
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];
// console.log(words);

//initialize game

function init(){
	// show no of seconds in UI
	seconds.innerHTML = currentLevel;
//load word from array
showWord(words);
// start matching on word input
wordInput.addEventListener('input', startMatch);
//call countdown every second
setInterval(countdown,1000);
//check game status
setInterval(checkStatus, 50);
}

//startmatch
function startMatch(){
	 if(matchWords()){
	 	isPlaying = true;
	 	time = currentLevel + 1;
	 	showWord(words);
	 	wordInput.value = '';
	 	score++;
	 }
	 // if score is -1 , display 0;

	 if(score === -1){
	 scoreDisplay.innerHTML = 0;

	 } else{
	 scoreDisplay.innerHTML = score;
	 }
}
//match currentWord to wordinput
function matchWords(){
	if(wordInput.value === currentWord.innerHTML){
	 		message.innerHTML = 'Correct !!!';
	 		return true;
	 	} else{
	 		message.innerHTML = '';
			  return false;
	 	}
}

//pick and show random word
function showWord(words){
	//generate random array indesx
	const randIndex = Math.floor(Math.random() * words.length);
	// output a random word

	currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown(){
	//make sure time is snot run out 
	if(time > 0){
		time --;
	}
	else if(time === 0){
		//game is over
		isPlaying = false;
	}
	timeDisplay.innerHTML = time;
}
//check game status
function checkStatus(){
	if(!isPlaying && time === 0){
		message.innerHTML = '<span class="text-danger">Game Over !!! </span>';
		score = -1;
	}
}
