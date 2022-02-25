import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../api/getUser";
import { fetchSuccess } from "../../redux/user-reducer/actions";

const SearchUserForm = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const fetchedUser = await getUser(user);

    return fetchedUser;
  };

  const createPayload = (data) => {
    return {
      avatar_url: data.avatar_url,
      followers: data.followers,
      following: data.following,
      username: data.login,
      name: data.name,
      public_repos: data.public_repos,
      url: data.html_url,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser()
      .then((res) => createPayload(res.data))
      .then((payload) => dispatch(fetchSuccess(payload)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new__search ">
        <input
          type="text"
          placeholder="Search for a Github User"
          required=""
          className="new__search--input "
          onChange={({ target }) => {
            setUser(target.value);
          }}
        />
        <div>
          <button type="submit" className="new__search--btn">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchUserForm;
