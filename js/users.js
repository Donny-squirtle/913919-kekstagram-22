import { getRandUniqNumbers, getRandomNumber } from './utils.js';

const names = ['Иван', 'Шерлок', 'Яков', 'Макар',
  'Доминик', 'Ян', 'Шарль', 'Леонард', 'Феликс',
  'Олег', 'Донат', 'Карен', 'Юрий', 'Вячеслав',
  'Степан', 'Оскар', 'Ярослав', 'Яков', 'Чарльз',
  'Тит', 'Чарльз', 'Камиль', 'Эрик', 'Даниил', 'Адам'];

const getUserInformation = (index) => {
  return {
    id: index,
    url: 'photos/' + index + '.jpg',
    description: 'Lol',
    likes: getRandomNumber(15, 200),
    comments: {
      id: getRandUniqNumbers(),
      avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
      message: '**',
      name: names[getRandomNumber(1, 25)],
    },
  }
};

const getPhotosData = () => {
  const MAX_USERS = 25;
  const arr = [];
  for (let i = 1; i <= MAX_USERS; i++) {
    arr.push(getUserInformation(i));
  }
  return arr;
}

export { getUserInformation };
export { getPhotosData };
