import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";

function App() {
  return (
    <section className="landing">
    <div className="App">
      <Navbar></Navbar>
      <Weather />
    </div>
    </section>
  );
}

export default App;
