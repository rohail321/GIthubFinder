import React, { useEffect, useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/GithubContext";
function UserResults() {
  const { users, isLoading } = useContext(GithubContext);

  return !isLoading ? (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  ) : (
    <h3>Loading...</h3>
  );
}

export default UserResults;
