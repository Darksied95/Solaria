import React, { useState, useEffect, useRef } from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { TbChartBubbleFilled, TbBrandMercedes } from "react-icons/tb";
import { IoIosCopy, IoIosSettings } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { FiLogOut, FiMoreHorizontal } from "react-icons/fi";
import ResourcesDetails from "./ResourcesDetails";
import SideBar from "./SideBar";
import Button from "./Button";
import useNavBar from "../hooks/useNavBar";

const FirstPanel = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [heading, setHeading] = useState("XXXXXXXX");

  const {
    focus,
    setFocus,
    showResources,
    setShowResources,
    handleBackgroundChange,
    handleButtonClick,
  } = useNavBar();

  useEffect(() => {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      finalHeading = "solarius",
      iterationCount = 0;
    const interval = setInterval(() => {
      let newValue = heading
        .split("")
        .map((_, index) => {
          return index < iterationCount
            ? finalHeading[index]
            : alphabet[Math.floor(Math.random() * 26)];
        })
        .join("");

      setHeading(newValue);
      iterationCount > finalHeading.length && clearInterval(interval);
      iterationCount++;
    }, 100);
  }, []);

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
      <div className="relative ">
        <SideBar showSideBar={showSideBar} closeSideBar={closeSideBar} />
        <div className="mb-5 flex justify-between mx-5 lg:hidden">
          <h2
            className={`${
              heading === "solarius" ? "Solarius" : null
            }  font-bold text-3xl uppercase text-center`}
          >
            {heading}
          </h2>
          <FiMoreHorizontal
            className="cursor-pointer"
            size={40}
            onClick={openSideBar}
          />
        </div>
      </div>
      <section className=" hidden w-[20%] lg:flex flex-col px-12 pt-10">
        <div className="mb-10">
          <TbBrandMercedes size={40} className="mx-auto" />
          <h2
            className={`${
              heading === "solarius" ? "Solarius" : null
            }  font-bold text-3xl uppercase text-center`}
          >
            {heading}
          </h2>
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
          className="flex items-center gap-3 font-bold text-lg  w-full p-3 mt-auto"
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
