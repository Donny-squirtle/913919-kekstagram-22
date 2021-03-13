import { dataPictures } from './users.js';


const allUserPicture = document.querySelector('.pictures');
const picture = document.querySelector('#picture');

const renderUsersPictures = () => {
  dataPictures.forEach((user) => {
    const userPicture = picture.content.cloneNode(true);
    userPicture.querySelector('.picture__img').setAttribute('src', user.url);
    userPicture.querySelector('.picture__comments').textContent = user.comments.message;
    userPicture.querySelector('.picture__likes').textContent = user.likes;
    userPicture.querySelector('.picture').setAttribute('id', user.id);
    allUserPicture.appendChild(userPicture);
  });
}
renderUsersPictures();