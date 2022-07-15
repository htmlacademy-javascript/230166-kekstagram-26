function validateUploadForm() {
  const formElement = document.querySelector('#upload-select-image');
  const hashtagsElement = formElement.querySelector('[name=hashtags]');
  const descriptionElement = formElement.querySelector('[name=description]');
  const submitElement = formElement.querySelector('#upload-submit');

  const pristine = new Pristine(formElement, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'field-error'
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
}

export { validateUploadForm };
