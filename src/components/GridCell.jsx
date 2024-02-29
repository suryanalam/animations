import React from "react";

const GridCell = ({
  label = "Cell",
  isDisabled = false,
  isFilled = false,
  handleClick = () => {},
}) => {
  return (
    <div
      className={`cell ${isFilled ? "filled" : ""}`}
      aria-label={label}
      disabled={isDisabled}
      onClick={handleClick}
    ></div>
  );
};

export default GridCell;
