import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes";
import "./App.scss";
import UserProfilePage from "./Pages/UserProfilePage";
import bgImage from "./assets/bg-img.jpeg";
import FindRepoPage from "./Pages/FindRepoPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Router>
      <div className="background">
        <div className="background--top">
          <img id="bg-top" src={bgImage} alt="bg-img" />
        </div>
        <div className="background--bottom" />
      </div>
      <Routes>
        <Route path={ROUTES.USER_SEARCH} element={<UserProfilePage />} />
      </Routes>
      <Routes>
        <Route path={ROUTES.REPO} element={<FindRepoPage />} />
      </Routes>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
