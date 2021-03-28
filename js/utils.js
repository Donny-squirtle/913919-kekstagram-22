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

const ERROR_TIME = 1000000;
const showErrorWindow = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#e62136';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ERROR_TIME);
}

export { showErrorWindow };

export { isEscEvent };

export { maxStringLength };

export { getRandomNumber };

export { getRandUniqNumbers };
