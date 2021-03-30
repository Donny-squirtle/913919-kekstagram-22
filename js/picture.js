import { showBigPicture } from './big-picture.js';

const allUserPicture = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content;
const fragment = document.createDocumentFragment();
const pageBody = document.querySelector('body');

const renderUsersPictures = (data) => {
  data.forEach(({ id, url, likes, comments }) => {
    const userPicture = picture.cloneNode(true);

    userPicture.querySelector('a').id = `image${id}`;
    userPicture.querySelector('.picture__img').src = url;
    userPicture.querySelector('.picture__likes').textContent = likes;
    userPicture.querySelector('.picture__comments').textContent =
      comments.length;
    fragment.appendChild(userPicture);
  });

  allUserPicture.appendChild(fragment);

  document.querySelector('.pictures').addEventListener('click', (evt) => {
    const pictureElement = evt.target.closest('.picture');

    if (pictureElement) {
      const image = data.find(
        (element) => `image${element.id}` === pictureElement.id,
      );
      showBigPicture(image);

      pageBody.classList.add('modal-open');
    }
  });
};

export { renderUsersPictures };
