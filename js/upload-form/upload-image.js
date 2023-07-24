import {initScale, resetScale} from './scale.js';
import {setValidate, resetValidation} from './validate.js';
import {initSlider} from './slider.js';
import {isEscapeKey} from '../utils/util.js';

const uploadInput = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
// const imagePreview = document.querySelector('.img-upload__preview img');
// const effectsPreviewImages = document.querySelectorAll('.effects__preview');
const filterList = document.querySelector('.effects__list');
const defaultFilter = document.querySelector('input[checked].effects__radio').value;

const filterListChangeHendler = (event) => initSlider(event.target.value);

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener ('keydown', documentKeydownHandler);
  filterList.addEventListener('change', filterListChangeHendler);
};

const closeUploadForm = () => {
  uploadForm.reset();
  resetValidation();
  resetScale();
  initSlider(defaultFilter);
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener ('keydown', documentKeydownHandler);
  filterList.removeEventListener('change', filterListChangeHendler);
};

const uploadImageChangeHandler = () => openUploadForm();
const imgUploadCancelClickHandler = () => closeUploadForm();
const uploadFormSubmitHandler = (event) => {
  event.preventDefault();
};

function documentKeydownHandler(event) {
  if (isEscapeKey() && !event.target.closest('.text__hashtags') && !event.target.closest('.text__description')) {
    event.preventDefault();
    closeUploadForm();
  }
}

const initUploadForm = () => {
  initScale();
  setValidate();
  initSlider(defaultFilter);
  uploadInput.addEventListener('change', uploadImageChangeHandler);
  uploadForm.addEventListener('submit', uploadFormSubmitHandler);
  imgUploadCancel.addEventListener('click', imgUploadCancelClickHandler);
};


export {initUploadForm};
