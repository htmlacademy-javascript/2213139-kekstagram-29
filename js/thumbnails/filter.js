import {renderThumbnails} from './render-thumbnails.js';
import {debounce} from '../utils/util.js';

const RANDOM_PICTURES_COUNT = 10;
const DELAY = 500;
const FILTERS_RANDOM = 'filter-random';
const FILTERS_DISCUSSED = 'filter-discussed';

const filters = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');
const picturesContainer = document.querySelector('.pictures');

const filterByCommentsCount = (data) => (data.slice().sort((a, b) => b.comments.length - a.comments.length));

const filterInRandomOrder = (data) => {
  const dataClone = data.slice();
  for (let i = dataClone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dataClone[i], dataClone[j]] = [dataClone[j], dataClone[i]];
  }

  return dataClone.slice(0, RANDOM_PICTURES_COUNT);
};

const getFilteredData = (id, data) => {
  switch (id) {
    case FILTERS_RANDOM:
      return filterInRandomOrder(data);
    case FILTERS_DISCUSSED:
      return filterByCommentsCount(data);
    default:
      return data;
  }
};

const renderFilteredPictures = (id, data) => {
  picturesContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  renderThumbnails(getFilteredData(id, data));
};

const renderPictures = debounce((id, data) => renderFilteredPictures(id, data), DELAY);

const initFilter = (data) => {
  filters.classList.remove('img-filters--inactive');

  filtersForm.addEventListener('click', (event) => {
    if (event.target.closest('.img-filters__button') && !event.target.classList.contains('img-filters__button--active')) {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      event.target.classList.add('img-filters__button--active');
      renderPictures(event.target.id, data);
    }
  });
};

export {initFilter, getFilteredData};
