import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user-reducer/selectors";
import ProfileDetails from "../ProfileDetails";
import RepoList from "../RepoList";

const SearchUserResults = () => {
  const { user, resultDataType } = useSelector(userSelector);

  return (
    <div className="search__results">
      {user.username ? (
        resultDataType === "repo" ? (
          <RepoList user={user} />
        ) : (
          <ProfileDetails user={user} />
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
