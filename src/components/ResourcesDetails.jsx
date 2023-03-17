import React from "react";
import resources from "../data/firstPanel";

const ResourcesDetails = () => {
  return (
    <div className="ml-12 mt-4">
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
  );
};

export default ResourcesDetails;
