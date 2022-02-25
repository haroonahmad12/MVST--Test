import React from "react";
import SearchUserResults from "../../Components/SearchUserResults";
import SearchUserForm from "../../Components/SearchUserForm";
import "./UserProfilePage.scss";

const UserProfilePage = () => {
  return (
    <main className="main__container">
      <SearchUserForm />
      <SearchUserResults /> {/* needs a repo pro */}
    </main>
  );
};

export default UserProfilePage;
