import React, { useState } from "react";
import "./BinarySearchVisualizer.css";

const BinarySearchVisualizer = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState("");
  const [foundIndex, setFoundIndex] = useState(null);
  const [searchSteps, setSearchSteps] = useState([]);

  // Generate a sorted array
  const generateArray = () => {
    const sortedArray = Array.from({ length: 10 }, (_, i) => i * 5);
    setArray(sortedArray);
    setTarget("");
    setFoundIndex(null);
    setSearchSteps([]);
  };

  // Binary Search Algorithm
  const binarySearch = async () => {
    let left = 0;
    let right = array.length - 1;
    let steps = [];

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      steps.push(mid);

      if (array[mid] === Number(target)) {
        setFoundIndex(mid);
        setSearchSteps(steps);
        return;
      } else if (array[mid] < Number(target)) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setFoundIndex(-1); // Target not found
    setSearchSteps(steps);
  };

  return (
    <div className="binary-search-container">
      <h2>Binary Search Visualizer</h2>
      <button onClick={generateArray}>Generate Sorted Array</button>
      <input
        type="number"
        placeholder="Enter target"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <button onClick={binarySearch}>Search</button>

      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-box ${searchSteps.includes(index) ? "searching" : ""} ${
              foundIndex === index ? "found" : ""
            }`}
          >
            {value}
          </div>
        ))}
      </div>

      {foundIndex !== null && (
        <p>
          {foundIndex === -1 ? "Target not found" : `Target found at index ${foundIndex}`}
        </p>
      )}
    </div>
  );
};

export default BinarySearchVisualizer;
