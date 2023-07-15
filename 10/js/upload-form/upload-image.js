import {initScale, resetScale} from './scale.js';
import {setValidate, resetValidation} from './validate.js';
import {initSlider, resetSlider} from './slider.js';

const uploadInput = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener ('keydown', documentKeydownHandler);
};

const closeUploadForm = () => {
  uploadForm.reset();
  resetValidation();
  resetScale();
  resetSlider();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener ('keydown', documentKeydownHandler);
};

const uploadImageChangeHandler = () => openUploadForm();
const imgUploadCancelClickHandler = () => closeUploadForm();
const uploadFormSubmitHandler = (event) => {
  event.preventDefault();
};

function documentKeydownHandler(event) {
  if (event.key === 'Escape' && !event.target.closest('.text__hashtags') && !event.target.closest('.text__description')) {
    event.preventDefault();
    closeUploadForm();
  }
}

const initUploadForm = () => {
  initScale();
  setValidate();
  initSlider();
  uploadInput.addEventListener('change', uploadImageChangeHandler);
  uploadForm.addEventListener('submit', uploadFormSubmitHandler);
  imgUploadCancel.addEventListener('click', imgUploadCancelClickHandler);
};


export {initUploadForm};
