import { getRandUniqNumbers, getRandomNumber } from './random.js';
import { names } from './user-names.js';

const getUserInformation = (index) => {
  return {
    id: index,
    url: 'photos/' + index + '.jpg',
    description: 'Lol',
    likes: getRandomNumber(15, 200),
    commens: {
      id: getRandUniqNumbers(),
      avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
      message: '**',
      name: names[getRandomNumber(1, 25)],
    },
  }
};

const getPhotosData = () => {
  const arr = [];
  const MAX_USERS = 25;
  for (let i = 1; i <= MAX_USERS; i++) {
    arr.push(getUserInformation(i));
  }
  return arr;
}

export { getUserInformation };
export { getPhotosData };
