const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment'); // будет шаблоном
const fragment = document.createDocumentFragment();
const commentCount = bigPicture.querySelector('.social__comment-count'); // счётчик комментариев
const commentsLoader = bigPicture.querySelector('.comments-loader'); // загрузка комментариев
const body = document.querySelector('body');
const buttonClose = bigPicture.querySelector('.cancel');

// слушатель события на кнопку esc
const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closedModal();
  }
};

// функция-обработчик события для закрытия bigPicture
function closedModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', closedModal);
  document.removeEventListener('keydown', onDocumentKeydown());
}

// функция-обработчик события для открытия bigPicture
const openModal = () => {
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden'); // скрытие счётчика комментариев
  commentsLoader.classList.add('hidden'); // скрытие загрузки комментариев
  body.classList.add('modal-open');

  buttonClose.addEventListener('click', closedModal);
  document.addEventListener('keydown', onDocumentKeydown);
};


const fillBigPicture = (photo) => {
  bigPicture.querySelector('.big-picture__img').firstElementChild.src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;

  const numberComments = 5; // показать 5 комментариев
  const comments = photo.comments; // получаем массив объектов с комментариями

  for (let i = 0; i < numberComments; i++) {
    const socialCommentClone = socialComment.cloneNode();
    socialCommentClone.innerHTML = `
      <img
        class="social__picture"
        src="${comments[i].avatar}"
        alt="${comments[i].name}"
        width="35" height="35">
      <p class="social__text">${comments[i].message}</p>`;

    fragment.append(socialCommentClone);
  }

  socialComments.textContent = '';
  socialComments.append(fragment);
};

const renderBigPicture = (objectPhoto) => {
  fillBigPicture(objectPhoto);
  openModal();
};


export {renderBigPicture};
