import React, { useState } from "react";
import { binarySearch } from "../algorithms/binarySearch";
import "./SearchingVisualizer.css";

const SearchingVisualizer = () => {
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

  // Perform Binary Search
  const handleSearch = () => {
    const result = binarySearch(array, target);
    setFoundIndex(result.foundIndex);
    setSearchSteps(result.searchSteps);
  };

  return (
    <div className="searching-container">
      <h2>Binary Search Visualizer</h2>
      <button onClick={generateArray}>Generate Sorted Array</button>
      <input
        type="number"
        placeholder="Enter target"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

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

export default SearchingVisualizer;
