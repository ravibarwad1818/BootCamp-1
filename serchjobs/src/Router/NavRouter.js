import React from 'react'
import { Routes, Route } from "react-router-dom";
import Contact from '../Components/Contact';
import Engg from '../Components/Engg';
import Home from '../Components/Home';
import Marketing from '../Components/Marketing';
import Sales from '../Components/Sales';

const NavRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/engg" exact element={<Engg/>} />
        <Route path="/sales" exact element={<Sales/>} />
        <Route path="/marketing" exact element={<Marketing/>} />
        <Route path="/contact" exact element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default NavRouter
