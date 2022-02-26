import * as UserTypes from "./types";

export const fetchingUser = () => ({
  type: UserTypes.FETCH_REQUEST,
});

export const fetchSuccess = (userDetails) => ({
  type: UserTypes.FETCH_SUCCESS,
  payload: userDetails,
});

export const fetchError = () => ({
  type: UserTypes.FETCH_ERROR,
});

export const setScreenType = (type) => ({
  type: UserTypes.SET_DATA_TYPE,
  payload: type,
});

export const setUserRepos = (repoList) => ({
  type: UserTypes.SET_USER_REPOS,
  payload: repoList,
});

export const setSearchRepo = (bool) => ({
  type: UserTypes.SEARCH_USER_REPO,
  payload: bool,
});

export const setFilteredRepos = (repoList) => ({
  type: UserTypes.SET_FILTERED_REPOS,
  payload: repoList,
});
