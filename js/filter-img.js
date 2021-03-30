const imgUploadEffects = document.querySelector('.img-upload__effects');
const imgUploadEffectsLevel = document.querySelector('.img-upload__effect-level');
const effectsLevelSlider = document.querySelector('.effect-level__slider');
const uploadPreviewImg = document.querySelector('.img-upload__preview > img');
const effectLevelValue = document.querySelector('.effect-level__value');
imgUploadEffectsLevel.classList.add('visually-hidden')
let endClass = '';
const sliderValue = {
  MAX: 100,
  MIN: 0,
  STEP: 1,
}


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

const onEffectsGroup = (evt) => {
  if (evt.target.classList.contains('effects__preview')) {
    if (endClass !== '') {
      uploadPreviewImg.classList.remove(endClass);
    }
    effectsLevelSlider.noUiSlider.set(100);
    let currentClass = evt.target.classList[1];
    endClass = currentClass;

    uploadPreviewImg.classList.add(currentClass);
    uploadPreviewImg.style.filter = imageEffects[currentClass.replace('effects__preview--', '')]();
  }
};

imgUploadEffects.addEventListener('click', onEffectsGroup);

window.noUiSlider.create(effectsLevelSlider, {
  start: sliderValue.MAX,
  connect: 'lower',
  range: {
    min: sliderValue.MIN,
    max: sliderValue.MAX,
  },
});

effectsLevelSlider.noUiSlider.on('change', () => {
  effectLevelValue.value = effectsLevelSlider.noUiSlider.get();

  uploadPreviewImg.style.filter = imageEffects[endClass.replace('effects__preview--', '')]();
});
export { effectLevelValue, imgUploadEffectsLevel };
