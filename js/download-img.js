import { isEscEvent } from './utils.js';
import { textHashtag, textDescription } from './validation-form.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview').firstElementChild;
const imgUploadScale = document.querySelector('.img-upload__scale');
const uploadPreviewImg = document.querySelector('.img-upload__preview > img');

const scaleValue = {
  imgScaleMin: 25,
  imgScaleMax: 100,
  scaleStep: 25,
};

const changeImageSize = (scale) => {
  imgUploadPreview.style.transform = 'scale(' + scale / 100 + ')';
  scaleControlValue.setAttribute('value', scale + '%');

}

const scaleControlImage = (evt) => {
  let value = parseInt(scaleControlValue.value);

  if (evt.target.classList.contains('scale__control--smaller') && value > scaleValue.imgScaleMin) {
    value -= scaleValue.scaleStep;
  }

  if (evt.target.classList.contains('scale__control--bigger') && value < scaleValue.imgScaleMax) {
    value += scaleValue.scaleStep;
  }

  changeImageSize(value);
}

imgUploadScale.addEventListener('click', scaleControlImage);

const showEditWindow = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('.modal-open');
}

const resetImgScale = () => {
  uploadPreviewImg.style = 'transform: scale(1.00)';
  scaleControlValue.value = '100%';
}

const colseEditWindow = () => {
  document.querySelector('.effects__preview').click();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
  textHashtag.value = '';
  textDescription.value = '';
  resetImgScale();
}

uploadFile.onchange = () => {
  showEditWindow();
  document.addEventListener('keydown', onPopupEscKeydown);
}

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    colseEditWindow();
  }
};

uploadCancel.addEventListener('click', colseEditWindow);
