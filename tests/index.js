import quizResult from './src/app.js';
const test = QUnit.test;



test('all answers wrong', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const question1 = '';
    const question2 = '';
    const question3 = '';
    const question4 = '';
    const question5 = '';
    const expected = 0;

    //Act 
    const result = quizResult(question1, question2, question3, question4, question5);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(result, expected);
});

test('all answers right', (assert) => {
    //Arrange
    const question1 = 'morris';
    const question2 = 'butter';
    const question3 = 'black';
    const question4 = 'coyote';
    const question5 = 'crow';
    const expected = 5;
    //Act
    const result = quizResult(question1, question2, question3, question4, question5);
    //Assert
    assert.equal(result, expected);
});

test('does lowercase work correctly', (assert) => {
    //Arrange
    const question1 = 'Morris';
    const question2 = 'Butter';
    const question3 = 'BLACK';
    const question4 = 'Coyote';
    const question5 = 'cRow';
    const expected = 5;

    //Act
    const result = quizResult(question1, question2, question3, question4, question5);
    //Assert
    assert.equal(result, expected);
});
