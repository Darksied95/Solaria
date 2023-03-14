import React from "react";
import Person1 from "../assets/person1.jpg";
import Person2 from "../assets/person2.jpg";
import Person3 from "../assets/person3.jpg";
import { AiFillClockCircle, AiFillCheckCircle } from "react-icons/ai";

const SecondPanel = () => {
  return (
    <div className="h-full bg-white w-[500px] px-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-semibold text-2xl">
          Today's Plan <br />
          <span className="text-lg text-black/50">June 14th 2022</span>
        </h1>
        <span className="pt-2 pb-3 px-4  bg-black text-white rounded-[50%] text-2xl">
          +
        </span>
      </div>
      <p className="font-bold text-2xl">
        Sustainable development goals and health innovation
      </p>
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            src={Person1}
            className="w-10 aspect-square object-cover outline outline-white rounded-[50%]"
          />
          <img
            src={Person2}
            className="w-10  aspect-square object-cover outline outline-white -ml-3 rounded-[50%]"
          />
          <img
            src={Person3}
            className="w-10  aspect-square object-cover outline outline-white -ml-3 rounded-[50%]"
          />
          <span className="w-10 aspect-square rounded-[50%] -ml-3 outline outline-white bg-pictureCoverColor grid place-content-center font-semibold text-base">
            +5
          </span>
        </div>

        <div className="border-l-2 pl-6">
          <h3 className="font-bold">Medi Team meeting</h3>
          <p className="text-black/30 font-bold">13:30 - 14:50</p>
        </div>
      </div>
      <div>
        <div className="bg-pexel1 h-64 bg-[center right] p-6 flex flex-col items-start ">
          <h4 className="font-bold text-2xl mb-2">Weekly report</h4>
          <p className="font-semibold text-black/40">Track your performance</p>
          <button className="border-2 border-black font-bold text-xs uppercase p-2 px-4 mt-auto">
            view report
          </button>
        </div>

        <div className="flex outline gap-8 h-[300px]">
          <div className="bg-pexel2 h-full bg-cover w-1/2">
            <h4>Study 78X</h4>
            <AiFillClockCircle />
            <p>In progress</p>
          </div>
          <div className="bg-pexel3 w-1/2 bg-cover">
            <h4>Analyses</h4>
            <AiFillCheckCircle />
            <p>Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPanel;
