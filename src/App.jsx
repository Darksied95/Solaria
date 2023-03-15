import React from "react";
import { FirstPanel, SecondPanel, ThirdPanel, FourthPanel } from "./components";

const App = () => {
  return (
    <div className="bg-primary h-screen pt-1 flex">
      <FirstPanel />
      <SecondPanel />
      <ThirdPanel />
      <FourthPanel />
    </div>
  );
};

export default App;
