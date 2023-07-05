const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment'); // будет шаблоном
const commentCount = bigPicture.querySelector('.social__comment-count'); // счётчик комментариев
const commentsLoader = bigPicture.querySelector('.comments-loader'); // загрузка комментариев
const buttonClose = bigPicture.querySelector('.cancel');
const bigImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');

const hideElements = () => {
  commentsLoader.remove();
  commentCount.remove();
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  buttonClose.addEventListener('click', buttonCloseClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', buttonCloseClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

function buttonCloseClickHandler (event) {
  event.preventDefault();
  closeModal();
}

function documentKeydownHandler (event) {
  if (event.key === 'Escape' && !event.target.closest('.social__footer-text')) {
    closeModal();
  }
}

const fillComment = (item) => {
  const comment = socialComment.cloneNode(true);
  const socialPicture = comment.querySelector('.social__picture');
  socialPicture.src = item.avatar;
  socialPicture.alt = item.name;
  comment.querySelector('.social__text').textContent = item.message;
  return comment;
};

const fillCommentsList = (data) => {
  data.forEach((item) => socialComments.append(fillComment(item)));
};

const fillBigPicture = (data) => {
  bigImg.src = data.url;
  bigImg.alt = data.description;
  likesCount.textContent = data.likes;
  socialCaption.textContent = data.description;
  fillCommentsList(data.comments);
};

const renderBigPicture = (data) => {
  socialComments.innerHTML = '';
  hideElements();
  openModal();
  fillBigPicture(data);
  // closeModal();
};


export {renderBigPicture};
