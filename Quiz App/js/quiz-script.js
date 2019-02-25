var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');

var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

var timertext = document.getElementById('timeshow');


var min=0, s=60, x;

function timer(){
	var time = 4;
	min = --time;

	x = setInterval(run, 1000);

}
function run(){
 s = s-1;

 if( min == 0 && s == 0){
 	clearInterval(x);
 	    container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score:' + score;
 }

	timertext.textContent = getTimer();
	
	
	if(s == 0){
		min--;
		s=60;
	}

	if(min <3){
		timertext.style.color = '#dacf6c';
	}
	if( min< 1){
		timertext.style.color = '#c10707';
		timertext.setAttribute("class", "blink");
	}
}

function loadQuestion(questionIndex){
	
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' +q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;


// $(".option").fadeIn(1000);
};



function getTimer(){
	return (min < 10 ? "0"+min : min) + ':' + (s <10 ? "0"+s : s);
}
// $("#loader").show();
//    setTimeout(wen, 1900);
//    function wen(){
//     $("#loader").hide();
//     $(".option").show();
//    }
// function encryptForm(){
// document.login.password.value = CryptoJS.MD5(document.login.password.value);
// 	}



function loadNextQustion(){
	
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		swal("Oops !!!", 'You have to select one option to proceed');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score+= 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions ){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score:' + score;
		return;
	}
// $(".option").fadeOut('fast');

	loadQuestion(currentQuestion);


}
window.onload = loadQuestion(currentQuestion), 	timer();

