import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Features/user.js";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            loginUser({ name: "John", age: 30, email: "john@example.com" })
          )
        }
      >
        Login
      </button>
    </div>
  );
};

export default Login;
