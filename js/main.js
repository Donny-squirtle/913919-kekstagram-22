const getRandomNumber = function (firstValue, secondValue) {
  let randomNumber = (Math.floor((Math.random() * (secondValue - firstValue)) + firstValue));
  let result = (randomNumber > firstValue) ? randomNumber : firstValue;
  return result;
}
window.console.log(getRandomNumber(21, 18));
const maxStringLength = function name(sampleLength, maxLength) {
  if (sampleLength.length > maxLength) {
    return false;
  }
  return true;
}
window.console.log(maxStringLength('Результат: true, если строка проходит по длине, и false — если не проходит', 10));
