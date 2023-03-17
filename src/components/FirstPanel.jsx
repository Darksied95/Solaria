import React, { useState } from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { TbChartBubbleFilled, TbBrandMercedes } from "react-icons/tb";
import { IoIosCopy, IoIosSettings } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { FiLogOut, FiMoreHorizontal } from "react-icons/fi";
import ResourcesDetails from "./ResourcesDetails";
import SideBar from "./SideBar";
import Button from "./Button";
import {
  handleBackgroundChange,
  handleButtonClick,
} from "../utils/ButtonHandler";

const FirstPanel = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [focus, setFocus] = useState("dashboard");
  const [showResources, setShowResources] = useState(false);

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
            name="dashboard"
            className={buttonStyle}
            focusValue={focus}
            setFocus={setFocus}
            setShowResources={setShowResources}
            handleBackgroundChange={handleBackgroundChange}
            handleButtonClick={handleButtonClick}
          >
            <MdOutlineBarChart />
            <p>Dashboard</p>
          </Button>

          <Button
            name="education"
            className={buttonStyle}
            focusValue={focus}
            setFocus={setFocus}
            setShowResources={setShowResources}
            handleBackgroundChange={handleBackgroundChange}
            handleButtonClick={handleButtonClick}
          >
            <TbChartBubbleFilled />
            <p>Education</p>
          </Button>

          <div>
            <Button
              name="resources"
              className={buttonStyle}
              focusValue={focus}
              setFocus={setFocus}
              setShowResources={setShowResources}
              handleBackgroundChange={handleBackgroundChange}
              handleButtonClick={handleButtonClick}
            >
              <IoIosCopy />
              <p>Resources</p>
              <BiChevronDown
                className={`ml-auto transition-all  ${
                  showResources && focus === "resources" ? "rotate-180" : ""
                }`}
              />
            </Button>
            {showResources && focus === "resources" && <ResourcesDetails />}
          </div>

          <Button
            name="settings"
            className={buttonStyle}
            focusValue={focus}
            setFocus={setFocus}
            setShowResources={setShowResources}
            handleButtonClick={handleButtonClick}
            handleBackgroundChange={handleBackgroundChange}
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
