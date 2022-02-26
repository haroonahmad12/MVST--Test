import httpService, { headers } from "../services/http.js";

export const getAllRepos = (query) => {
  return httpService.get(
    `https://api.github.com/search/repositories?q=${query}&type=repositories&per_page=100`,
    {
      headers: headers,
    }
  );
};
