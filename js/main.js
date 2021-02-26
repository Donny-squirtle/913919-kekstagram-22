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

const uniqNumbers = [];
const getRandUniqNumbers = function () {
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

const names = ['Иван', 'Шерлок', 'Яков', 'Макар',
  'Доминик', 'Ян', 'Шарль', 'Леонард', 'Феликс',
  'Олег', 'Донат', 'Карен', 'Юрий', 'Вячеслав',
  'Степан', 'Оскар', 'Ярослав', 'Яков', 'Чарльз',
  'Тит', 'Чарльз', 'Камиль', 'Эрик', 'Даниил', 'Адам'];

// const getUserInformation = function () {
//   return {
//     id: i,
//     url: 'photos/' + i + '.jpg',
//     description: 'Lol',
//     likes: getRandomNumber(15, 200),
//     commens: {
//       id: getRandUniqNumbers(),
//       avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
//       message: '**',
//       name: names[getRandomNumber(1, 25)],
//     },
//   }
// };
const getPhotosData = () => {
  const arr = [];
  const maxUsers = 25;
  for (let i = 1; i <= maxUsers; i++) {
    arr.push({
      id: i,
      url: 'photos/' + i + '.jpg',
      description: 'Lol',
      likes: getRandomNumber(15, 200),
      commens: {
        id: getRandUniqNumbers(),
        avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
        message: '**',
        name: names[getRandomNumber(1, 25)],
      },
    });
  }
  return arr;
}
window.console.log(getPhotosData());
