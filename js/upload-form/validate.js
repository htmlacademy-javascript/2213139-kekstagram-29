const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const COMMENT_MAX_LENGTH = 140;
const HASHTAGS_MAX_QUANTITY = 5;

const imgUploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const checkTextHashtags = (value) => {
  const hashtags = value.trim().split(' ');
  const checkResult = hashtags.every((element) => (element.match(HASHTAG_PATTERN)));
  return checkResult;
};

const checkHashtagsQuantity = (value) => value.trim().split(' ').length <= HASHTAGS_MAX_QUANTITY;

const checkSameHashtags = (value) => {
  const hashtags = value.trim().split(' ');
  return hashtags.length === new Set(hashtags).size;
};

const checkCommentLength = (value) => (value.length <= COMMENT_MAX_LENGTH);

const setValidators = () => {
  pristine.addValidator(textHashtags, checkTextHashtags, 'Введен невалидный хэштег');
  pristine.addValidator(textHashtags, checkHashtagsQuantity, 'Превышено количество хэштегов');
  pristine.addValidator(textHashtags, checkSameHashtags, 'Такой хэштег уже есть');
  pristine.addValidator(textDescription, checkCommentLength, `Комментарий не должен быть больше ${COMMENT_MAX_LENGTH} символов`);
};

const resetValidation = () => {
  pristine.destroy();
};

const setValidate = () => {
  setValidators();
};

export {setValidate, resetValidation};
