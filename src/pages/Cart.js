import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { Data } from "../Context";
import "./cart.css";
export default function Cart() {


  const navigate=useNavigate()
  const { cart, setcart ,itemNumber, setitemNumber} = useContext(Data);
  const [totalprice, settotalprice] = useState(0);
  useEffect(() => {
    settotalprice(cart.reduce((acc, cur) => acc + Number(cur.price), 0));
  }, [cart]);

  const removeitem = () => {
    setitemNumber(itemNumber - 1);
  };


  const back=()=>{
    navigate(-1)
  }

  return (
    <div>
      <div className="total"><h2>TOTAL PRICE  -   ${totalprice}</h2> 
      <h2>Cart Items - {itemNumber}</h2></div>
      
       <div className="cont">
      {cart.map((e) => {
        return (
          <div >
             
            
            <div className="card" >
              <div className="price-item">Price - ${e.price}</div>
              
              <img className="card__image" src={e.thumbnail}/>
              <div className="card__content">
                <span className="title"> {e.title}</span>
                <p>
                  {e.description}
                  <div>
                    <br/>
                  <button class="button" onClick={() => {
                          setcart(
                            cart.filter((a) => a.id !== e.id),
                            removeitem()
                          );
                        }}>Remove Cart</button>
                 
                  </div>
                  
                  

                  
                  

        
                   
                  

                </p>
                
              </div>
              
            </div>
            <div>
                    <button onClick={back}>Back</button>
                  </div>
          </div>
          
         
        );
      })}
      </div>
     
      
    </div>
  );
}
