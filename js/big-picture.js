const COMMENT_COUNTER = 5;
const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment'); // будет шаблоном
const commentCount = document.querySelector('.social__comment-count'); // счётчик комментариев
const commentsLoader = document.querySelector('.comments-loader'); // загрузка комментариев
const buttonClose = document.querySelector('.big-picture__cancel');
const bigImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');

let showingComments = 0;
let comments;

const fillCommentsCounter = () => {
  commentCount.innerHTML = `${showingComments} из <span class="comments-count">${comments.length}</span> комментариев</div>`;
};

const setButtonState = () => {
  if (showingComments >= comments.length) {
    commentsLoader.classList.add('hidden');
    return;
  }
  commentsLoader.classList.remove('hidden');
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  buttonClose.addEventListener('click', buttonCloseClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  commentsLoader.addEventListener('click', commentsLoaderClickHandler);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', buttonCloseClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
  commentsLoader.removeEventListener('click', commentsLoaderClickHandler);
  showingComments = 0;
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

const fillCommentsList = () => {
  const fragment = document.createDocumentFragment();
  const currentComments = comments.slice(showingComments, showingComments + COMMENT_COUNTER);
  showingComments = Math.min(showingComments + COMMENT_COUNTER, comments.length);
  currentComments.forEach((comment) => fragment.append(fillComment(comment)));
  socialComments.append(fragment);
  setButtonState();
  fillCommentsCounter();
};

function commentsLoaderClickHandler (event) {
  event.preventDefault();
  fillCommentsList();
}

function fillBigPicture (data) {
  bigImg.src = data.url;
  bigImg.alt = data.description;
  likesCount.textContent = data.likes;
  socialCaption.textContent = data.description;
  fillCommentsList();
}

const renderBigPicture = (data) => {
  comments = data.comments;
  socialComments.innerHTML = '';
  openModal();
  fillBigPicture(data);
};


export {renderBigPicture};
