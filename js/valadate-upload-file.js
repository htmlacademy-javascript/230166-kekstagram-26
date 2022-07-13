function validateUploadPost() {
  const form = document.querySelector('.j-img-upload-form');
  const submit = document.querySelector('.j-img-upload-submit');

  const pristine = new Pristine(form, {
    classTo: 'j-img-upload-field',
    errorTextParent: 'j-img-upload-field',
    errorTextClass: 'field-error'
  });

  // /^#[A-Za-zА-Яа-яЁё0-9]{1, 19}$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = pristine.validate();

    if (!isValid) {
      submit.disabled = false;
    }
  });
}

export { validateUploadPost };
