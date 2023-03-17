export const handleBackgroundChange = (name, focusValue) => {
    return focusValue === name ? "rgb(238 230 225 " : null;
};

export const handleButtonClick = (name, showResourcesHandler, focusHandler) => {

    if (name == "resources") {
        showResourcesHandler(prev => !prev);
    } else {
        showResourcesHandler(false);
    }
    focusHandler(() => name);
};
