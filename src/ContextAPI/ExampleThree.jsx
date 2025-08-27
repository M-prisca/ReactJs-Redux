import React, { useContext } from "react";
import { Child1 } from "./ExampleTwo";

const AppContext = React.createContext(null);
export const Parent = () => {
  const [userName, setUserName] = React.useState("Prisca Mas");
  const [count, setCount] = React.useState(0);
  return (
    <AppContext.Provider value={{ userName, setUserName, count, setCount }}>
      <Child1 />
      <Child2 />
      <Child3 />
      <Child4 />
    </AppContext.Provider>
  );
};

export const Child1 = () => {
  const { userName } = React.useContext(AppContext);
  return <h1>{userName}</h1>;
};
export const Child2 = () => {
  const { setUserName } = useContext(AppContext);
  return <button onClick={() => setUserName("Prisca")}>Change Name</button>;
};
export const Child3 = () => {
  const { count } = useContext(AppContext);
  return <h1>{count}</h1>;
};
export const Child4 = () => {
  const { setCount } = useContext(AppContext);
  return <button onClick={() => setCount((c) => c + 1)}>Increment</button>;
};
