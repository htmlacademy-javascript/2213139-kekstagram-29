const FILTERS = {
  chrome: {
    name: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    name: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    name: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    name: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
  default: {
    name: null,
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
};

const effectValue = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = document.querySelector('.effect-level__slider');

const setContainerState = (value) => {
  if (value === 'none' || !value) {
    imagePreview.style.filter = 'none';
    sliderContainer.classList.add('hidden');
    return;
  }
  sliderContainer.classList.remove('hidden');
};

const createSlider = (filter) => {
  const {name, min, max, step, unit} = FILTERS[filter] || FILTERS.default;
  setContainerState(filter);
  noUiSlider.create(slider, {
    range: {
      min: min,
      max: max
    },
    start: max,
    step: step,
    connect: 'lower',
  });

  slider.noUiSlider.on('update', () => {
    const value = slider.noUiSlider.get();
    imagePreview.style.filter = `${name}(${value}${unit})`;
    effectValue.value = value;
  });
};

const initSlider = (filter) => {
  if (slider.noUiSlider) {
    slider.noUiSlider.destroy();
  }
  createSlider(filter);
};

export {initSlider};
