import React from "react";
import SearchUserResults from "../../Components/SearchUserResults";
import SearchUserForm from "../../Components/SearchUserForm";
import "./UserProfilePage.scss";

// Search for users and their repositories

const UserProfilePage = () => {
  return (
    <main className="main__container">
      <SearchUserForm />
      <SearchUserResults />
    </main>
  );
};

export default UserProfilePage;
