import httpService, { headers } from "../services/http.js";

export const getUser = (query) => {
  return httpService.get(
    `https://api.github.com/search/repositories?q=${query}&type=repositories`,
    {
      headers: headers,
    }
  );
};
