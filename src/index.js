import quizResult from './app.js';

const question1 = document.getElementById('q1');
const question2 = document.getElementById('q2');
const question3 = document.getElementById('q3');
const question4 = document.getElementById('q4');
const question5 = document.getElementById('q5');
const submitButton = document.getElementById('quizButton');
const quizMsg = document.getElementById('quiz-result');

submitButton.addEventListener('click', () => {
    const questionOneA = question1.value;
    const questionTwoA = question2.value;
    const questionThreeA = question3.value;
    const questionFourA = question4.value;
    const questionFiveA = question5.value;

    const score = quizResult(questionOneA, questionTwoA, questionThreeA, questionFourA, questionFiveA);
   

  
    const message = 'You got ' + score + '/5 correct';
    
    if(score === 5) {
        quizMsg.textContent = message + ' You are a good cat knower!';
    }
    else {
        quizMsg.textContent = message + ' but you missed at least one question.';
    }

});