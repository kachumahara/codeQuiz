var StartButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-box');

function StartGame() {}

questions = [
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
