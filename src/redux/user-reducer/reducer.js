import * as UserTypes from "./types";

export const UserInitialState = {
  isFetching: false,
  fetchError: null,
  fetchSuccess: false,
  resultDataType: "user",
  user: {
    avatar_url: null,
    followers: null,
    following: null,
    username: null,
    name: null,
    public_repos: null,
    url: null,
  },
  userRepos: [],
};

const UserReducer = (state = UserInitialState, action) => {
  switch (action.type) {
    case UserTypes.FETCH_ERROR: {
      return {
        ...state,
        fetchError: true,
      };
    }
    case UserTypes.FETCH_SUCCESS: {
      return {
        ...state,
        fetchError: false,
        isFetching: false,
        user: action.payload,
      };
    }
    case UserTypes.FETCH_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case UserTypes.SET_DATA_TYPE: {
      return {
        ...state,
        resultDataType: action.payload,
      };
    }
    case UserTypes.SET_USER_REPOS: {
      return {
        ...state,
        userRepos: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default UserReducer;
