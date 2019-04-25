import getHeadsOrTails from '../src/get-heads-or-tails.js';
const test = QUnit.test;

test('gets heads for less than .5', (assert) => {
    // arrange
    const number = .49;
    const expected = 'heads';

    // act
    const result = getHeadsOrTails(number);

    // assert
    assert.equal(result, expected);
});

test('returns tails for equal or greater than .5', (assert) => {
    const number = .5;
    const expected = 'tails';

    const result = getHeadsOrTails(number);

    assert.equal(result, expected);
});
