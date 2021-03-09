import { getPhotosData } from './users.js';


const allUserPicture = document.querySelector('.pictures');
const picture = document.querySelector('#picture');

const userInformation = getPhotosData();
userInformation.forEach((user) => {
  const userPicture = picture.content.cloneNode(true);
  userPicture.querySelector('.picture__img').setAttribute('src', user.url);
  userPicture.querySelector('.picture__comments').textContent = user.comments.message;
  userPicture.querySelector('.picture__likes').textContent = user.likes;
  allUserPicture.appendChild(userPicture);
});
