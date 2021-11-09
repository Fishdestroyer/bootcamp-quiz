var totalScore = 0;
var nextQuestion = -1;
var timeLeft = 0;
var quizTimer;
var feedBackEl = document.querySelector("#feedback");
const questions = [
    {
        question:"In what time frame was coding languages invented/ developed? ";
        choices:["'The 1940's", "The 1950's", "The 1960's", "The 1970's"],
        answer: "The 1950's" 
    },

    {
        question:"What is the first commercially available programming language?",
        choices:["Fortran", "Python", "C++", "Javascript"],
        answer:"Fortran" 
    },

    {
        question:"What is recognized as the first published computer program?",
        choices:["Short code", "Fortran", "Plankalkul", "Algorithm for the Analytical Engine"],
        answer:"Algorithm for the Analytical Engine"

    }

    
]