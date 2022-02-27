import React, { useState } from "react";
import SearchUserResults from "../../Components/SearchUserResults";
import SearchForm from "../../Components/SearchForm";
import "./UserProfilePage.scss";
import { useDispatch } from "react-redux";
import { getUser } from "../../api/getUser";
import {
  fetching,
  fetchSuccess,
  setScreenType,
  setSearchRepo,
} from "../../redux/user-reducer/actions";
import { USER } from "../../redux/user-reducer/types";
import { showToast } from "../../Components/ErrorToast/ErrorToast";
import NavBar from "../../Components/NavBar";
import ErrorToast from "../../Components/ErrorToast";

// Search for users and their repositories

const UserProfilePage = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  // Function to create an Object which will update the user in State

  const createPayload = (data) => {
    return {
      avatar_url: data.avatar_url,
      followers: data.followers,
      following: data.following,
      username: data.login,
      name: data.name,
      public_repos: data.public_repos,
      url: data.html_url,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetching());

    getUser(user)
      .then((res) => createPayload(res.data))
      .then((payload) => {
        dispatch(setScreenType(USER));
        dispatch(fetchSuccess(payload));
        dispatch(setSearchRepo(false));
      })
      .catch((err) => {
        showToast();
        dispatch(setScreenType(USER));
      });
  };

  return (
    <main className="main__container">
      <SearchForm handleSubmit={handleSubmit} set={setUser} type="User" />
      <SearchUserResults />
      <ErrorToast />
      <NavBar />
    </main>
  );
};

export default UserProfilePage;
