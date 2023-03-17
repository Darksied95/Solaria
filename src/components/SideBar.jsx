import React from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { TbChartBubbleFilled } from "react-icons/tb";
import { IoIosCopy, IoIosSettings } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import ResourcesDetails from "./ResourcesDetails";
import Button from "./Button";
import {
  handleBackgroundChange,
  handleButtonClick,
} from "../utils/ButtonHandler";

const SideBar = ({ showSideBar, closeSideBar }) => {
  const [focus, setFocus] = React.useState("dashboard");
  const [showResources, setShowResources] = React.useState(false);

  const buttonStyle = "flex items-center gap-3 font-bold text-xl p-3  w-full";

  return (
    <div
      className={`bg-white fixed inset-0 z-10 flex flex-col items-center px-12 gap-8 transition-all ${
        !showSideBar && "left-full"
      } `}
    >
      <div className="flex items-center w-full justify-between mt-10">
        <h2 className="font-bold text-3xl uppercase ">solarius</h2>
        <CgClose size={40} onClick={closeSideBar} className="cursor-pointer" />
      </div>
      <Button
        focusValue={focus}
        setFocus={setFocus}
        setShowResources={setShowResources}
        className={buttonStyle}
        name="dashboard"
        handleButtonClick={handleButtonClick}
        handleBackgroundChange={handleBackgroundChange}
      >
        <MdOutlineBarChart />
        <p>Dashboard</p>
      </Button>

      <Button
        focusValue={focus}
        setFocus={setFocus}
        setShowResources={setShowResources}
        className={buttonStyle}
        name="education"
        handleButtonClick={handleButtonClick}
        handleBackgroundChange={handleBackgroundChange}
      >
        <TbChartBubbleFilled />
        <p>Education</p>
      </Button>

      <div className="w-full">
        <Button
          focusValue={focus}
          setFocus={setFocus}
          setShowResources={setShowResources}
          className={buttonStyle}
          name="resources"
          handleButtonClick={handleButtonClick}
          handleBackgroundChange={handleBackgroundChange}
        >
          <IoIosCopy />
          <p>Resources</p>
          <BiChevronDown
            className={`ml-auto ${
              showResources ? "rotate-180" : ""
            } transition-all`}
          />
        </Button>
        {showResources && <ResourcesDetails />}
      </div>

      <Button
        focusValue={focus}
        setFocus={setFocus}
        setShowResources={setShowResources}
        className={buttonStyle}
        name="settings"
        handleButtonClick={handleButtonClick}
        handleBackgroundChange={handleBackgroundChange}
      >
        <IoIosSettings size={23} />
        <p>Settings</p>
      </Button>
    </div>
  );
};

export default SideBar;
