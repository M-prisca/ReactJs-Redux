import React, { useState, createContext, useContext } from "react";

const AppContext = createContext({ userName: null });

export const Parent = () => {
  const [userName, setUserName] = useState("Prisca Mas");
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <div>
        {userName}
        <Child />
      </div>
    </AppContext.Provider>
  );
};

export const Child = () => {
  return <Grandchild />;
};

export const Grandchild = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => setUserName("Prisca Masereli")}>
        Change UserName
      </button>
    </div>
  );
};
