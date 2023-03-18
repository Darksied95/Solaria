import React from "react";
import { pinnedCardDetails } from "../../data/thirdPanel";

const PinnedCardDetails = () => {
  return (
    <div className="mb-5">
      {pinnedCardDetails.map((each, index) => {
        let { subHeading, time, Icon, backgroundColor, color, heading, text } =
          each;

        return (
          <div key={index} className="border border-black/10  p-4 mb-3">
            <div className="flex justify-between">
              <h2 className="mb-1">{subHeading}</h2>
              <span className="opacity-50">{time}</span>
            </div>
            <h1 className="font-bold max-w-[70%] mb-3">{heading}</h1>
            <div className="flex items-center  gap-2">
              {typeof Icon === "string" ? (
                <p
                  className={` text-xs w-4 text-center rounded-full aspect-square font-bold`}
                  style={{
                    backgroundColor: backgroundColor,
                    color: color,
                  }}
                >
                  {Icon}
                </p>
              ) : (
                <Icon color={backgroundColor} fontSize={18} />
              )}
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PinnedCardDetails;
