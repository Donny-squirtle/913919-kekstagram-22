import { isEscEvent } from './utils.js';

const pageBigPicture = document.querySelector('.big-picture');
const pageBigPictureClose = document.querySelector('.big-picture__cancel');
const popupCommentsCount = document.querySelector('.social__comment-count');
const popupCommentsLoad = document.querySelector('.comments-loader');
const pageBody = document.querySelector('body');
const socialComment = pageBigPicture.querySelector('.social__comments');
const COMMENTS = 5;

const closePopup = () => {
  pageBigPicture.classList.add('hidden');
  pageBody.classList.remove('modal-open');
}

pageBigPictureClose.addEventListener('click', () => {
  closePopup();
});
const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const showBigPicture = ({ url, likes, comments, description }) => {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  const commentsListFragment = document.createDocumentFragment();

  comments.forEach(({ avatar, message, name }) => {
    const commentElement = socialComment.querySelector('.social__comment').cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentsListFragment.appendChild(commentElement);
  });

  socialComment.innerHTML = '';
  socialComment.appendChild(commentsListFragment);

  const allComments = document.querySelectorAll('.social__comment');

  allComments.forEach((comment) => {
    comment.classList.add('hidden');
  });

  showComments(COMMENTS);

  if (comments.length <= COMMENTS) {
    popupCommentsCount.classList.add('hidden');
    popupCommentsLoad.classList.add('hidden');
  } else {
    popupCommentsCount.classList.remove('hidden');
    popupCommentsLoad.classList.remove('hidden');
  }
}

const showComments = (n) => {
  const hiddenComments = document.querySelectorAll('.social__comment.hidden');
  const initialComments = Array.prototype.slice.call(hiddenComments).slice(0, n);

  initialComments.forEach((comment) => {
    comment.classList.remove('hidden');
  });

  const quantityHiddenComments = document.querySelectorAll('.social__comment.hidden').length;
  document.querySelector('.displayed-comments').textContent = document.querySelectorAll('.social__comment').length - quantityHiddenComments;

  if (quantityHiddenComments === 0) {
    popupCommentsLoad.classList.add('hidden');
  }
};

popupCommentsLoad.addEventListener('click', () => {
  showComments(COMMENTS);
});
export { showBigPicture };
