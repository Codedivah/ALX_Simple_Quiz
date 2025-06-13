'use strict';

function checkAnswer() {
    const correctAnswer="4";
    const  feedback= document.getElementById("feedback");
// Clear the input field
    /*feedback.textContent = "Checking your answer...";*/

        

   const userAnswer= document.querySelector('input[name="quiz"]:checked').value;
    if (userAnswer === correctAnswer) {
        feedback.textContent= ("Correct! Well done.");
    } else {
        feedback.textContent= ("That's incorrect. Try again!");
    }
}

   const submitButton= document.getElementById('submit-answer'); 
    submitButton.addEventListener('click',checkAnswer);