import React from "react";
import { FirstPanel, SecondPanel, ThirdPanel, FourthPanel } from "./components";

const App = () => {
  return (
    <div className="bg-primary h-screen pt-5 pb-5 flex min-w-[1200px] max-w-[1600px] max-h-[800px] min-h-[790px]">
      <FirstPanel />
      <SecondPanel />
      <ThirdPanel />
      <FourthPanel />
    </div>
  );
};

export default App;
