// HTTP Requests using axios.

// Exporting them in one file because If in near future we need to change the methods of making HTTP requests
// we can simply change them here instead of changing everywhere.

import axios from "axios";

export const headers = {
  Authorization: process.env.REACT_APP_GITHUB_AUTH_TOKEN, // Githup Personal Access Token which gives you 15000 petitions per hour on github API
};

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    alert("An unexpected error occurrred");
  }

  return Promise.reject(error);
});

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default httpService;
