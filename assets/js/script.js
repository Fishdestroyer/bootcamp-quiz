// Var for Test
//min totalscore of quiz is 0, maximum score user makes is up to 400
var totalScore = 0;
var nextQuestion = -1; 
var timeLeft = 0;
var quizTimer;
var feedbackEl = document.querySelector("#feedback");

const questions = [

    {
        questionTitle: "Where does the term 'Cowboy' come from?",
        choices: ["A John Wayne movie","Billy the Kid was one", "Boys who worked cows", "The Spanish word 'Vaquero'"],
        answer: "The Spanish word 'Vaquero'" //answer is D
    },
        
    {
        questionTitle: "In the 17700's, what 3 states wre the first to start ranching in the US?",
        choices: ["Texas, New Mexico and Arizona territories", "California, Nevada and Arizona", "Arizona, New Mexico, Nevada", "Texas, New Mexico, Oklahoma"],
        answer: "Texas, New Mexico and Arizona territories" //answer is A
    },

    {
        questionTitle: "Arrays are a special type of objects in JavaScript. What can they store exactly in them?",
        choices: ["Strings", "Booleans", "Other arrays", "All of the Above"],
        answer: "All of the Above"
        //answer is D
    },

    {
        questionTitle: "Which boolean operator represents 'And'?",
        choices: ["&&", "||", "?!", "*"],
        answer: "&&"
        //answer is A
    },
        
 