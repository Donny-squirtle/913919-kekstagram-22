const effectLevelSlider = document.querySelector('.effect-level__slider');
const imgUploadEffects = document.querySelector('.img-upload__effects');
const imgUploadEffectsLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const uploadPreviewImg = document.querySelector('.img-upload__preview > img');

const silderValue = {
  MIN: 0,
  MAX: 100,
  STEP: 1,

}

imgUploadEffectsLevel.classList.add('visually-hidden');

const imageEffects = {
  none: () => {
    imgUploadEffectsLevel.classList.add('visually-hidden')
    return 'none';
  },
  chrome: () => {
    imgUploadEffectsLevel.classList.remove('visually-hidden')
    return `grayscale(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },
  sepia: () => {
    imgUploadEffectsLevel.classList.remove('visually-hidden')
    return `sepia(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },
  marvin: () => {
    imgUploadEffectsLevel.classList.remove('visually-hidden')
    return `invert(${Math.floor(effectLevelValue.value)}%)`;
  },
  phobos: () => {
    imgUploadEffectsLevel.classList.remove('visually-hidden')
    return `blur(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01}px)`;
  },
  heat: () => {
    imgUploadEffectsLevel.classList.remove('visually-hidden')
    return `brightness(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01})`;
  },
}

let endClass = '';

const useEffect = (evt) => {
  if (evt.target.classList.contains('effects__preview')) {
    if (endClass !== '') {
      uploadPreviewImg.classList.remove(endClass);
    }
    effectLevelSlider.noUiSlider.set(100);
    let currentClass = evt.target.classList[1];
    endClass = currentClass;
    uploadPreviewImg.classList.add(currentClass);
    uploadPreviewImg.style.filter = imageEffects[currentClass.replace('effects__preview--', '')]();
  }
};

imgUploadEffects.addEventListener('click', useEffect)

window.noUiSlider.create(effectLevelSlider, {
  range: {
    'min': silderValue.MIN,
    'max': silderValue.MAX,
  },
  start: silderValue.MAX,
  connect: 'lower',
});
effectLevelSlider.noUiSlider.on('change', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();

  uploadPreviewImg.style.filter = imageEffects[endClass.replace('effects__preview--', '')]();
});
