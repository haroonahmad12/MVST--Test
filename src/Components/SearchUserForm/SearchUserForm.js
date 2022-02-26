import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../api/getUser";
import { fetchSuccess, setScreenType } from "../../redux/user-reducer/actions";
import { USER } from "../../redux/user-reducer/types";
import "./SearchUserForm.scss";

const SearchUserForm = () => {
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
    try {
      getUser(user)
        .then((res) => createPayload(res.data))
        .then((payload) => {
          dispatch(fetchSuccess(payload));
          dispatch(setScreenType(USER));
        });
    } catch (error) {
      console.log("e");
      dispatch(setScreenType(USER));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new__search ">
        <input
          type="text"
          placeholder="Search for a Github User"
          required=""
          className="new__search--input "
          onChange={({ target }) => {
            setUser(target.value);
          }}
        />
        <div>
          <button type="submit" className="new__search--btn">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchUserForm;
