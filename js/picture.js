import { getPhotosData } from './users.js';


const allUserPicture = document.querySelector('.pictures');
const picture = document.querySelector('#picture');
const arr = getPhotosData();
const getUsersPictures = () => {
  for (let i = 1; i < arr.length; i++) {
    const userPicture = picture.content.cloneNode(true);
    const userPictureImage = userPicture.querySelector('.picture__img');
    const userPictureComments = userPicture.querySelector('.picture__comments');
    const userPictureLikes = userPicture.querySelector('.picture__likes');
    allUserPicture.appendChild(userPicture);
    userPictureImage.setAttribute('src', arr[i].url);
    userPictureComments.textContent = arr[i].comments.message;
    userPictureLikes.textContent = arr[i].likes;
  }
};
getUsersPictures();

