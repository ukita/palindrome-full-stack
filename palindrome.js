function format(sentence) {
  return sentence.toLowerCase().replace(/\W/g, '');
}

function reverse(sentence) {
  return sentence.split('').reverse().join('');
}

module.exports = (sentence) => {
  const formatted = format(sentence);
  const reversed = reverse(formatted);

  return formatted === reversed;
}
