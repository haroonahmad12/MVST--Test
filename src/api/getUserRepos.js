import httpService, { headers } from "../services/http.js";

export const getUserRepo = (user) => {
  return httpService.get(
    `https://api.github.com/users/${user}/repos?per_page=150`,
    headers.Authorization && {
      headers: headers,
    }
  );
};
