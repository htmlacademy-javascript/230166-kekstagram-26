import { openModal, closeModal } from './show-modal.js';
import { showSuccessAlert } from './show-success-alert.js';
import { showErrorAlert } from './show-error-alert.js';
import { sendData } from './api.js';

function uploadPostForm() {
  const FILE_TYPES = ['png', 'jpg', 'jpeg', 'gif'];

  const formElement = document.querySelector('#upload-select-image');
  const uploadPostModal = formElement.querySelector('.img-upload__overlay');
  const uploadCencelElement = formElement.querySelector('#upload-cancel');
  const uploadFileElement = formElement.querySelector('#upload-file');
  const previewImageElement = formElement.querySelector('.img-upload__preview img');
  const hashtagsElement = formElement.querySelector('[name=hashtags]');
  const descriptionElement = formElement.querySelector('[name=description]');
  const submitElement = formElement.querySelector('#upload-submit');
  const scaleFieldElement = formElement.querySelector('.scale__control--value');
  const scaleSmallerElement = formElement.querySelector('.scale__control--smaller');
  const scaleBiggerElement = formElement.querySelector('.scale__control--bigger');

  const pristine = new Pristine(formElement, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'field-error'
  });

  const onUploadFileChange = () => {
    const file = uploadFileElement.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((ext) => fileName.endsWith(ext));

    if (matches) {
      previewImageElement.src = URL.createObjectURL(file);
      openModal(uploadPostModal);
    }
  };

  uploadFileElement.addEventListener('change', onUploadFileChange);

  closeModal(uploadPostModal, uploadCencelElement);

  scaleSmallerElement.addEventListener('click', (e) => {
    e.preventDefault();
    const value = parseInt(scaleFieldElement.value, 10);
    scaleBiggerElement.disabled = false;

    if (value !== 25) {
      scaleFieldElement.value = `${value - 25}%`;
      previewImageElement.style.transform = `scale(${scaleFieldElement.value})`;
    } else {
      e.currentTarget.disabled = true;
    }
  });

  scaleBiggerElement.addEventListener('click', (e) => {
    e.preventDefault();
    const value = parseInt(scaleFieldElement.value, 10);
    scaleSmallerElement.disabled = false;

    if (value !== 100) {
      scaleFieldElement.value = `${value + 25}%`;
      previewImageElement.style.transform = `scale(${scaleFieldElement.value})`;
    } else {
      e.currentTarget.disabled = true;
    }
  });

  pristine.addValidator(hashtagsElement, (value) => {
    const hashtags = value.trim().split(' ');

    for (let i = 0; i < hashtags.length; i++) {
      if (!(/^#/).test(hashtags[i]) && hashtags[i].length) {
        return false;
      }
    }

    return true;
  }, 'Хэш-тег начинается с символа # (решётка)', 1, false);

  pristine.addValidator(hashtagsElement, (value) => {
    const hashtags = value.trim().split(' ');

    for (let i = 0; i < hashtags.length; i++) {
      if (!(/[A-Za-zА-Яа-я0-9]$/).test(hashtags[i]) && hashtags[i].length > 1) {
        return false;
      }
    }

    return true;
  }, 'Cтрока после решётки должна состоять из букв и чисел');

  pristine.addValidator(hashtagsElement, (value) => {
    const hashtags = value.trim().split(' ');

    for (let i = 0; i < hashtags.length; i++) {
      if ((/^#/).test(hashtags[i]) && hashtags[i].length === 1) {
        return false;
      }
    }

    return true;
  }, 'Хеш-тег не может состоять только из одной решётки');

  pristine.addValidator(hashtagsElement, (value) => {
    const hashtags = value.trim().split(' ');

    for (let i = 0; i < hashtags.length; i++) {
      if (hashtags[i].length > 20) {
        return false;
      }
    }

    return true;
  }, 'Максимальная длина одного хэш-тега 20 символов, включая решётку', 4, false);

  pristine.addValidator(hashtagsElement, (value) => {
    const hashtags = value.toLowerCase().trim().split(' ');

    const countItems = hashtags.reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1;
      return acc;
    }, {});

    if (Object.values(countItems).find((el) => el > 1)) {
      return false;
    }

    return true;
  }, 'один и тот же хэш-тег не может быть использован дважды', 5, false);

  pristine.addValidator(hashtagsElement, (value) => {
    const hashtags = value.trim().split(' ');

    if (hashtags.length > 5) {
      return false;
    }

    return true;
  }, 'Нельзя указать больше пяти хэш-тегов', 7, false);

  pristine.addValidator(descriptionElement, (value) => {
    if (value && value.length < 10) {
      return false;
    }

    return true;
  }, 'Минимальная длина 10 символов', 7, false);

  pristine.addValidator(descriptionElement, (value) => {
    if (value && value.length > 140) {
      return false;
    }

    return true;
  }, 'Максимальная длина 140 символов', 7, false);

  function onFieldInput() {
    if (pristine.validate()) {
      submitElement.disabled = false;
    } else {
      submitElement.disabled = true;
    }
  }

  hashtagsElement.addEventListener('input', onFieldInput);
  descriptionElement.addEventListener('input', onFieldInput);

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    sendData(
      'https://26.javascript.pages.academy/kekstagram',
      () => {
        closeModal(uploadPostModal);
        showSuccessAlert();
      },
      () => {
        closeModal(uploadPostModal);
        showErrorAlert();
      },
      formData
    );
  });
}

export { uploadPostForm };
