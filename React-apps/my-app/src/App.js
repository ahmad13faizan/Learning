import Routes1 from "./Routes1";
import React from "react";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Routes1 />
    </ThemeProvider>
  );
}

export default App;
