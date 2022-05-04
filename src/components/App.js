import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import { ThemeContextProvider } from "../context/ThemeContext";

const App = () => {
  return (
    <>
    <ThemeContextProvider>
      <Navbar />
      <Home />
      <Footer />
    </ThemeContextProvider>
    </>
  );
}

export default App;

