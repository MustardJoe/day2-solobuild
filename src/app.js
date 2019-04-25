function quizResult(question1, question2, question3, question4, question5) {
    
    question1 = question1.toLowerCase();
    question2 = question2.toLowerCase();
    question3 = question3.toLowerCase();
    question4 = question4.toLowerCase();
    question5 = question5.toLowerCase();
    
    let score = 0;   

    if(question1 === 'morris') {
        score += 1;
    }

    if(question2 === 'butter') {
        score += 1;
    }

    if(question3 === 'black') {
        score += 1;
    }

    if(question4 === 'coyote') {
        score += 1;
    }

    if(question5 === 'crow') {
        score += 1;
    }

    return score;
};
export default quizResult