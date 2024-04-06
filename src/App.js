
//import './App.css';
import { BrowserRouter , Router, Routes, Route,createBrowserRouter,RouterProvider } from 'react-router-dom';


import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Cart from './pages/Cart';
import React, { useEffect, useState, useContext } from "react";
import Protected from './pages/Protected';


function App() {

  const route=createBrowserRouter([
    {
      path:'/log',
      element:<Login/>
    },
    {
      path:'/cart',
      element:<Protected Pages={Cart} />

    },
    {
      path:'/',
      element:<Protected Pages={Homepage} />
    }
  ])


  return (
    <div className="App">

      <RouterProvider router={route}/>


    </div>
  );
}

export default App;
