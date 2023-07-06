const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment'); // будет шаблоном
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader'); // загрузка комментариев
const buttonClose = bigPicture.querySelector('.cancel');
const bigImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
let numberComments;

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
  comment.classList.add('hidden');
  return comment;
};

const fillCommentsList = (data) => {
  data.forEach((item) => socialComments.append(fillComment(item)));
  showCommentsList();
};

// заполнение общего количества комментариев
const setCommentsCount = (data) => {
  commentsCount.textContent = data.length;
};

// показывает заданное количество комментариев
function showCommentsList () {
  numberComments = 5;
  commentsLoader.classList.remove('hidden');
  const comments = socialComments.children;

  removeClassHidden(comments);

  commentsLoader.addEventListener('click', (event) => {
    buttonDownloadClickHendler(event);
    removeClassHidden(comments);
  });
}

// обработчик события "Загрузить ещё"
function buttonDownloadClickHendler (event) {
  event.preventDefault();
  numberComments += 5;
}

// удаляет класс hidden
function removeClassHidden (comments) {
  let commentsAmount = 0;

  for (let i = 0; i < comments.length; i++) {
    if (i < numberComments) {
      comments[i].classList.remove('hidden');
      commentsAmount++;
    }
  }
  commentCount.innerHTML = `${commentsAmount} из <span class="comments-count">${comments.length}</span> комментариев`;

  if (commentsAmount === comments.length) {
    commentsLoader.classList.add('hidden');
  }
}

const fillBigPicture = (data) => {
  bigImg.src = data.url;
  bigImg.alt = data.description;
  likesCount.textContent = data.likes;
  socialCaption.textContent = data.description;
  fillCommentsList(data.comments);
  setCommentsCount(data.comments);
};

const renderBigPicture = (data) => {
  socialComments.innerHTML = '';
  openModal();
  fillBigPicture(data);
};


export {renderBigPicture};
