// Questions stored as an array of objects. New questions can be added here for display by adding another object.

var questions = [
  {
    title: "Commonly used data types DO NOT include",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    title: "The condition in an if/else statement is enclosed within___.",
    choices: ["Quotes", "Curly brackets", "Parenthesis", "Numbers"],
    answer: "Parenthesis",
  },
  {
    title: "Arrays in JavaScript can be used to store___",
    choices: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    title:
      "String values must be enclosed within__ when being assigned to variables.",
    choices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
    answer: "Quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is?",
    choices: ["Javascript", "Terminal/bash", "For loops", "Console.log"],
  },
];

///setting variables that will be updated by Javascript through timer and click events
var timeEl = document.getElementById("time");
var time = 60;
var timeInterval;
var startButton = document.getElementById("start");

// Creating variable for divs/ids
var mainEl = document.getElementById("main");
var questionContainer = document.getElementById("question-box");
var answerContainer = document.getElementById("answer-box");
var instruction = document.getElementById("instruction-text");
var questionIndex = 0;

startButton.addEventListener("click", function () {
  //hide instruction
  instruction.setAttribute("class", "hide");

  // start the timer
  setTime();
  displayQuestion();
  // answer question and move to next question
});

//function to display the Question and answer choices
function displayQuestion() {
  questionContainer.textContent = questions[questionIndex].question;
  questions[questionIndex].answers.forEach(function (answer, i) {
    answerContainer.children[i].textContent = answer.text;
    answerContainer.children[i].setAttribute("data-index", i);
  });

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
function checkAnswer(id, userAnswer) {
  console.log(userAnswer);
  questions[questionIndex].answers.forEach(function (answer, i) {
    if (userAnswer === answer.text && answer.correct === true) {
      // show the user got the answer right
      userAnswer = true;
    } else {
      ///got the question wrong
      userAnswer = false;
    }
  });
  questionIndex++;
  if (questionIndex < questions.length) {
    displayQuestion();
  } else {
    showfinalScore();
    //end the game
  }
}

function showfinalScore() {
  quizComponent.setAttribute();
}
//event listener to listen for when answer is submitted

// function StartGame() {};
function setTime() {
  var timerInterval = setInterval(function () {
    time--;
    timeEl.textContent = time + " Coding Quiz Challenge.";

    if (time === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

answerContainer.addEventListener("click", function (e) {
  if (!e.target.matches("button")) return;
  checkAnswer(e.target.id, e.target.innerText);
  console.log(e.target);
});
