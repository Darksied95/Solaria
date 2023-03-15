import React from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { TbChartBubbleFilled, TbBrandMercedes } from "react-icons/tb";
import { IoIosCopy, IoIosSettings } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const FirstPanel = () => {
  const resources = [
    {
      color: "#e7cacd",
      text: "Genetic 101",
    },
    {
      color: "#f4c298",
      text: "DNA synthesis ",
    },
    {
      color: "#556888",
      text: "Events",
    },
  ];
  return (
    <div className="w-[20%] flex flex-col px-12 pt-10 h-full">
      <div className="mb-10">
        <TbBrandMercedes size={40} className="mx-auto" />
        <h2 className="font-bold text-3xl uppercase text-center">solarius</h2>
      </div>
      <div>
        <button className="flex items-center gap-3 font-bold text-xl p-3 mb-4 w-full  bg-focus">
          <MdOutlineBarChart />
          <p>Dashboard</p>
        </button>
        <button className="flex items-center gap-3 font-bold text-xl mb-4 w-full p-3">
          <TbChartBubbleFilled />
          <p>Education</p>
        </button>

        <div>
          <button className="flex items-center gap-3 font-bold text-xl mb-4 w-full p-3">
            <IoIosCopy />
            <p>Resources</p>
            <BiChevronDown className="ml-auto" />
          </button>
          <div className="ml-12">
            {resources.map((resource, index) => (
              <div key={index} className="flex items-center gap-4 mb-4">
                <span
                  className={`w-3  rounded-sm aspect-square`}
                  style={{ backgroundColor: resource.color }}
                ></span>
                <li key={resource} className="list-none">
                  {resource.text}
                </li>
              </div>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-3 font-bold text-xl mb-4 w-full p-3">
          <IoIosSettings size={23} />
          <p>Settings</p>
        </button>
      </div>

      <button className="flex items-center gap-3 font-bold text-xl mb-4 w-full p-3 mt-auto">
        <div className="bg-black p-3 rounded-full">
          <FiLogOut color="white" />
        </div>
        <p>Log out</p>
      </button>
    </div>
  );
};

export default FirstPanel;
