import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      style={{ color: theme }}
      className="text-lg bg-gray-200  border-black p-4 rounded"
    >
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Theme Color: {theme}</p>
    </div>
  );
};

export default Profile;
