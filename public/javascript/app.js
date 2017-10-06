const sentenceInput = document.querySelector('#sentence');
const result = document.querySelector('#result');

async function isPalindrome(sentence) {
  let palindrome;

  const res = await fetch('/palindrome', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ sentence }),
  });

  return res.ok;
}

async function handleKeyUp() {
  if(!this.value) return result.innerHTML = '';

  const palindrome = await isPalindrome(this.value);

  if (palindrome) {
    result.innerHTML = `<b>${this.value}</b> is a palindrome.`
  } else {
    result.innerHTML = `<b>${this.value}</b> is not a palindrome.`
  }
}

sentenceInput.addEventListener('keyup', handleKeyUp);
