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
