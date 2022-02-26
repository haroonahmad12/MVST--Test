import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes";
import "./App.scss";
import UserProfilePage from "./Pages/UserProfilePage";
import bgImage from "./assets/bg-img.jpeg";
import FindRepoPage from "./Pages/FindRepoPage";

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
        <Route path="/" element={<UserProfilePage />} />
      </Routes>
      {/* <Routes>
        <Route path={ROUTES.MAIN} element={<FindRepoPage />} />
      </Routes> */}
    </Router>
  );
}

export default App;
