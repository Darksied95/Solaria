import React from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { TbChartBubbleFilled } from "react-icons/tb";
import { IoIosCopy, IoIosSettings } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import ResourcesDetails from "./ResourcesDetails";
import Button from "./Button";
import useNavBar from "../hooks/useNavBar";

const SideBar = ({ showSideBar, closeSideBar }) => {
  const {
    focus,
    setFocus,
    showResources,
    setShowResources,
    handleBackgroundChange,
    handleButtonClick,
  } = useNavBar();

  const buttonStyle = "flex items-center gap-3 font-bold text-xl p-3  w-full";

  return (
    <div
      className={`bg-white fixed inset-0 z-10 flex flex-col items-center px-12 gap-8 transition-all ${
        !showSideBar && "left-full"
      } `}
    >
      <div className="flex items-center w-full justify-between mt-10">
        <div>
          <h1 className="font-bold text-2xl text-center">Dr. Riddle</h1>
          <p className="text-center text-xl">Scientist</p>
        </div>
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

      <div className="flex  items-center gap-10 mr-3 lg:block lg:mx-auto  w-full">
        <div className="w-9 aspect-square bg-white mb-4  rounded-full grid place-content-center  cursor-pointer">
          <BsFillPencilFill />
        </div>
        <div className="w-9 aspect-square bg-white mb-4 rounded-full grid place-content-center cursor-pointer">
          <RiMessage2Fill />
        </div>
        <p className="w-9 aspect-square bg-black text-white mb-4 rounded-full grid place-content-center text-xl font-bold cursor-pointer">
          <span className="-mt-1 ">+</span>
        </p>
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
    </div>
  );
};

export default SideBar;
