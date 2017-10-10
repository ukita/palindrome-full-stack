const palindrome = require('../palindrome');

describe('palindrome', () => {
  it('should check if sentence is palindrome or not', () => {
    const firstSentence = 'ABA';
    const secondSentence = 'MACACO';
    const thirdSentence = 'A MAN A PLAN A CANAL PANAMA';

    expect(palindrome(firstSentence)).toBeTruthy();
    expect(palindrome(secondSentence)).toBeFalsy();
    expect(palindrome(thirdSentence)).toBeTruthy();
  });

  it('should ignore non-letter and uppercase characters', () => {
    const firstSentence = 'AbA';
    const secondSentence = 'M_A_C_A_C_O';
    const thirdSentence = 'A-MAN-A-PLAN-A-CANAL-PANAMA';

    expect(palindrome(firstSentence)).toBeTruthy();
    expect(palindrome(secondSentence)).toBeFalsy();
    expect(palindrome(thirdSentence)).toBeTruthy();
  });
});
