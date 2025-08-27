import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import useReducer from "./Features/user.js";
import themeReducer from "./Features/theme.js";

const store = configureStore({
  reducer: {
    user: useReducer,
    theme: themeReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
