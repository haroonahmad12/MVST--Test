import httpService from "../services/http.js";

export const getUserRepo = (user) => {
  return httpService.get(`https://api.github.com/users/${user}/repos`);
};
