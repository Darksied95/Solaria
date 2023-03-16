import React from "react";
import { medicalLecturesProgress } from "../data/thirdPanel";

const MedicalLectureProgressDetails = () => {
  return (
    <div className="flex flex-wrap gap-4 ">
      {medicalLecturesProgress.map((each, index) => {
        const Icon = each.Icon;
        return (
          <div key={index} className="w-[40%] flex items-center ">
            <div
              className="aspect-square h-12 grid place-content-center "
              style={{ backgroundColor: each.color(0.15) }}
            >
              <Icon color={each.color()} fontSize={20} />
            </div>
            <div className="ml-3">
              <h2 className="font-bold text-sm ">{each.heading}</h2>
              <p className="text-xs font-semibold opacity-40">
                {each.progress}% progress
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MedicalLectureProgressDetails;
