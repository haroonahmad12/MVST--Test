import React from "react";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../routes";
import "./MainPage.scss";
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main__nav">
      <button
        onClick={() => {
          navigate(ROUTES.REPO);
        }}
      >
        Search Repos
      </button>
      <button
        onClick={() => {
          navigate(ROUTES.USER_SEARCH);
        }}
      >
        Search Users
      </button>
    </div>
  );
};

export default MainPage;
