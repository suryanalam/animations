import React, { useState } from "react";
import GridCell from "./GridCell";

const GridLights = () => {
  let [order, setOrder] = useState([]);
  let [deActivating, setDeActivating] = useState(false);

  let grid = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  let flattenGrid = grid.flat();
  let enabledGridCount = flattenGrid.filter((item) => item === 1).length;

  const deActivateCells = () => {
    setDeActivating(true);

    let intervalId = setInterval(() => {
      setOrder((orgOrder) => {
        let newOrder = [...orgOrder];
        if (newOrder.length === 0) {
          clearInterval(intervalId);
          setDeActivating(false);
        }
        newOrder.pop();
        return newOrder;
      });
    }, 500);
  };

  const activateCell = (index = null) => {
    if (index === null) {
      alert("index not found !!");
      return;
    }

    let newOrder = [...order, index];
    setOrder(newOrder);

    if (enabledGridCount === newOrder.length) {
      deActivateCells();
    }
  };

  return (
    <div className="grid-cells-wrapper">
      {flattenGrid.map((value, index) =>
        value === 1 ? (
          <GridCell
            key={index}
            label={`Cell ${index}`}
            isDisabled={order.includes(index) || deActivating}
            isFilled={order.includes(index)}
            handleClick={() => activateCell(index)}
          />
        ) : (
          <span key={index}></span>
        )
      )}
    </div>
  );
};

export default GridLights;
