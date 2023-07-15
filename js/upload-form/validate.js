const HASHTAG_REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
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
  if (!value) {
    return true;
  }
  const hashtags = value.trim().split(' ');
  const checkResult = hashtags.every((element) => (element.match(HASHTAG_REGEXP)));
  return checkResult;
};

const checkHashtagsQuantity = (value) => value.trim().split(' ').length <= HASHTAGS_MAX_QUANTITY;

const checkSameHashtags = (value) => {
  const hashtags = value.trim().split(' ');
  return hashtags.length === new Set(hashtags).size;
};

const checkCommentLength = (value) => (value.length <= COMMENT_MAX_LENGTH);

const setValidators = () => {
  pristine.addValidator(textHashtags, checkTextHashtags, 'Хэш-тег начинается с символа #, дальше состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
  pristine.addValidator(textHashtags, checkHashtagsQuantity, 'Нельзя указать больше пяти хэш-тегов');
  pristine.addValidator(textHashtags, checkSameHashtags, 'Хэштеги не должны повторяться');
  pristine.addValidator(textDescription, checkCommentLength, 'Комментарий не должен быть больше 140 символов');
};

const resetValidation = () => {
  pristine.reset();
};

const setValidate = () => {
  setValidators();
};

export {setValidate, resetValidation};
