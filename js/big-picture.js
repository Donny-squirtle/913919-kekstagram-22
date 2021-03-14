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
  showBigPicture(pictureObject.url, pictureObject.likes, pictureObject.description, pictureObject.comments.message, pictureObject.comments.avatar, pictureObject.comments.name);
  showPopup();
};

const onCloseBtnClick = () => {
  closePopup();
}

const showBigPicture = (pictureImage, pictureLikes, pictureDescription, textComment, userAvatar, userName) => {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('.big-picture__img img').setAttribute('src', pictureImage);
  bigPicture.querySelector('.likes-count').textContent = pictureLikes;
  bigPicture.querySelector('.social__header .social__caption').textContent = pictureDescription;
  bigPicture.querySelector('.social__text').textContent = textComment;
  bigPicture.querySelector('.social__comment .social__picture').setAttribute('src', userAvatar);
  bigPicture.querySelector('.social__comment .social__picture').setAttribute('alt', userName);
}

const showPopup = () => {
  popupCommentsCount.classList.add('hidden');
  popupCommentsLoad.classList.add('hidden');
  pageBody.classList.add('modal-open');
  pageBigPicture.classList.remove('hidden');
}

const closePopup = () => {
  pageBigPicture.classList.add('hidden');
  popupCommentsCount.classList.remove('hidden');
  popupCommentsLoad.classList.remove('hidden');
  pageBody.classList.remove('modal-open');
}

pageBigPictureClose.addEventListener('click', onCloseBtnClick);

pictures.addEventListener('click', function (evt) {
  if (evt.target.parentElement.className === 'picture') {
    onPicturesClick(evt);
  }
});
