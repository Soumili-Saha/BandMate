
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import SetupProfile from "./pages/SetupProfile";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Landing page - first page users see */}
      <Route path="/" element={<Landing />} />
      
      {/* Authentication routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Profile setup for new users */}
      <Route path="/setup-profile" element={<SetupProfile />} />
      
      {/* Main app - home page for authenticated users */}
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);