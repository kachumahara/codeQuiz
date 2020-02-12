var questions = [
	{
		question: 'Commonly used data types DO NOT include',
		answers: [
			{ text: 'Strings', correct: false },
			{ text: 'Booleans', correct: false },
			{ text: 'Alerts', correct: true },
			{ text: 'Numbers', correct: false },
		],
	},
	{
		question: 'The condition in an if/else statement is enclosed within___.',
		answers: [
			{ text: 'StQuotes', correct: false },
			{ text: 'Curly brackets', correct: false },
			{ text: 'Parentheses', correct: true },
			{ text: 'Numbers', correct: false },
		],
	},
	{
		question: 'Arrays in JavaScript can be used to store___',
		answers: [
			{ text: 'Numbers and strings', correct: false },
			{ text: 'BOther arrays', correct: false },
			{ text: 'Booleans', correct: false },
			{ text: 'All of the above', correct: true },
		],
	},
	{
		question: 'String values must be enclosed within__ when being assigned to variables.',
		answers: [
			{ text: 'Commas', correct: false },
			{ text: 'Curly brackets', correct: false },
			{ text: 'Quotes', correct: true },
			{ text: 'Parentheses', correct: false },
		],
	},
	{
		question: 'A very useful tool used during development and debugging for printing content to the debugger is?',
		answers: [
			{ text: 'Javascript', correct: false },
			{ text: 'Terminal/bash', correct: false },
			{ text: 'For loops', correct: false },
			{ text: 'Console.log', correct: true },
		],
	},
];
var timeEl = document.querySelector('.time');
var mainEl = document.getElementById('main');
var startButton = document.getElementById('start');
var questionContainer = document.getElementById('question-box');
var answerContainer = document.getElementById('answer-box');
var instruction = document.getElementById('instruction-text');
var questionIndex = 0;
var time = 60;
var timeInterval;

startButton.addEventListener('click', function() {
	//hide instruction
	instruction.setAttribute('class', 'hide');

	
	// start the timer

	// answer question and move to next question
});

//function to display the Question and answer choices
function displayQuestion() {
	questionContainer.textContent = questions[questionIndex].question;
	questions[questionIndex].answers.forEach(function(answer, i){
		answerContainer.children[i].textContent = answer.text;
		answerContainer.children[i].setAttribute("data-index", i);
	})
	// answerContainer.children[0].textContent = questions[questionIndex].answers[0].text;
	// answerContainer.children[1].textContent = questions[questionIndex].answers[1].text;
	// answerContainer.children[2].textContent = questions[questionIndex].answers[2].text;
	// answerContainer.children[3].textContent = questions[questionIndex].answers[3].text;
	//console.log(questionContainer.children)

	//display question with question container query selector

	//loop through your answer choices with a for loop
	//and append those to your answer box
	// var text = '';
	// var i;
	// for (i = 0; i < question.length; i++) {}
}

//function that checks the user answer choice
function checkAnswer() {}

//event listener to listen for when answer is submitted

// function StartGame() {};
function setTime() {
	var timerInterval = setInterval(function() {
		secondsLeft--;
		timeEl.textContent = secondsLeft + ' Coding Quiz Challenge.';

		if (secondsLeft === 0) {
			clearInterval(timerInterval);
			sendMessage();
		}
	}, 1000);
}

answerContainer.addEventListener("click", function(e){
	if(!e.target.matches("button")) return;
	console.log(e.target);
});
