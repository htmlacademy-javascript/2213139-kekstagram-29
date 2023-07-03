import {createPhotoDescriptions} from './data.js';
import {renderBigPicture} from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');
const data = createPhotoDescriptions();
const fragment = document.createDocumentFragment();

// Создание одной миниатюры
const createThumbnail = (photo) => {
  const pictureClone = picture.cloneNode(true);
  const img = pictureClone.querySelector('.picture__img');
  img.src = photo.url;
  img.alt = photo.description;
  pictureClone.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureClone.querySelector('.picture__likes').textContent = photo.likes;
  pictureClone.addEventListener('click', () => renderBigPicture(photo));
  fragment.append(pictureClone);
};

const renderThumbnails = () => {
  data.forEach((item) => createThumbnail(item));
  picturesContainer.append(fragment);
};

export {renderThumbnails};
