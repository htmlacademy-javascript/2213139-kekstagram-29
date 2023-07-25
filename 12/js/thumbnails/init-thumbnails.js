import {renderThumbnails} from './render-thumbnails.js';
import {getData} from '../utils/api.js';
import {showMessage} from '../utils/messages.js';
import {initFilter, getFilteringData} from './filter.js';

const GET_URL = 'https://29.javascript.pages.academy/kekstagram/data';
const ERROR_TEXT = 'Ошибка загрузки данных';
const STATE = 'error';

const currentId = document.querySelector('.img-filters__button--active').id;

const getSuccess = (data) => {
  initFilter(data);
  renderThumbnails(getFilteringData(currentId, data));
};

const getError = () => showMessage(STATE, ERROR_TEXT);

const initThumbnails = () => getData(GET_URL, getSuccess, getError);

export {initThumbnails};
