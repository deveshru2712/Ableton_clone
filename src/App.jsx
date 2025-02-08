import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Dropdown from "./Components/Dropdown";

const App = () => {
  const arr = [
    {
      id: 1,
      text: "option1",
    },
    {
      id: 2,
      text: "option2",
    },
    {
      id: 3,
      text: "option3",
    },
  ];
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
      {/* <Dropdown arr={arr} /> */}
    </div>
  );
};

export default App;
