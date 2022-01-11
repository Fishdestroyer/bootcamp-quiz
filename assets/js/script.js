// researched wikipedia, google and old.org for questions and answers


var totalScore = 0;
var nextQuestion = -1;
var timeLeft = 0;
var quizTimer;
var feedbackEl = document.querySelector("#feedback");

const questions = [
    {
        question: "In what time frame was modern coding languages invented/ developed? ",
        choices: ["'The 1940's", "The 1950's", "The 1960's", "The 1970's"],
        answer: "The 1950's"
    },

    {// wikipedia
        question: "What is the first commercially available programming language?",
        choices: ["Fortran", "Python", "C++", "Javascript"],
        answer: "Fortran"
    },

    {//Wikipedia
        question: "What is recognized as the first published computer program?",
        choices: ["Short code", "Fortran", "Plankalkul", "Algorithm for the Analytical Engine"],
        answer: "Algorithm for the Analytical Engine"

    },

    {// wikipedia
        question: "What language did Alick Glennie develop?",
        choices: ["Fortran", "Autocode", "FLOW-MATIC", "Comtran"],
        answer: "Autocode"

    },

    {
        question: "In 1959, who designed COBOL?",
        choices: ["Grace Hopper", "John McCarthy", "CODASYL", "Konrad Zuse"],
        answer: "CODASYL"

    },

    {
        question: "What was the first programming language to feature the picture clause element?",
        choices: ["COMTRAN", "COBOL", "Lisp", "JOSS"],
        answer: "COMTRAN"

    },

    {
        question: "What language was developed for the UNIVAC 1?",
        choices: ["FACT", "BASIC", "PL/I", "FLOW-MATIC"],
        answer: "FLOW-MATIC"

    },

    {
        question: "Which of the following is NOT a programming language?",
        choices: ["LISP", "RPG", "Simula", "TRANE"],
        answer: "TRANE"

    },

    {
        question: "Which of the following are Lisp dialects?",
        choices: ["Racket", "Scheme", "Clojure", "All of these"],
        answer: "All of these"

    },

    {
        question: "What year was Lisp originally specified?",
        choices: ["1955,", "1957", "1963", "1958"],
        answer: "1958"

    },
]

function startQuiz() {

    timeLeft = 120;
    document.getElementById("timeLeft").innerHTML = timeLeft + " seconds";

    quizTimer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft + " seconds";
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            // If timer reaches 0- quiz ends and alerts the quiz taker
            window.alert("OH NO! TOO SLOW! PLEASE TRY AGAIN");
            endQuiz();
        }
        //Setes to countdown timer interval to 120 seconds
    }, 1200);

    nextNewQuestion();
}

function endQuiz() {
    clearInterval(quizTimer);
// end of quiz final score
    var finalQuizDetails = `
    <h2>Great job!</h2>
    <h3>Your final score is ` + totalScore + `!</h3>
    <h3>Please enter your initials below.</h3>
    <input type="text" id="name" placeholder="Please enter your initals">
    <button onclick="saveHighscore()" class="highscore-btn" title="Submit Highscore">Submit</button>`;

    document.getElementById("startpage").innerHTML = finalQuizDetails;
}
//demonstrates player highscore saved in their own localstorage
function saveHighscore() {
    localStorage.setItem("saveHighscore", totalScore);
    localStorage.setItem("Name", document.getElementById('name').value);

    getHighscore();
}

//after player saves highscore, turns into special page that allows user to either clear score and play again or simply play again without affecting their score on localstorage

function getHighscore() {
    var finalQuizDetails = `
    <h2>` + localStorage.getItem("Name") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("saveHighscore") + `</h1><br >
    <button onclick="clearHighscore()" class="clear-btn" title = "Clear Score and Play Again!">Clear Score and Play Again!</button>`;
        document.getElementById("startpage").innerHTML = finalQuizDetails;
}
// clear function clears high score from the user's local storage and brings the user back to the start page
function clearHighscore() {
    localStorage.setItem("Highscore", "");
    localStorage.setItem("name", "");

    resetGame();
}

//reset function puts user back to the beginning page and allows them to play the quiz again!
function resetGame() {
    clearInterval(quizTimer);
    totalScore = 0;
    nextQuestion = -1;
    timeLeft = 0;
    quizTimer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft + " seconds";

    window.location.reload();

    document.getElementById("startpage").innerHTML = finalQuizDetails;
}


//wrong answer reduces time by 5 seconds
function wrongAnswer() {
    timeLeft -= 5;

    if (timeLeft < 0) {
        timeLeft = 0;
    }
    feedbackEl.textContent = "WRONG! The answer was: " + questions[nextQuestion].answer;
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "hide");
    }, 1500);

    nextNewQuestion();

}


//correct answer grants the user 40 points/ maxmimum user high score is 400!
function correctAnswer() {
    totalScore += 40;

    feedbackEl.textContent = "Awesome, you got it! " + questions[nextQuestion].answer;
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "hide");
    }, 1500);

    nextNewQuestion();

}

//officially initates the question const and ensures correct answers are chosed, linking them to the above functions
function nextNewQuestion() {
    nextQuestion++;

    if (nextQuestion > questions.length - 1) {
        endQuiz();
        return;
    }

    var finalQuizDetails = "<h2>" + questions[nextQuestion].question + "</h2>"

    for (var i = 0; i < questions[nextQuestion].choices.length; i++) {
        var choiceButton = "<button onclick = \"[answerchoice]\">[CHOICE]</button>";
        choiceButton = choiceButton.replace("[CHOICE]", questions[nextQuestion].choices[i]);
        if (questions[nextQuestion].choices[i] === questions[nextQuestion].answer) {
            choiceButton = choiceButton.replace("[answerchoice]", "correctAnswer()");
        } else {
            choiceButton = choiceButton.replace("[answerchoice]", "wrongAnswer()");
        }
        finalQuizDetails += choiceButton
    }
    document.getElementById("startpage").innerHTML = finalQuizDetails;
}
