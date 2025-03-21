import React from "react";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
