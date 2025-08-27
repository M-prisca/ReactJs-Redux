import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  const value = {
    user,
    setUser,
    isAuth,
    setIsAuth,
    isPremiumUser,
    setIsPremiumUser,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
