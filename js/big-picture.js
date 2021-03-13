import { dataPictures } from './users.js';
const pageBigPicture = document.querySelector('.big-picture');
const pageBigPictureClose = document.querySelector('.big-picture__cancel');
const popupCommentsCount = document.querySelector('.social__comment-count');
const popupCommentsLoad = document.querySelector('.comments-loader');
const pageBody = document.querySelector('body');
const pictures = document.querySelector('.pictures');

const onPicturesClick = (evt) => {
  const pictureId = evt.target.parentElement.id;
  const pictureObject = dataPictures.find(picture => picture.id === +pictureId);
  showBigPicture(pictureObject.url, pictureObject.likes, pictureObject.description);
  bigPictureComment(pictureObject.comments.message, pictureObject.comments.avatar, pictureObject.comments.name);
  showPopup();
};

const showBigPicture = (pictureImage, pictureLikes, pictureDescription) => {
  document.querySelector('.big-picture__img img').setAttribute('src', pictureImage);
  document.querySelector('.likes-count').textContent = pictureLikes;
  document.querySelector('.social__header .social__caption').textContent = pictureDescription;
}

const bigPictureComment = (textComment, userAvatar, userName) => {
  document.querySelector('.social__text').textContent = textComment;
  document.querySelector('.social__comment .social__picture').setAttribute('src', userAvatar);
  document.querySelector('.social__comment .social__picture').setAttribute('alt', userName);
}
const showPopup = () => {
  popupCommentsCount.classList.add('hidden');
  popupCommentsLoad.classList.add('hidden');
  pageBody.classList.add('modal-open');
  pageBigPicture.classList.remove('hidden');
}

pictures.addEventListener('click', onPicturesClick);

const closePopup = () => {
  pageBigPicture.classList.add('hidden');
  popupCommentsCount.classList.remove('hidden');
  popupCommentsLoad.classList.remove('hidden');
  pageBody.classList.remove('modal-open');
}
pageBigPictureClose.addEventListener('click', function () {
  closePopup();
});
