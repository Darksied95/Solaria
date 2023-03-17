import React from "react";
import { FirstPanel, SecondPanel, ThirdPanel, FourthPanel } from "./components";

const App = () => {
  return (
    <div className="App bg-primary pt-5 pb-5 lg:flex max-w-[1600px]  ">
      <FirstPanel />
      <SecondPanel />
      <ThirdPanel />
      <FourthPanel />
    </div>
  );
};

export default App;
