import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user-reducer/selectors";
import RepoList from "../RepoList";

const SearchRepoResults = () => {
  const { userRepos } = useSelector(userSelector);

  return (
    <div className="search__results">
      {userRepos?.length > 0 ? (
        <RepoList />
      ) : (
        <div className="norepo__message">
          <span>Please type in a Repository Name</span>
        </div>
      )}
    </div>
  );
};

export default SearchRepoResults;
