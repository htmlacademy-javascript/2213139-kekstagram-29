const HASHTAG_REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;

const INVALID_COMMENT_LENGTH_TEXT = 'Максимальная длина комментария - 140 символов';
const INVALID_HASHTAG_TEXT = 'Хэштэги должны начинаться с #, не могут состоять только из решетки, после решётки должны состоять из букв и чисел и не могут содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д. Максимальная длина одного хэш-тега 20 символов.';
const INVALID_HASHTAG_QUANTITY_TEXT = 'Нельзя указывать больше пяти хэштегов';
const HASHTAG_REPEAT_TEXT = 'Хэштэги не должны повторяться';

const uploadForm = document.querySelector('.img-upload__form');
const imageHashtags = document.querySelector('.text__hashtags');
const imageDescription = document.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const createHashtags = (value) => value.trim().toLowerCase().split(' ');

const checkHashtags = (value) => {
  if (!value) {
    return true;
  }
  const hashtags = createHashtags(value);
  return hashtags.every((element) => (element.match(HASHTAG_REGEXP)));
};

const checkHashtagsCount = (value) => value.split(' ').length <= MAX_HASHTAG_COUNT;

const checkSimilarHashtags = (value) => {
  const hashtags = createHashtags(value);
  return hashtags.length === new Set(hashtags).size;
};

const checkCommentLength = (value) => value.length <= MAX_COMMENT_LENGTH;

const validatePristine = () => pristine.validate();

const resetPristine = () => pristine.reset();

const initPristine = () => {
  pristine.addValidator(imageDescription, checkCommentLength, INVALID_COMMENT_LENGTH_TEXT, 1, true);
  pristine.addValidator(imageHashtags, checkHashtags, INVALID_HASHTAG_TEXT, 1, true);
  pristine.addValidator(imageHashtags, checkHashtagsCount, INVALID_HASHTAG_QUANTITY_TEXT, 1, true);
  pristine.addValidator(imageHashtags, checkSimilarHashtags, HASHTAG_REPEAT_TEXT, 1, true);
};

export {initPristine, resetPristine, validatePristine};
