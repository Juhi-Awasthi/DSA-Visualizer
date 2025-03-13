// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import SortingVisualizer from "./components/SortingVisualizer";

// function App() {
//   // Function to open SearchingVisualizer in a new tab
//   const openSearchVisualizer = () => {
//     window.open("/search", "_blank", "width=600,height=600");
//   };

//   return (
//     <div className="App">
//       <h1>DSA Visualizer</h1>
//       <SortingVisualizer />
//       <button onClick={openSearchVisualizer}>Open Searching Visualizer</button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SortingPage from "./pages/SortingPage";
import SearchingPage from "./pages/SearchingVisualizerPage";
import StackPage from "./pages/StackPage";
import QueuePage from "./pages/QueuePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sorting" element={<SortingPage />} />
      <Route path="/search" element={<SearchingPage />} />
      <Route path="/stack" element={<StackPage />} />
      <Route path="/queue" element={<QueuePage />} />
    </Routes>
  );
}

export default App;
