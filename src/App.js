
//import './App.css';
import { BrowserRouter , Router, Routes, Route,createBrowserRouter,RouterProvider } from 'react-router-dom';


import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Cart from './pages/Cart';
import React, { useEffect, useState, useContext } from "react";
import Protected from './pages/Protected';
import ItemsDesc from './pages/ItemsDesc';


function App() {

  const route=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/cart',
      element:<Protected Pages={Cart} />

    },
    {
      path:'/items',
      element:<Protected Pages={ItemsDesc} />

    },
    {
      path:'/homepage',
      element:<Protected Pages={Homepage}/>
    }
  ])


  return (
    <div className="App">

      <RouterProvider router={route}/>


    </div>
  );
}

export default App;
