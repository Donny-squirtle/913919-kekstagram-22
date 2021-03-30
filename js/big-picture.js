import { isEscEvent } from './utils.js';

const COMMENTS = 5;
const bigPicture = document.querySelector('.big-picture');
const socialComment = bigPicture.querySelector('.social__comments');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const bodyOff = document.querySelector('body');
const popupCommentsLoader = bigPicture.querySelector('.comments-loader');
const popupCommentsCount = bigPicture.querySelector('.social__comment-count');

const closePopup = () => {
  bigPicture.classList.add('hidden');
  bodyOff.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

bigPictureClose.addEventListener('click', () => {
  closePopup();
});

const onPopupEscKeydown = (evt) => {
  evt.preventDefault();
  if (isEscEvent(evt)) {
    closePopup();
  }
};

const showBigPicture = ({ url, likes, comments, description }) => {
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
    popupCommentsLoader.classList.add('hidden');
  } else {
    popupCommentsCount.classList.remove('hidden');
    popupCommentsLoader.classList.remove('hidden');
  }
}

const showComments = (quantity) => {
  const hiddenComments = document.querySelectorAll('.social__comment.hidden');
  const initialComments = Array.prototype.slice.call(hiddenComments).slice(0, quantity);

  initialComments.forEach((comment) => {
    comment.classList.remove('hidden');
  });

  const quantityHiddenComments = document.querySelectorAll('.social__comment.hidden').length;
  document.querySelector('.displayed-comments').textContent = document.querySelectorAll('.social__comment').length - quantityHiddenComments;

  if (quantityHiddenComments === 0) {
    popupCommentsLoader.classList.add('hidden');
  }
};

popupCommentsLoader.addEventListener('click', () => {
  showComments(COMMENTS);
});

export { showBigPicture };
