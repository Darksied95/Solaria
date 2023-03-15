import React from "react";
import { AiFillCheckCircle, AiFillMedicineBox } from "react-icons/ai";
import { FaDna } from "react-icons/fa";
import { BsVirus } from "react-icons/bs";
import { GiHumanPyramid } from "react-icons/gi";
import { FiMoreHorizontal } from "react-icons/fi";

const ThirdPanel = () => {
  const pinnedCardDetails = [
    {
      heading: "Multispecific liquids analysis",
      subHeading: "Next-gen immuno",
      time: "5d",
      iconColor: "#f3d9c3",
      Icon: "1",
      text: "New feedback",
    },
    {
      heading: "Protein characterization during childhood and pregnancy",
      subHeading: "Harmony",
      time: "1h",
      iconColor: "#3d3d3d",
      Icon: "!",
      text: "Deadline is today",
    },
    {
      heading: "Quick element dissolution testing",
      subHeading: "Pharmaceutical",
      time: "7h",
      iconColor: "#b7c9cc",
      Icon: AiFillCheckCircle,
      text: "Accepted",
    },
  ];

  const medicalLecturesProgress = [
    {
      heading: "Viruses",
      progress: "96",
      Icon: BsVirus,
      color: "#627697",
    },
    {
      heading: "Bacterial cells",
      progress: "33",
      Icon: FaDna,
      color: "#f5bf92",
    },
    {
      heading: "Med Science",
      progress: "7",
      Icon: AiFillMedicineBox,
      color: "#e3b2b7",
    },
    {
      heading: "Human gens",
      progress: "58",
      Icon: GiHumanPyramid,
      color: "#9dafb4",
    },
  ];

  return (
    <div>
      <div>
        <h1>Monthly pinned</h1>
        <p>View all</p>
      </div>
      <div>
        {pinnedCardDetails.map((each, index) => {
          let { subHeading, time, Icon, iconColor, heading, text } = each;

          return (
            <div key={index}>
              <div>
                <h2>{subHeading}</h2>
                <span>{time}</span>
              </div>
              <h1>{heading}</h1>
              <div>
                <div>{typeof Icon === "string" ? Icon : <Icon />}</div>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p>
          My learnigs <br />
          <span>Your progress of medical lectures</span>
        </p>
        <FiMoreHorizontal />
      </div>

      <div>
        {medicalLecturesProgress.map((each, index) => {
          const Icon = each.Icon;
          return (
            <div key={index}>
              <div>
                <Icon />
              </div>
              <div>
                <h2>{each.heading}</h2>
                <p>{each.progress}% progress</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdPanel;
