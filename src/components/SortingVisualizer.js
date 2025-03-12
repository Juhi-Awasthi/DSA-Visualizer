import React, { useState, useEffect } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
  };

  return (
    <div className="sorting-container">
      {array.map((value, idx) => (
        <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
      ))}
      <button onClick={resetArray}>Reset</button>
      <button onClick={() => bubbleSort(array)}>Bubble Sort</button>
    </div>
  );
};

export default SortingVisualizer;
