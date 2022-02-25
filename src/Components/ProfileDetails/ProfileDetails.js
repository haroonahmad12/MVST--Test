import React from "react";
import { useDispatch } from "react-redux";
import { getUserRepo } from "../../api/getUserRepos";
import { setScreenType, setUserRepos } from "../../redux/user-reducer/actions";
import { REPO } from "../../redux/user-reducer/types";
import "./ProfileDetails.scss";

const ProfileDetails = ({ user }) => {
  const dispatch = useDispatch();
  const {
    avatar_url,
    followers,
    following,
    name,
    username,
    public_repos,
    url,
  } = user;

  const fetchRepos = () => {
    getUserRepo(username).then((res) => dispatch(setUserRepos(res.data)));
  };

  const handleRepoClick = () => {
    fetchRepos();

    dispatch(setScreenType(REPO));
  };
  return (
    <>
      <div className="profile__details">
        <div className="image__section">
          <img
            src={avatar_url}
            alt="user profile"
            className="image__section--img"
          ></img>
        </div>
        <div className="profile__details--info">
          <div className="profile__details--info-heading">
            <h2>{name ? name : username}</h2>
            <h4>{username}</h4>
          </div>
          <div className="hr__div" />
          <div className="profile__details--info-items">
            <div className="info-item">
              <div className="inf__title">{followers} </div>
              <div className="inf__text">Followers</div>
            </div>
            <div className="info-item">
              <div className="inf__title">{following} </div>
              <div className="inf__text">Following</div>
            </div>
            <div className="info-item">
              <div className="inf__title">{public_repos} </div>
              <div className="inf__text">Repositories</div>
            </div>
          </div>
          <div className="hr__div" />
        </div>
      </div>
      <footer className="footer__buttons">
        <button className="footer__buttons--button">
          <a href={url} target="_blank" rel="noreferrer">
            Visit Github Profile
          </a>
        </button>
        <button onClick={handleRepoClick} className="footer__buttons--button">
          See Repositories
        </button>
      </footer>
    </>
  );
};

export default ProfileDetails;
