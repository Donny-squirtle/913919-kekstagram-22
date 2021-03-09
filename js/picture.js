import { getPhotosData } from './users.js';


const allUserPicture = document.querySelector('.pictures');
const picture = document.querySelector('#picture');
const arr = getPhotosData();
const renderUsersPictures = () => {
  for (let i = 1; i < arr.length; i++) {
    const userPicture = picture.content.cloneNode(true);
    allUserPicture.appendChild(userPicture);
    userPicture.querySelector('.picture__img').setAttribute('src', arr[i].url);
    userPicture.querySelector('.picture__comments').textContent = arr[i].comments.message;
    userPicture.querySelector('.picture__likes').textContent = arr[i].likes;
  }
};
renderUsersPictures();

