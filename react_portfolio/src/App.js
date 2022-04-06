import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Mechwork from "./components/Mechwork";
import Softwork from "./components/Softwork";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Mechwork />
      <Softwork />
    </div>
  );
}

export default App;
