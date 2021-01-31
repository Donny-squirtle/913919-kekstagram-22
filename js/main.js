const getRandomNumber = function (firstValue, secondValue) {
  if (firstValue < 0, secondValue < 0, firstValue >= secondValue) {
    return console.log('Enter other values');
  }
  return (Math.floor((Math.random() * firstValue) + secondValue));
}
window.console.log(getRandomNumber(10, 10));
const maxStringLength = function name(sampleLength, maxLength) {
  if (sampleLength.length > maxLength) {
    console.log('Incorrect line lendth');
  }
  console.log(sampleLength);
}
window.console.log(maxStringLength('Результат: true, если строка проходит по длине, и false — если не проходит', 1000));
