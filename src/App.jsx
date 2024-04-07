import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Pay from "./pages/Pay";
import Friend from "./pages/Friend";
import Save from "./pages/save";
import  Bol from './components/Bol'
import Fr from "./pages/Fr";

const App = memo(() => {

  return (


    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/save" element={<Save />} />
        <Route path="/bal" element={<Bol />} />
        <Route path="/fr" element={<Fr />} />
        <Route path="/user/:id" element={<Pay />} />
      </Routes>
    </div>
  );
})






export default App;
