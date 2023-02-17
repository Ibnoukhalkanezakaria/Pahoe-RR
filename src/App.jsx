import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Work from "./Pages/Work/Work";
import About from "./Pages/About/About";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import OneItem from "./Components/OneItem/OneItem";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/:itemId" element={<OneItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
