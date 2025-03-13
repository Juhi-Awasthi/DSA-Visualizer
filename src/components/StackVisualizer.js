import React, { useState } from "react";
import "./StackVisualizer.css";

const StackVisualizer = () => {
  const [stack, setStack] = useState([]);

  const push = () => {
    const newItem = Math.floor(Math.random() * 100);
    setStack([...stack, newItem]);
  };

  const pop = () => {
    setStack(stack.slice(0, -1));
  };

  return (
    <div className="stack-container">
      <h2>Stack Visualizer</h2>
      <button onClick={push}>Push</button>
      <button onClick={pop} disabled={stack.length === 0}>Pop</button>
      <div className="stack">
        {stack.map((item, index) => (
          <div key={index} className="stack-item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default StackVisualizer;
