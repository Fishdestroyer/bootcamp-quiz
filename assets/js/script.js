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
    <h3>Please enter your initials to submit your score in the highscore chart.</h3>
    <input type="text" id="name" placeholder="Please enter your initals>
    <button onclick="saveHighscore()" class="highscore-btn" title="Submit Highscore">Submit</button>`;

    document.getElementById("startpage").innerHTML = finalQuizDetails;
}
//demonstrates player highscore saved in their own localstorage

