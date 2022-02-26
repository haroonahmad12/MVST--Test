import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllRepos } from "../../api/getAllRepos";
import { showToast } from "../../Components/ErrorToast/ErrorToast";
import SearchForm from "../../Components/SearchForm";
import SearchRepoResults from "../../Components/SearchRepoResults";
import { setSearchRepo, setUserRepos } from "../../redux/user-reducer/actions";

// Find a Repo in a list of ALL public Repositories

const FindRepoPage = () => {
  const [repo, setRepo] = useState("");
  const dispatch = useDispatch();

  // Function to create an Object which will update the user in State

  const handleSubmit = (e) => {
    e.preventDefault();
    getAllRepos(repo)
      .then((res) => {
        dispatch(setUserRepos(res.data.items));
        dispatch(setSearchRepo(false));
      })
      .catch((err) => {
        showToast();
      });
  };

  return (
    <main className="main__container">
      <SearchForm type="Repository" handleSubmit={handleSubmit} set={setRepo} />
      <SearchRepoResults />
    </main>
  );
};

export default FindRepoPage;
