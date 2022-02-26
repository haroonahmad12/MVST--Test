import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { userSelector } from "../../redux/user-reducer/selectors";
import RepoDetail from "../RepoDetail";

import "./RepoList.scss";
import SearchRepoBar from "../SearchRepoBar";
import { pagination } from "../../utils/pagination";

const RepoList = () => {
  const { userRepos, searchUserRepo, filteredRepos } =
    useSelector(userSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedRepoList, setPaginatedList] = useState(null);

  // Using UseEffects to trigger pagination() if user searches for a Repo

  useEffect(() => {
    pagination(currentPage, userRepos, setPaginatedList);
  }, [currentPage, userRepos]);

  useEffect(() => {
    if (filteredRepos !== null && filteredRepos.length > 0 && searchUserRepo) {
      pagination(currentPage, filteredRepos, setPaginatedList);
    }
  }, [currentPage, filteredRepos, searchUserRepo]);

  return (
    <div>
      {searchUserRepo && <SearchRepoBar setCurrentPage={setCurrentPage} />}
      {paginatedRepoList?.data?.map((repo) => (
        <RepoDetail repo={repo} key={repo.id} />
      ))}
      <footer className="footer__buttons">
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          disabled={paginatedRepoList?.pre_page === null ? true : false}
          className="footer__buttons--button"
        >
          Previous
        </button>
        <span>
          {paginatedRepoList?.page} of {paginatedRepoList?.total_pages}
        </span>
        <button
          className="footer__buttons--button"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          disabled={paginatedRepoList?.next_page === null ? true : false}
        >
          Next
        </button>
      </footer>
    </div>
  );
};

export default RepoList;
