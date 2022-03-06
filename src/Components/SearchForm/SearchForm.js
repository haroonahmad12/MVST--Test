import React from "react";
import "./SearchForm.scss";

const SearchForm = ({ handleSubmit, set, type }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="new__search ">
          <input
            type="text"
            placeholder={`Search for a Github ${type}`}
            required=""
            className="new__search--input "
            onChange={({ target }) => {
              set(target.value);
            }}
          />
          <div>
            <button type="submit" className="new__search--btn">
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
