import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import MedicalLectureProgressDetails from "./MedicalLectureProgressDetails";
import PinnedCardDetails from "./PinnedCardDetails";

const ThirdPanel = () => {
  return (
    <section className="mx-4 lg:w-[35%] mt-9 lg:ml-10 flex flex-col">
      <div className="flex justify-between mb-8">
        <h1 className="font-bold  text-lg">Monthly pinned</h1>
        <p className="cursor-pointer hover:border-b-2 border-black">View all</p>
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
    </section>
  );
};

export default ThirdPanel;
