/* global _:readonly */
import { renderUsersPictures } from './picture.js';

import { getArrayWithUniqueNumbers } from './utils.js';

const RANDOM_PICTURES_QUANTITY = 10;
const BIDE = 500;
const FILTER_BUTTON_ACTIVE = 'img-filters__button--active';

const setPictureFilter = (pictures) => {
  const imgFilters = document.querySelector('.img-filters');
  imgFilters.classList.remove('img-filters--inactive');

  const getFilterDefault = document.querySelector('#filter-default');
  const getFilterRandom = document.querySelector('#filter-random');
  const getFilterDiscussed = document.querySelector('#filter-discussed');

  const filtersForm = document.querySelector('.img-filters');

  const renderedPicturesByDefaultCopy = Object.assign([], pictures);

  const defaultFilter = () => {
    clearPictures();
    renderUsersPictures(renderedPicturesByDefaultCopy);
    clearActiveFilter();
    getFilterDefault.classList.add(FILTER_BUTTON_ACTIVE);
  };

  const randomFilter = () => {
    const sortRandomPictures = [];
    const uniqueNumbersArray = getArrayWithUniqueNumbers(pictures.length);

    for (let i = 0; i < RANDOM_PICTURES_QUANTITY; i++) {
      let current = uniqueNumbersArray[i] - 1;
      sortRandomPictures.push(renderedPicturesByDefaultCopy[current])
    }

    clearPictures();
    renderUsersPictures(sortRandomPictures);
    clearActiveFilter();
    getFilterRandom.classList.add(FILTER_BUTTON_ACTIVE);
  };

  const discussedFilter = () => {
    const sortByCommentsPictures = Object.assign([], renderedPicturesByDefaultCopy);

    sortByCommentsPictures.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });

    clearPictures();
    renderUsersPictures(sortByCommentsPictures);
    clearActiveFilter();
    getFilterDiscussed.classList.add(FILTER_BUTTON_ACTIVE);
  };

  const filterTypeAction = {
    'filter-default': defaultFilter,
    'filter-random': randomFilter,
    'filter-discussed': discussedFilter,
  };

  const onFilterFormClick = (evt) => {
    filterTypeAction[evt.target.id]();
  }

  filtersForm.addEventListener('click', _.debounce(onFilterFormClick, BIDE))

  const clearPictures = () => {
    const allPicturesList = document.querySelectorAll('.picture');
    for (let picture of allPicturesList) {
      picture.remove();
    }
  };

  const clearActiveFilter = () => {
    const imgFilters = document.querySelectorAll('.img-filters__button');
    for (let button of imgFilters) {
      button.classList.remove(FILTER_BUTTON_ACTIVE)
    }
  };
};

export { setPictureFilter }
