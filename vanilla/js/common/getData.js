//  Returning data from the API
export const getJSON = (url, errorMsg = 'Something went wrong', method) => {
  return fetch(url, method).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

export const basePath = 'http://localhost:5000';

export const currentUser = 1;
