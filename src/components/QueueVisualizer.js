import React, { useState } from "react";
import "./QueueVisualizer.css";

const QueueVisualizer = () => {
  const [queue, setQueue] = useState([]);

  const enqueue = () => {
    const newItem = Math.floor(Math.random() * 100);
    setQueue([...queue, newItem]);
  };

  const dequeue = () => {
    setQueue(queue.slice(1));
  };

  return (
    <div className="queue-container">
      <h2>Queue Visualizer</h2>
      <button onClick={enqueue}>Enqueue</button>
      <button onClick={dequeue} disabled={queue.length === 0}>Dequeue</button>
      <div className="queue">
        {queue.map((item, index) => (
          <div key={index} className="queue-item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default QueueVisualizer;
