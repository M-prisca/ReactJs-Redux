import React from "react";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import ChangeColor from "./components/ChangeColor.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-200 items-center h-screen">
        <h1 className="text-3xl text-center font-bold">Hello world!</h1>
        <Profile />
        <Login />
        <ChangeColor />
      </div>
    </>
  );
}

export default App;
