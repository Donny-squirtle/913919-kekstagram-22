const getRandomNumber = (firstValue, secondValue) => {
  let randomNumber = (Math.floor((Math.random() * (secondValue - firstValue)) + firstValue));
  let result = (randomNumber > firstValue) ? randomNumber : firstValue;
  return result;
}

const getRandUniqNumbers = () => {
  const uniqNumbers = [];
  let isUniq = false;
  while (isUniq == false) {
    const rand = getRandomNumber(1, 1000);
    if (!uniqNumbers.includes(rand)) {
      uniqNumbers.push(rand);
      isUniq = true;
    }
  }
  return uniqNumbers[uniqNumbers.length - 1];
}

const maxStringLength = (sampleLength, maxLength) => {
  if (sampleLength.length > maxLength) {
    return false;
  }
  return true;
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export { isEscEvent };

export { maxStringLength };

export { getRandomNumber };

export { getRandUniqNumbers };
