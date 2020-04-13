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
var timer = document.querySelector("#seconds");
var timeRemaining = "0";

//will be updated with progress text at different stages of the quiz
var progressUpdate = document.getElementById("progress");
var progressSection = document.querySelector(".progressSection");

//create variables for divs/ids
var choicesList = document.querySelector("#choices-list");
var starterSection = document.querySelector(".starter");
var titlePlaceholder = document.querySelector(".title");
var quizComponents = document.querySelector(".quiz-components")
var highScoresSection = document.querySelector(".high-scores");
var closerSection = document.querySelector(".closer");
var holderSpot = document.querySelector(".holder");
var newInitials = document.querySelector("#newinitials");

// // Creating variable for divs/ids
// var mainEl = document.getElementById("main");
// var questionContainer = document.getElementById("question-box");
// var answerContainer = document.getElementById("answer-box");
// var instruction = document.getElementById("instruction-text");
// var questionIndex = 0;


//will display on quiz complete page and be logged into localStorage so that the user can view high scores at a later date.
var userScore = document.querySelector("#user-score");

//question object/array we are currently on
var currentQuestion = "0";

//didn't get this to work for local storage as a part of addToLocalStorage function
var savedHighScores = [];
console.log(savedHighScores);

//decrement time from 60 once Start Quiz button is clicked. update timer div in html from timeRemaining
function runTimer() {

  timeRemaining = "60";

  var timerInterval = setInterval(function() {
    timeRemaining--;
    timer.textContent = timeRemaining;

    if (currentQuestion <= questions.length) {
    
  }

    if(timeRemaining === 0) {
      clearInterval(timerInterval);
      timer.textContent = "0";
      progressUpdate.innerHTML = ("Time is up!");
    }

  }, 1000);

}

// //function to display the Question and answer choices
// function displayQuestion() {
//   questionContainer.textContent = questions[questionIndex].question;
//   questions[questionIndex].answers.forEach(function (answer, i) {
//     answerContainer.children[i].textContent = answer.text;
//     answerContainer.children[i].setAttribute("data-index", i);
//   });

//   // answerContainer.children[0].textContent = questions[questionIndex].answers[0].text;
//   // answerContainer.children[1].textContent = questions[questionIndex].answers[1].text;
//   // answerContainer.children[2].textContent = questions[questionIndex].answers[2].text;
//   // answerContainer.children[3].textContent = questions[questionIndex].answers[3].text;
//   //console.log(questionContainer.children)

function displayQuestions() {

  starterSection.setAttribute('style', 'display:none');

  //set variable for the "current question" that we are on in the questions object. current question number will be updated in chooseAnswer function
  var question = questions[currentQuestion];
  var currentQTitle = questions[currentQuestion].title;

  titlePlaceholder.innerHTML = currentQTitle;
  choicesList.innerHTML = "";

  //create for loop that will run through each choice string in the object
  for (var i = 0; i < question.choices.length; i++) {

      //set variables for new li(s) and current set of answers 
      var li = document.createElement("li");
      var currentAnsList = questions[currentQuestion].choices[i];

      //set text and current id to answer as unique identifier for comparison
      li.textContent = currentAnsList;
      li.setAttribute("id", currentAnsList);

      //append to list
      choicesList.append(li); 
      }
}



function chooseAnswer() {
  
  var choiceClicked = event.target.id;
  var li = document.querySelectorAll(li);
  var currentAns = questions[currentQuestion].answer;

  //if the li clicked has an id that matches the current answer, indicate the answer is correct and add 10 to timeRemaining/score - else subtract 10. in both cases, move on to the next question (+1)
  if (choiceClicked === currentAns) {
    progressUpdate.innerHTML = "Correct! +10 points";
    timeRemaining = timeRemaining + 10;
    currentQuestion = +currentQuestion + 1;
} 
  else {
    progressUpdate.innerHTML = "Wrong! -10 points";
    timeRemaining = timeRemaining - 10;
    currentQuestion = +currentQuestion + 1;
  }

   //if the current question count is more than the number of questions in the array, show the quiz complete section - else continue with quiz by going to the next question

   if (currentQuestion >= questions.length) {
    showFinalScore();
  }
    else {
    displayQuestions();
    }
  
}


//hide quiz and progress sections, display quiz complete section, final score and input for user to add initials
function showFinalScore() {

  quizComponents.setAttribute("style", "display:none");
  progressSection.setAttribute("style", "display:none")

  closerSection.setAttribute("style", "");

  userScore.innerHTML = timeRemaining;

}



function addToArray () {

    if (savedHighScores === null) {
        savedHighScores = [];
      }

    var userCurrentName = newInitials.value;
    var userCurrentScore = userScore.innerHTML;
   
    savedHighScores.push({name: userCurrentName, score: userCurrentScore});
    console.log(savedHighScores);

    addToLocalStorage();
}

//**didn't get this to work for local storage
//get user initials (input), and current user score, and add to local storage as an array, add each total score object to the existing array
function addToLocalStorage () {

    var savedHighScoresString = JSON.stringify(savedHighScores);
  
    localStorage.setItem('scoresupdate', savedHighScoresString);
  
    viewAllScores();
  
  }

//return array of stored values in local storage and display on page
function viewAllScores () {

  highScoresSection.setAttribute("style", "");
  closerSection.setAttribute("style", "display:none");

   getfromLocal();

}

function getfromLocal () {
    var savedHighScoresString = JSON.parse(localStorage.getItem('scoresupdate'));
    savedHighScores = savedHighScoresString;

    console.log(savedHighScoresString);

    holderSpot.innerHTML = JSON.stringify(savedHighScores);
}


function clearScores () {
  localStorage.clear(savedHighScores);
}

//kick off timer and hide the starter div with click events connected to the Start Button
startquizbtn.addEventListener("click", runTimer);
startquizbtn.addEventListener("click", displayQuestions);
choicesList.addEventListener("click", chooseAnswer);
addscorebtn.addEventListener("click", addToArray);
clearbtn.addEventListener("click", clearScores);
viewscores.addEventListener("click", viewAllScores);

getfromLocal ();



// startButton.addEventListener("click", function () {
//   //hide instruction
//   instruction.setAttribute("class", "hide");

//   // start the timer
//   setTime();
//   displayQuestion();
//   // answer question and move to next question
// });



