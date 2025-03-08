import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import Login from "./Login";
import Home from "./Home";
import Error1 from "./Error1";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";

function Routes1() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme & toggle function

  return (
    <div className={`container ${theme}-theme`} style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={toggleTheme}>Toggle Theme</button> {/* Bring back the button */}

      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routes1;
