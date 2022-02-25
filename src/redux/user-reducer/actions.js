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
