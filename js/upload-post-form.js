import { closeModal } from './close-modal.js';
import { showSuccessAlert } from './show-success-alert.js';
import { showErrorAlert } from './show-error-alert.js';
import { sendData } from './api.js';

function setUploadPostForm() {
  const uploadPostModal = document.querySelector('.j-img-upload-modal');
  const formElement = document.querySelector('.j-img-upload-form');
  const hashtagsElement = formElement.querySelector('[name=hashtags]');
  const submitElement = document.querySelector('.j-img-upload-submit');

  const pristine = new Pristine(formElement, {
    classTo: 'j-img-upload-field',
    errorTextParent: 'j-img-upload-field',
    errorTextClass: 'field-error'
  });

  pristine.addValidator(hashtagsElement, () => {
    const hashtags = hashtagsElement.value.trim().split(' ');

    if (hashtags.length <= 5) {
      return true;
    }
    return false;
  }, 'Нельзя указать больше пяти хэш-тегов', 2, false);

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
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
    }
  });
}

export { setUploadPostForm };
