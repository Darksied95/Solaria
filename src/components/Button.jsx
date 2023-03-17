import React from "react";

const Button = ({
  children,
  handleBackgroundChange,
  handleButtonClick,
  name,
  className,
  setFocus,
  setShowResources,
  focusValue,
}) => {
  return (
    <button
      className={className}
      style={{
        backgroundColor: handleBackgroundChange(name, focusValue),
      }}
      onClick={() => handleButtonClick(name, setShowResources, setFocus)}
    >
      {children}
    </button>
  );
};

export default Button;
