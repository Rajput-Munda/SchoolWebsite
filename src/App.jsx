import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddSchoolForm from "./components/AddSchoolForm";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar"; // Ensure this is the correct path
import Schools from "./components/Schools";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-school" element={<AddSchoolForm />} />
        <Route path="/schools-list" element={<Schools />} />

        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
