import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import MedicalLectureProgressDetails from "./MedicalLectureProgressDetails";
import PinnedCardDetails from "./PinnedCardDetails";

const ThirdPanel = () => {
  return (
    <div className="w-[35%] mt-9 ml-10 flex flex-col">
      <div className="flex justify-between mb-8">
        <h1 className="font-bold  text-lg">Monthly pinned</h1>
        <p className="cursor-pointer hover:border-b border-red-500">View all</p>
      </div>
      <PinnedCardDetails />
      <div className="flex justify-between mb-4 ">
        <p className="font-semibold text-lg leading-7">
          My learnings <br />
          <span className="opacity-70 text-xs font-normal">
            Your progress of medical lectures
          </span>
        </p>
        <FiMoreHorizontal cursor={"pointer"} />
      </div>
      <MedicalLectureProgressDetails />
    </div>
  );
};

export default ThirdPanel;
