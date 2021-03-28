import { isEscEvent } from './utils.js';

const imgUploadModal = document.querySelector('.img-upload__overlay');
const textDescription = imgUploadModal.querySelector('.text__description');
const textHashtag = imgUploadModal.querySelector('.text__hashtags');
const SYMBOLS = 20;
const HASHTAG = 5;

const validateTag = (hashtag) => {
  const regexp = /^#\w{1,19}$/;
  const searchMatches = hashtag.match(regexp);
  return searchMatches !== null;
};

const onFieldForRecording = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

const validateTags = (str) => {
  if (str.trim().length === 0) {
    textHashtag.setCustomValidity('');
    return true;
  }

  const hashtag = str
    .toLowerCase()
    .split(' ')
    .filter((words) => words.length !== 0);

  let validate = true;

  hashtag.forEach((index) => {
    const tag = index;

    if (!validateTag(index)) {
      textHashtag.setCustomValidity('Hashtag can only contain letters and numbers');
      validate = false;
    }
    if (!tag.startsWith('#')) {
      textHashtag.setCustomValidity('Hashtag must start with #');
      validate = false;
    }

    if (tag.length > SYMBOLS) {
      textHashtag.setCustomValidity('Maximum hashtag length 20 symbols(include #)');
      validate = false;
    }
  });
  ///////////////////////////
  if (hashtag.length !== new Set(hashtag).size) {
    textHashtag.setCustomValidity('Hashtags cannot be used twice');
    validate = false;
  }

  if (hashtag.length > HASHTAG) {
    textHashtag.setCustomValidity('You cant use more then five hashtags');
    validate = false;
  }

  validate && textHashtag.setCustomValidity('');
  return validate;
};
//////////////////////////////////////////////////////////////////
textHashtag.addEventListener('keydown', onFieldForRecording);
textDescription.addEventListener('keydown', onFieldForRecording);

textHashtag.addEventListener('input', () => {
  if (!validateTags(textHashtag.value)) {
    textHashtag.reportValidity();
  }
});

const mainBlock = document.querySelector('main');

const message = {
  SUCCESS: document.querySelector('#success').content.querySelector('.success').cloneNode(true),
  ERROR: document.querySelector('#error').content.querySelector('.error').cloneNode(true),
};

const showMessage = (message) => {
  const buttonClosePopup = message.querySelector('button');

  const getMessage = () => {
    mainBlock.appendChild(message);
    buttonClosePopup.addEventListener('click', closePopup);
    document.addEventListener('keydown', onPopupEscKeydown);
    mainBlock.addEventListener('click', onCloseClickOutside);
  };

  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closePopup();
    }
  };

  const closePopup = () => {
    mainBlock.removeChild(message);
    document.removeEventListener('keydown', onPopupEscKeydown);
    mainBlock.removeEventListener('click', onCloseClickOutside);
    buttonClosePopup.removeEventListener('click', closePopup);
  };

  const onCloseClickOutside = (evt) => {
    if (evt.target === message.querySelector('div')) return;
    closePopup();
  };

  getMessage();
};

const showError = () => {
  showMessage(message.ERROR);
};

const showSuccess = () => {
  showMessage(message.SUCCESS);
};

export { textHashtag, textDescription, showError, showSuccess };
