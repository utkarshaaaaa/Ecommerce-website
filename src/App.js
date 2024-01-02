
//import './App.css';
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';


import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Cart from './pages/Cart';
import React, { useEffect, useState, useContext } from "react";
import Protected from './pages/Protected';


function App() {


  return (
    <div className="App">

     
<BrowserRouter>
   
    
   <Routes>
     <Route path="/log" element={<Login />}/>
     
    
     <Route path="/" element={<Protected Pages={Homepage} />}/>
     <Route path="/cart" element={<Protected Pages={Cart} />}/>
     
     


          

   </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
