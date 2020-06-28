import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "D23",
      image: "https://via.placeholder.com/350x150",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};
export default Users;
