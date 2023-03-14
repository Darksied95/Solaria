import React from "react";
import { AiFillClockCircle, AiFillCheckCircle } from "react-icons/ai";

const SecondPanel = () => {
  return (
    <div className="h-full bg-white w-100">
      <div>
        <h1>
          Today's Plan <br />
          <span>June 14th 2022</span>
        </h1>
        <span>+</span>
      </div>
      <p>Sustainable development goals and health innovation</p>
      <div>
        <div>
          <img />
          <img />
          <img />
          <span> +5</span>
        </div>

        <div>
          <h3>Medi Team meeting</h3>
          <p>13:30 - 14:50</p>
        </div>
      </div>
      <div>
        <div>
          <h4>Weekly report</h4>
          <p>Track your performance</p>
          <button>view report</button>
        </div>
        <div>
          <h4>Study 78X</h4>
          <AiFillClockCircle />
          <p>In progress</p>
        </div>
        <div>
          <h4>Analyses</h4>
          <AiFillCheckCircle />
          <p>Completed</p>
        </div>
      </div>
    </div>
  );
};

export default SecondPanel;
