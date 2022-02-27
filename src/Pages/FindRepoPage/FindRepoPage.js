import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllRepos } from "../../api/getAllRepos";
import { showToast } from "../../Components/ErrorToast/ErrorToast";
import SearchForm from "../../Components/SearchForm";
import SearchRepoResults from "../../Components/SearchRepoResults";
import {
  fetching,
  setSearchRepo,
  setUserRepos,
} from "../../redux/user-reducer/actions";
import ErrorToast from "../../Components/ErrorToast";
import NavBar from "../../Components/NavBar";

// Find a Repo in a list of ALL public Repositories

const FindRepoPage = () => {
  const [repo, setRepo] = useState("");
  const dispatch = useDispatch();

  // Function to create an Object which will update the repolist in State

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetching());
    getAllRepos(repo)
      .then((res) => {
        if (res?.data?.items?.length === 0) {
          showToast();
        }
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
      <ErrorToast />
      <NavBar />
    </main>
  );
};

export default FindRepoPage;
