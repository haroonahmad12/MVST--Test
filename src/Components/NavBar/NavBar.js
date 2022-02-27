import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { restState } from "../../redux/user-reducer/actions";
import * as ROUTES from "../../routes";
import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (user = true, repo = true) => {
    dispatch(restState());
    if (user) {
      navigate(ROUTES.USER_SEARCH);
    }
    if (repo) {
      navigate(ROUTES.REPO);
    }
  };

  return (
    <nav className="nav__bar">
      <button
        className="nav__bar--buttons"
        onClick={() => {
          handleClick(false, true);
        }}
      >
        Search Repos
      </button>

      <button
        className="nav__bar--buttons"
        onClick={() => {
          handleClick(true, false);
        }}
      >
        Search Users
      </button>
    </nav>
  );
};

export default NavBar;
