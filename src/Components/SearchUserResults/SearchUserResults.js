import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user-reducer/selectors";
import ProfileDetails from "../ProfileDetails";
import RepoList from "../RepoList";
import "./SearchUserResults.scss";

const SearchUserResults = () => {
  const { user, resultDataType } = useSelector(userSelector);

  return (
    <div className="search__results">
      {user.username ? (
        resultDataType === "repo" ? (
          <RepoList user={user} />
        ) : (
          <ProfileDetails user={user} /> // Using State to dynamically change the content of the page depending on what the user wants to do
        )
      ) : (
        <div id="repo-list">
          <div className="norepo__message">
            <span>No User Found</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchUserResults;
