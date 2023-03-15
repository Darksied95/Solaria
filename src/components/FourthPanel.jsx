import React from "react";
import Doctor from "../assets/doctor.jpg";
import { RiMessage2Fill } from "react-icons/ri";
import { SiNotepadplusplus } from "react-icons/si";

const FourthPanel = () => {
  return (
    <div className="border-l ">
      <div>
        <div className="relative w-fit">
          <img
            src={Doctor}
            className="w-12 aspect-square object-cover  rounded-full"
          />
          <span className="block rounded-full aspect-square w-3 bg-green-400 border-2 border-white absolute top-2 right-0"></span>
        </div>
        <h1>Dr. Riddle</h1>
        <p>Scientist</p>
      </div>
      <div>
        <SiNotepadplusplus />
        <RiMessage2Fill />
        <span>
          <p>+</p>
        </span>
      </div>
    </div>
  );
};

export default FourthPanel;
