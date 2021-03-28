import { showErrorWindow } from './utils.js';

const getPictureData = (load) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      load(posts);
    })
    .catch(() => {
      showErrorWindow('Cant download pictures from server');
    });
}

export { getPictureData }
