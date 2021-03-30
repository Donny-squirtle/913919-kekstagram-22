import { showAlert } from './utils.js';
const getPictureData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      onSuccess(posts);
    })
    .catch(() => {
      showAlert('Не удалось получить посты с сервера. Попробуйте ещё раз');
    });
}

export { getPictureData };
