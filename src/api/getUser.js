import httpService from "../services/http.js";

export const getUser = (user) => {
  return httpService.get(`https://api.github.com/users/${user}`);
};
