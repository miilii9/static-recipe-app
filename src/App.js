// import { useState } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import { useState } from "react";
// style
import "./App.css";
// pages
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import Navbar from "./components/Navbar";
import Color from "./components/Color";
import useTheme from "./hooks/useTheme";
function App() {
  const {mode} = useTheme();
  return (
    <div className={`app ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <Color />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route index element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='recipe/:id' element={<Recipe />} />
          <Route path='search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
