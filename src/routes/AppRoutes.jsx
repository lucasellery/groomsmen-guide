import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from '../pages/Home';
import Tips from '../pages/Tips';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/tips" element={<Tips />} exact/>
    </Routes>
  )
}

export default AppRoutes;
