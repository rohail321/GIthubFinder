import React, { useState, useContext } from "react";
import GithubContext from "../../context/GithubContext";
import AlertContext from "../../context/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUser, setAlert } = useContext(
    GithubContext,
    AlertContext
  );
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Plz enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const clickHandle = () => {
    clearUser();
  };
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2  lg:grid-col-2 md:grid-col-2 gap-8'>
      <div>
        <form className='form-control' onSubmit={submitHandle}>
          <div className='relative'>
            <input
              className='w-full pr-40 bg-gray-200 input input-lg text-black'
              type='text'
              placeholder='Search'
              value={text}
              onChange={handleChange}
            />
            <button
              className='absolute top-0 right-0 rounded-l-none 2-36 btn btn-lg '
              type='submit'
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={clickHandle}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
