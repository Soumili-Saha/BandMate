import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import SetupProfile from "./pages/SetupProfile"; // ✅ Fixed import name
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/SetupProfile" element={<SetupProfile />} />
    </Routes>
  </BrowserRouter>
);
