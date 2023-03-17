import React from "react";

const Button = ({
  children,
  handleBackgroundChange,
  handleButtonClick,
  name,
  className,
}) => {
  return (
    <button
      className={className}
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
