import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import { useReducer } from "./Features/user.js";

const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Login />
      <Profile />
    </Provider>
  </StrictMode>
);
