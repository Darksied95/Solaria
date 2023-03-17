import React from "react";
import Person1 from "../assets/person1.jpg";
import Person2 from "../assets/person2.jpg";
import Person3 from "../assets/person3.jpg";
import { AiFillClockCircle, AiFillCheckCircle } from "react-icons/ai";

const SecondPanel = () => {
  return (
    <section className="h-full px-5 pt-3 bg-white lg:w-[35%] max-w-full lg:px-10 lg:pt-8 overflow-hidden">
      <div className="flex justify-between items-center mb-7">
        <h1 className="font-semibold text-2xl">
          Today's Plan <br />
          <span className="text-base opacity-50">June 14th, 2022</span>
        </h1>
        <span className="pt-2 pb-3 px-4  bg-black text-white rounded-[50%] text-2xl cursor-pointer hover:bg-white hover:text-black hover:outline outline-1">
          +
        </span>
      </div>
      <p className="font-bold text-2xl mb-5">
        Sustainable development goals and health innovation
      </p>
      <div className="flex justify-between mb-8">
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
          <h3 className="font-semibold">Medi Team meeting</h3>
          <p className="text-black/30 font-bold">13:30 - 14:50</p>
        </div>
      </div>
      <div>
        <div className="bg-pexel1 h-[180px] bg-cover lg:bg-[center right] bg-no-repeat p-6 flex flex-col items-start mb-10">
          <h4 className="font-semibold text-2xl mb-2">Weekly report</h4>
          <p className="font-semibold text-black/40">Track your performance</p>
          <button className="border-2 border-black/20 font-bold text-xs uppercase p-2 px-4 mt-auto">
            view report
          </button>
        </div>

        <div className="flex gap-8 h-full">
          <div className="bg-pexel2 bg-cover  lg:bg-auto flex-1  pt-6 pl-7 h-[240px]">
            <h4 className="font-bold mb-2 text-xl">Study 78X</h4>
            <div className="flex items-center gap-2 flex-wrap ">
              <AiFillClockCircle size={20} />
              <p className="font-bold opacity-50">In progress</p>
            </div>
          </div>
          <div className="bg-pexel3 bg-cover flex-1 pt-6 pl-7 h-[240px]">
            <h4 className="font-bold mb-2 text-xl">Analyses</h4>
            <div className="flex items-center gap-2 flex-wrap ">
              <AiFillCheckCircle size={20} />
              <p className="font-semibold opacity-50">Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPanel;
