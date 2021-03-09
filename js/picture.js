import { getPhotosData } from './users.js';


const allUserPicture = document.querySelector('.pictures');
const picture = document.querySelector('#picture');
const userInformation = getPhotosData();
//const renderUsersPictures = () => {
//   for (let i = 1; i < userInformation.length; i++) {
//     const userPicture = picture.content.cloneNode(true);
//     allUserPicture.appendChild(userPicture);
//     userPicture.querySelector('.picture__img').setAttribute('src', userInformation[i].url);
//     userPicture.querySelector('.picture__comments').textContent = userInformation[i].comments.message;
//     userPicture.querySelector('.picture__likes').textContent = userInformation[i].likes;
//   }
// };
//renderUsersPictures();
userInformation.forEach((user) => {
  const userPicture = picture.content.cloneNode(true);
  userPicture.querySelector('.picture__img').setAttribute('src', user.url);
  userPicture.querySelector('.picture__comments').textContent = user.comments.message;
  userPicture.querySelector('.picture__likes').textContent = user.likes;
  allUserPicture.appendChild(userPicture);
});
