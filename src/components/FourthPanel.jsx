import React from "react";
import Doctor from "../assets/doctor.jpg";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";

const FourthPanel = () => {
  return (
    <section className=" pt-10 lg:border-l flex lg:flex-col mt-3 justify-between lg:pt-0 py-4 lg:ml-11 lg:mb-16 lg:w-[10%] ">
      <div className="flex items-center lg:block">
        <div className="relative mr-2 lg:mx-auto w-fit  ">
          <img
            src={Doctor}
            className=" w-12 aspect-square object-cover rounded-full mx-auto mb-3 after:content-none"
          />
          <span className="block rounded-full aspect-square w-3 bg-green-400 border-2 border-white absolute top-1 right-0"></span>
        </div>
        <div>
          <h1 className="font-bold text-sm text-center">Dr. Riddle</h1>
          <p className="text-center">Scientist</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mr-3 lg:block lg:mx-auto">
        <div className="w-9 aspect-square bg-white mb-4  rounded-full grid place-content-center  cursor-pointer">
          <BsFillPencilFill />
        </div>
        <div className="w-9 aspect-square bg-white mb-4 rounded-full grid place-content-center cursor-pointer">
          <RiMessage2Fill />
        </div>
        <p className="w-9 aspect-square bg-black text-white mb-4 rounded-full grid place-content-center text-xl font-bold cursor-pointer">
          <span className="-mt-1 ">+</span>
        </p>
      </div>
    </section>
  );
};

export default FourthPanel;
