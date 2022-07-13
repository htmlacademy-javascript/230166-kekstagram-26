function getData(url, onSuccess, onError) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.status);
    })
    .then((data) => onSuccess(data))
    .catch((error) => onError(error));
}

function sendData(url, onSuccess, onError, body) {
  fetch('https://26.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch((error) => onError(error));
}

export { getData, sendData };
