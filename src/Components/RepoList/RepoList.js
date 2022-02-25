import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRepoLanguage } from "../../api/getRepoLanguage";
import { userSelector } from "../../redux/user-reducer/selectors";
import forkIcon from "../../assets/fork.png";

import "./RepoList.scss";

const RepoList = ({ user }) => {
  const { userRepos } = useSelector(userSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedRepoList, setPaginatedList] = useState(null);

  const { name, avatar_url } = user;

  useEffect(() => {
    let page = currentPage,
      per_page = 5,
      offset = (page - 1) * per_page,
      paginatedItems = userRepos.slice(offset).slice(0, per_page),
      total_pages = Math.ceil(userRepos.length / per_page);

    setPaginatedList({
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: total_pages > page ? page + 1 : null,
      total: userRepos.length,
      total_pages: total_pages,
      data: paginatedItems,
    });
  }, [currentPage, userRepos]);

  console.log(paginatedRepoList);

  return (
    <div className="repolist__section">
      <header className="profile__header">
        <img
          src={avatar_url}
          style={{ height: "15rem", width: "15rem", borderRadius: "100%" }}
          alt="profile"
        />
        <div>
          <h3>{name}</h3>
        </div>
      </header>

      <div>
        {paginatedRepoList?.data.map((repo) => {
          const date = new Date(repo.updated_at);
          return (
            <div key={repo.id}>
              <div className="repo__item">
                <a
                  href={repo.html_url}
                  className="repo__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>{repo.name}</h3>
                </a>
                <span className="repo__label">{repo.visibility}</span>
              </div>
              <div className="repo__details">
                <a className="repo__label" href="#!">
                  <img
                    src={forkIcon}
                    alt="forks"
                    style={{ width: "18px", height: "18px" }}
                  />
                  <span>{repo.forks}</span>
                </a>
                <div className="repo__label" style={{ height: "20px" }}>
                  <span style={{ fontSize: "12px" }}>
                    Last Update: {date.toDateString()}
                  </span>
                </div>
              </div>

              <div className="hr__div" />
            </div>
          );
        })}
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
