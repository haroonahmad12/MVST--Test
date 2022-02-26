import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenType, setSearchRepo } from "../../redux/user-reducer/actions";
import { userSelector } from "../../redux/user-reducer/selectors";
import ProfileDetails from "../ProfileDetails";
import * as TYPES from "../../redux/user-reducer/types";
import RepoList from "../RepoList";
import "./SearchUserResults.scss";

const SearchUserResults = () => {
  const { user, resultDataType } = useSelector(userSelector);
  const { avatar_url, name } = user;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setScreenType(TYPES.USER));
    dispatch(setSearchRepo(false));
  };

  return (
    <div className="search__results">
      {user.username ? (
        resultDataType === "repo" ? (
          <div className="repolist__section">
            <header className="profile__header">
              <img
                src={avatar_url}
                style={{
                  height: "15rem",
                  width: "15rem",
                  borderRadius: "100%",
                }}
                alt="profile"
              />
              <div>
                <h3 onClick={handleClick}>{name}</h3>
              </div>
            </header>
            <RepoList />
          </div>
        ) : (
          <ProfileDetails user={user} /> // Using State to dynamically change the content of the page depending on what the user wants to do
        )
      ) : (
        <div id="repo-list">
          <div className="norepo__message">
            <span>Please type in a username</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchUserResults;
