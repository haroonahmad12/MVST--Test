import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user-reducer/selectors";
import ProfileDetails from "../ProfileDetails";
import RepoDetail from "../RepoDetail";

const SearchResults = () => {
  const { user, resultDataType } = useSelector(userSelector);

  return (
    <div className="search__results">
      {user.username ? (
        resultDataType === "repo" ? (
          <RepoDetail />
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

export default SearchResults;
