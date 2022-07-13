// /^#[A-Za-zА-Яа-яЁё0-9]{1, 19}$/;
import { closeModal } from './close-modal.js';
import { showSuccessAlert } from './show-success-alert.js';
import { showErrorAlert } from './show-error-alert.js';

function setUploadPostForm() {
  const uploadPostModal = document.querySelector('.j-img-upload-modal');
  const form = document.querySelector('.j-img-upload-form');

  // const submit = document.querySelector('.j-img-upload-submit');

  const pristine = new Pristine(form, {
    classTo: 'j-img-upload-field',
    errorTextParent: 'j-img-upload-field',
    errorTextClass: 'field-error'
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      const formData = new FormData(e.target);

      fetch('https://26.javascript.pages.academy/kekstagram', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            closeModal(uploadPostModal);
            showSuccessAlert();
          } else {
            throw new Error(`${response.status} ${response.statusText}`);
          }
        })
        .catch((error) => {
          closeModal(uploadPostModal);
          showErrorAlert();
        });
    }
  });
}

export { setUploadPostForm };
