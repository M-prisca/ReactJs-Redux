import React from "react";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../Features/user.js";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="bg-blue-900 text-center text-white px-2 py-0 rounded text-lg"
        onClick={() =>
          dispatch(
            loginUser({ name: "Prisca", age: 20, email: "prisca@example.com" })
          )
        }
      >
        Login
      </button>

      <button
        className="bg-red-500 ml-6 text-center text-white px-2 py-0 rounded text-lg"
        onClick={() => dispatch(logoutUser())}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
