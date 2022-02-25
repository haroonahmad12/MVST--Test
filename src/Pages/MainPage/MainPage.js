import React from "react";
import SearchResults from "../../Components/SearchResults";
import SearchUserForm from "../../Components/SearchUserForm";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <main className="main__container">
      <SearchUserForm />
      <SearchResults /> {/* needs a repo pro */}
    </main>
  );
};

export default MainPage;
