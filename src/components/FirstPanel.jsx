import React, { useState } from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { TbChartBubbleFilled, TbBrandMercedes } from "react-icons/tb";
import { IoIosCopy, IoIosSettings } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import ResourcesDetails from "./ResourcesDetails";
import SideBar from "./SideBar";
import Button from "./Button";

const FirstPanel = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [focus, setFocus] = React.useState("dashboard");
  const [showResources, setShowResources] = React.useState(false);

  const handleBackgroundChange = (name) => {
    return focus === name ? "rgb(238 230 225 " : null;
  };

  const handleButtonClick = (name) => {
    if (name == "resources") {
      setShowResources(!showResources);
    } else {
      setShowResources(false);
    }
    setFocus(name);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };
  const openSideBar = () => {
    setShowSideBar(true);
  };

  const buttonStyle =
    "flex items-center gap-3 font-bold text-lg p-3 mb-4 w-full";
  return (
    <>
      <div className="relative">
        <SideBar showSideBar={showSideBar} closeSideBar={closeSideBar} />
        <div className="mb-5 flex justify-between mx-5 lg:hidden">
          <h2 className="font-bold text-3xl uppercase text-center">solarius</h2>
          <FiMoreHorizontal
            className="cursor-pointer"
            size={40}
            onClick={openSideBar}
          />
        </div>
      </div>
      <section className="hidden w-[20%] lg:flex flex-col px-12 pt-10 h-full">
        <div className="mb-10">
          <TbBrandMercedes size={40} className="mx-auto" />
          <h2 className="font-bold text-3xl uppercase text-center">xxxxxxxx</h2>
          <h2 className="font-bold text-3xl uppercase text-center">solarius</h2>
        </div>
        <div>
          <Button
            className={buttonStyle}
            name="dashboard"
            handleBackgroundChange={handleBackgroundChange}
            handleButtonClick={handleButtonClick}
          >
            <MdOutlineBarChart />
            <p>Dashboard</p>
          </Button>
          <Button
            className={buttonStyle}
            name="education"
            handleBackgroundChange={handleBackgroundChange}
            handleButtonClick={handleButtonClick}
          >
            <TbChartBubbleFilled />
            <p>Education</p>
          </Button>

          <div>
            <Button
              className={buttonStyle}
              name="resources"
              handleBackgroundChange={handleBackgroundChange}
              handleButtonClick={handleButtonClick}
            >
              <IoIosCopy />
              <p>Resources</p>
              <BiChevronDown
                className={`ml-auto ${
                  showResources && focus === "resources" ? "rotate-180" : ""
                } transition-all`}
              />
            </Button>

            {showResources && focus === "resources" && <ResourcesDetails />}
          </div>

          <Button
            className={buttonStyle}
            name="settings"
            handleBackgroundChange={handleBackgroundChange}
            handleButtonClick={handleButtonClick}
          >
            <IoIosSettings size={23} />
            <p>Settings</p>
          </Button>
        </div>
        <button
          className="flex items-center gap-3 font-bold text-lg mb-10 w-full p-3 mt-auto"
          onClick={() => window.close()}
        >
          <div className="bg-black p-2 rounded-full">
            <FiLogOut color="white" />
          </div>
          <p>Log out</p>
        </button>
      </section>
    </>
  );
};

export default FirstPanel;
