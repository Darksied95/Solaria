import React from "react";
import { AiFillCheckCircle, AiFillMedicineBox } from "react-icons/ai";
import { FaDna } from "react-icons/fa";
import { BsVirus } from "react-icons/bs";
import { GiHumanTarget, GiTripleScratches } from "react-icons/gi";
import { FiMoreHorizontal } from "react-icons/fi";

const ThirdPanel = () => {
  const pinnedCardDetails = [
    {
      heading: "Multispecific liquids analysis",
      subHeading: "Next-gen immuno",
      time: "5d",
      backgroundColor: "#f3d9c3",
      color: "#000",
      Icon: "1",
      text: "New feedback",
    },
    {
      heading: "Protein characterization during childhood and pregnancy",
      subHeading: "Harmony",
      time: "1h",
      backgroundColor: "#3d3d3d",
      color: "white",
      Icon: "!",
      text: "Deadline is today",
    },
    {
      heading: "Quick element dissolution testing",
      subHeading: "Pharmaceutical",
      time: "7h",
      backgroundColor: "#b7c9cc",
      color: "white",
      Icon: AiFillCheckCircle,
      text: "Accepted",
    },
  ];

  const medicalLecturesProgress = [
    {
      heading: "Viruses",
      progress: "96",
      Icon: BsVirus,
      color: (alpha) => `rgba(92, 113, 143, ${alpha || 255})`,
    },
    {
      heading: "Bacterial cells",
      progress: "33",
      Icon: FaDna,
      color: (alpha) => `rgba(245, 191, 146, ${alpha || 255})`,
    },
    {
      heading: "Med Science",
      progress: "7",
      Icon: GiTripleScratches,
      color: (alpha) => `rgba(223, 172, 176, ${alpha || 255})`,
    },
    {
      heading: "Human gens",
      progress: "58",
      Icon: GiHumanTarget,
      color: (alpha) => `rgba(167, 182, 186, ${alpha || 255})`,
    },
  ];

  return (
    <div className="w-[35%] mt-9 ml-10">
      <div className="flex justify-between mb-8">
        <h1 className="font-bold  text-lg">Monthly pinned</h1>
        <p>View all</p>
      </div>
      <div>
        {pinnedCardDetails.map((each, index) => {
          let { subHeading, time, Icon, iconColor, heading, text } = each;

          return (
            <div key={index} className="border border-black/10 mb-4 p-4">
              <div className="flex justify-between">
                <h2 className="mb-1">{subHeading}</h2>
                <span>{time}</span>
              </div>
              <h1 className="font-bold max-w-[70%] mb-3">{heading}</h1>
              <div className="flex items-center  gap-2">
                {typeof Icon === "string" ? (
                  <p
                    className={` text-xs w-4 text-center rounded-full aspect-square font-bold`}
                    style={{
                      backgroundColor: each.backgroundColor,
                      color: each.color,
                    }}
                  >
                    {Icon}
                  </p>
                ) : (
                  <Icon color={each.backgroundColor} fontSize={18} />
                )}
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mb-4">
        <p className="font-semibold text-lg leading-none">
          My learnings <br />
          <span className="opacity-70 text-xs font-normal">
            Your progress of medical lectures
          </span>
        </p>
        <FiMoreHorizontal />
      </div>

      <div className="flex flex-wrap gap-4">
        {medicalLecturesProgress.map((each, index) => {
          const Icon = each.Icon;
          return (
            <div key={index} className="w-[40%] flex items-center ">
              <div
                className="aspect-square h-8 grid place-content-center "
                style={{ backgroundColor: each.color(0.15) }}
              >
                <Icon color={each.color()} fontSize={16} />
              </div>
              <div className="ml-3">
                <h2 className="font-bold text-sm ">{each.heading}</h2>
                <p className="text-xs">{each.progress}% progress</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdPanel;
