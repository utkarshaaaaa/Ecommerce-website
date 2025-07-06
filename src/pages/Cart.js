import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { Data } from "../Context";
import "./cart.css";
export default function Cart() {
  const navigate = useNavigate();
  const { cart, setcart, itemNumber, setitemNumber } = useContext(Data);
  const [totalprice, settotalprice] = useState(0);
  useEffect(() => {
    settotalprice(cart.reduce((acc, cur) => acc + Number(cur.price), 0));
  }, [cart]);

  const removeitem = () => {
    setitemNumber(itemNumber - 1);
  };

  const navigateBack = () => {
    navigate('/homepage');
  };

  return (
    <div>
      <div className="total-container">
        <div className="total-price-container">
          <h2 className="total-price">TOTAL PRICE</h2>
          <p className="price-amount">${parseFloat(totalprice).toFixed(2)}</p>
        </div>
        <div className="cart-items-container">
          <h2 className="cart-items">Total Items :</h2>
          <p className="item-number">{itemNumber}</p>
        </div>
      </div>

      <div className="cont">
        {cart.map((e) => {
          return (
            <div>
              <div className="card">
                <div className="price-item">${e.price}</div>

                <img className="card__image" src={e.thumbnail} />
                <div className="card__content">
                  <span className="title"> {e.title} </span>
                  <p>
                    {e.description}

                    <div>
                      <br />
                      <button
                        class="button"
                        onClick={() => {
                          setcart(
                            cart.filter((a) => a.id !== e.id),
                            removeitem()
                          );
                        }}
                      >
                        Remove Cart
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
      <div className="back">
      <button className="action-back" onClick={()=>{navigateBack()}}>Go back</button>

      </div>
    
     
    </div>

  );
}
