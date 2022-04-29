import "./App.css";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Add />
    </div>
  );
}

export default App;
