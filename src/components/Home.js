// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       <h1>Welcome to DSA Visualizer 🚀</h1>
//       <p>Learn Sorting, Searching, Stack, and Queue with Visual Animations!</p>

//       <div className="buttons">
//         <button onClick={() => navigate("/sorting")}>Sorting Visualizer</button>
//         <button onClick={() => window.open("/search", "_blank", "width=800,height=600")}>
//           Searching Visualizer
//         </button>
//         <button onClick={() => navigate("/stack")}>Stack Visualizer</button>
//         <button onClick={() => navigate("/queue")}>Queue Visualizer</button>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Use React Router for navigation

  return (
    <div className="home-container">
      <h1>Welcome to DSA Visualizer 🚀</h1>
      <p>Learn Sorting, Searching, Stack, and Queue with Visual Animations!</p>

      <div className="buttons">
        <button onClick={() => navigate("/sorting")}>Sorting Visualizer</button>
        <button onClick={() => navigate("/search")}>Searching Visualizer</button>
        <button onClick={() => navigate("/stack")}>Stack Visualizer</button>
        <button onClick={() => navigate("/queue")}>Queue Visualizer</button>
      </div>
    </div>
  );
};

export default Home;
