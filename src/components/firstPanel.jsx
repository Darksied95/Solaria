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
    <div>
      <div>
        <TbBrandMercedes />
        <h2>solarius</h2>
      </div>
      <div>
        <button>
          <MdOutlineBarChart />
          <p>Dashboard</p>
        </button>
        <button>
          <TbChartBubbleFilled />
          <p>Education</p>
        </button>

        <div>
          <button>
            <IoIosCopy />
            <p>Resources</p>
            <BiChevronDown />
          </button>
        </div>

        <button>
          <IoIosSettings />
          <p>Settings</p>
        </button>
      </div>

      <button>
        <FiLogOut />
        <p>Log out</p>
      </button>
    </div>
  );
};

export default FirstPanel;
