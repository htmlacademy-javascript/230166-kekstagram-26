const getData = (url, onSuccess, onError) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.status);
    })
    .then((data) => onSuccess(data))
    .catch((error) => onError(error));
};

const sendData = (url, onSuccess, onError, body) => {
  fetch(url, {
    method: 'POST',
    body
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(response.status);
      }
    })
    .catch((error) => onError(error));
};

export { getData, sendData };
