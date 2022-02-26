import React from "react";
import forkIcon from "../../assets/fork.png";

const RepoDetail = ({ repo }) => {
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
};

export default RepoDetail;
