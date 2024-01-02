
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";


export default function Protected({Pages}) {

    const navigate=useNavigate()

useEffect(()=>{
    let log=localStorage.getItem('login')

    if(!log){
        navigate('/log')

    }

},[])

  return (
    <div>
        <Pages/>
      
    </div>
  )
}
