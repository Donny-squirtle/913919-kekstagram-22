import { isEscEvent } from './utils.js';

const SYMBOLS = 20;
const HASHTAG = 5;
const uploadImgModal = document.querySelector('.img-upload__overlay');
const textHashtag = uploadImgModal.querySelector('.text__hashtags');
const textDescription = uploadImgModal.querySelector('.text__description');

const validateTag = (hashtag) => {
  const regexp = /^#\w{1,19}$/;
  const searchMatches = hashtag.match(regexp);
  return searchMatches !== null;
};

const validateHashtags = (str) => {
  if (str.trim().length === 0) {
    textHashtag.setCustomValidity('');
    return true;
  }

  const hashtags = str
    .toLowerCase()
    .split(' ')
    .filter((words) => words.length !== 0);

  let validate = true;

  hashtags.forEach((index) => {
    const tag = index;

    if (!validateTag(index)) {
      textHashtag.setCustomValidity('Hashtag can only contain letters and numbers');
      validate = false;
    }

    if (tag.length > SYMBOLS) {
      textHashtag.setCustomValidity('Maximum hashtag length 20 symbols(include #)');
      validate = false;
    }

    if (!tag.startsWith('#')) {
      textHashtag.setCustomValidity('Hashtag must start with #');
      validate = false;
    }
  });

  if (hashtags.length !== new Set(hashtags).size) {
    textHashtag.setCustomValidity('Hashgtags cannot be used twice');
    validate = false;
  }

  if (hashtags.length > HASHTAG) {
    textHashtag.setCustomValidity('You cant use more then five hashtags');
    validate = false;
  }

  validate && textHashtag.setCustomValidity('');
  return validate;
};

const onFieldForRecording = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

textHashtag.addEventListener('keydown', onFieldForRecording);
textDescription.addEventListener('keydown', onFieldForRecording);

textHashtag.addEventListener('input', () => {
  if (!validateHashtags(textHashtag.value)) {
    textHashtag.reportValidity();
  }
});

const mainBlock = document.querySelector('main');

const MessageType = {
  SUCCESS: document.querySelector('#success').content.querySelector('.success').cloneNode(true),
  ERROR: document.querySelector('#error').content.querySelector('.error').cloneNode(true),
};

const showMessage = (messageType) => {
  const buttonClosePopup = messageType.querySelector('button');

  const fillMessage = () => {
    mainBlock.appendChild(messageType);
    buttonClosePopup.addEventListener('click', onButtonClosePopupClick);
    document.addEventListener('keydown', onPopupEscKeydown);
    mainBlock.addEventListener('click', onCloseClickOutside);
  };

  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      onButtonClosePopupClick();
    }
  };

  const onButtonClosePopupClick = () => {
    mainBlock.removeChild(messageType);
    document.removeEventListener('keydown', onPopupEscKeydown);
    mainBlock.removeEventListener('click', onCloseClickOutside);
    buttonClosePopup.removeEventListener('click', onButtonClosePopupClick);
  };

  const onCloseClickOutside = (evt) => {
    if (evt.target !== messageType.querySelector('div')) {
      onButtonClosePopupClick();
      return;
    }
  };

  fillMessage();
};

const showError = () => {
  showMessage(MessageType.ERROR);
};

const showSuccess = () => {
  showMessage(MessageType.SUCCESS);
};

export { showError, showSuccess, textHashtag, textDescription, validateHashtags };
