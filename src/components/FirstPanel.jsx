import React, { useState } from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { TbChartBubbleFilled, TbBrandMercedes } from "react-icons/tb";
import { IoIosCopy, IoIosSettings } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import ResourcesDetails from "./ResourcesDetails";
import SideBar from "./SideBar";

const FirstPanel = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const closeSideBar = () => {
    setShowSideBar(false);
  };
  const openSideBar = () => {
    setShowSideBar(true);
  };

  return (
    <>
      <div className="relative">
        <SideBar showSideBar={showSideBar} closeSideBar={closeSideBar} />
        <div className="mb-5 flex justify-between mx-5 lg:hidden">
          <h2 className="font-bold text-3xl uppercase text-center">solarius</h2>
          <FiMoreHorizontal size={40} onClick={openSideBar} />
        </div>
      </div>
      <div className="hidden w-[20%] lg:flex flex-col px-12 pt-10 h-full">
        <div className="mb-10">
          <TbBrandMercedes size={40} className="mx-auto" />
          <h2 className="font-bold text-3xl uppercase text-center">solarius</h2>
        </div>

        <div>
          <button className="flex items-center gap-3 font-bold text-lg p-3 mb-4 w-full  bg-focus">
            <MdOutlineBarChart />
            <p>Dashboard</p>
          </button>
          <button className="flex items-center gap-3 font-bold text-lg mb-4 w-full p-3">
            <TbChartBubbleFilled />
            <p>Education</p>
          </button>

          <div>
            <button className="flex items-center gap-3 font-bold text-lg mb-4 w-full p-3">
              <IoIosCopy />
              <p>Resources</p>
              <BiChevronDown className="ml-auto" />
            </button>

            <ResourcesDetails />
          </div>

          <button className="flex items-center gap-3 font-bold text-lg mb-4 w-full p-3">
            <IoIosSettings size={23} />
            <p>Settings</p>
          </button>
        </div>

        <button className="flex items-center gap-3 font-bold text-lg mb-4 w-full p-3 mt-auto">
          <div className="bg-black p-2 rounded-full">
            <FiLogOut color="white" />
          </div>
          <p>Log out</p>
        </button>
      </div>
    </>
  );
};

export default FirstPanel;
