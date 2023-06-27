import {createPhotoDescriptions} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');
const data = createPhotoDescriptions();
const fragment = document.createDocumentFragment();

const createThumbnail = (item) => {
  const pictureClone = picture.cloneNode(true);
  const img = pictureClone.querySelector('.picture__img');
  img.src = item.url;
  img.alt = item.description;
  pictureClone.querySelector('.picture__comments').textContent = item.comments.length;
  pictureClone.querySelector('.picture__likes').textContent = item.likes;
  fragment.append(pictureClone);
};

const renderThumbnails = () => {
  data.forEach((item) => createThumbnail(item));
  picturesContainer.append(fragment);
};

export {renderThumbnails};
