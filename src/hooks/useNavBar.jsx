import React from "react";

const useNavBar = () => {
  const [focus, setFocus] = React.useState("dashboard");
  const [showResources, setShowResources] = React.useState(false);

  const handleBackgroundChange = (name, focusValue) => {
    return focusValue === name ? "rgb(238 230 225 " : null;
  };

  const handleButtonClick = (name, showResourcesHandler, focusHandler) => {
    if (name == "resources") {
      showResourcesHandler((prev) => !prev);
    } else {
      showResourcesHandler(false);
    }
    focusHandler(() => name);
  };

  return {
    focus,
    setFocus,
    showResources,
    setShowResources,
    handleBackgroundChange,
    handleButtonClick,
  };
};

export default useNavBar;
