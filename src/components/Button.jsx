import React from "react";

const Button = ({
  children,
  handleBackgroundChange,
  handleButtonClick,
  name,
}) => {
  return (
    <button
      className="flex items-center gap-3 font-bold text-xl p-3  w-full"
      style={{
        backgroundColor: handleBackgroundChange(name),
      }}
      onClick={() => handleButtonClick(name)}
    >
      {children}
    </button>
  );
};

export default Button;
