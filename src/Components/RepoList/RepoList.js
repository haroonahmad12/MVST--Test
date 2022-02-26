import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenType, setSearchRepo } from "../../redux/user-reducer/actions";
import { userSelector } from "../../redux/user-reducer/selectors";
import RepoDetail from "../RepoDetail";
import * as TYPES from "../../redux/user-reducer/types";

import "./RepoList.scss";
import SearchRepoBar from "../SearchRepoBar";

const RepoList = ({ user }) => {
  const { userRepos, searchUserRepo, filteredRepos } =
    useSelector(userSelector);
  const { name, avatar_url } = user;
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedRepoList, setPaginatedList] = useState(null);

  const dispatch = useDispatch();

  // Function to create pagination to show 5 Repos per page max, Source: Stackoverflow

  const pagination = (pageNum, array) => {
    let page = pageNum,
      per_page = 5,
      offset = (page - 1) * per_page,
      paginatedItems = array?.slice(offset).slice(0, per_page),
      total_pages = Math.ceil(array?.length / per_page);

    setPaginatedList({
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: total_pages > page ? page + 1 : null,
      total: array?.length,
      total_pages: total_pages,
      data: paginatedItems,
    });
  };

  // Using UseEffects to trigger pagination() if user searches for a Repo

  useEffect(() => {
    pagination(currentPage, userRepos);
  }, [currentPage, userRepos]);

  useEffect(() => {
    if (filteredRepos !== null && filteredRepos.length > 0 && searchUserRepo) {
      pagination(currentPage, filteredRepos);
    }
  }, [currentPage, filteredRepos, searchUserRepo]);

  const handleClick = () => {
    dispatch(setScreenType(TYPES.USER));
    dispatch(setSearchRepo(false));
  };

  return (
    <div className="repolist__section">
      <header className="profile__header">
        <img
          src={avatar_url}
          style={{ height: "15rem", width: "15rem", borderRadius: "100%" }}
          alt="profile"
        />
        <div>
          <h3 onClick={handleClick}>{name}</h3>
        </div>
      </header>
      <div>
        {searchUserRepo && <SearchRepoBar />}
        {paginatedRepoList?.data?.map((repo) => (
          <RepoDetail repo={repo} />
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
    </div>
  );
};

export default RepoList;
