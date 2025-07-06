import { useLocation } from "react-router-dom";
import axios from "axios";
import "./items.css";
import { Data } from "../Context";
import { useNavigate } from "react-router-dom";
import React, {  useState, useContext, useEffect } from "react";

export default function ItemsDesc() {
  const [id, setid] = useState("");
  const [data, setdata] = useState([]);

  const location = useLocation();
  const {
    cart,
    setcart,
    itemNumber,
    setitemNumber,
  
  } = useContext(Data);

  const navigate=useNavigate()


  setTimeout(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setdata([res.data]);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          console.log("Rate limit exceeded.");
        } else {
          console.log("Error:", error.message);
        }
      });

    setid(location.state.id);
  }, 100);
 

  const Additem = () => {
    setitemNumber(itemNumber + 1);
  };

  const navigateToprevPage=()=>{
    navigate('/homepage')

  }

 
  return (
    <>
      <div>
        <div>
          {data.map((e) => {
            return (
              <div>
                <div className="cardItem">
                  <div className="card__title">
                    <div className="icon">
                      <a href="#">
                        <i className="fa fa-arrow-left"></i>
                      </a>
                    </div>
                    
                  </div>
                  <div className="card__body">
                    <div className="half">
                      <div className="featured_text">
                        <h1>{e.title}</h1>
                        <br/>
                       
                        <p className="price">${e.price}</p>
                      </div>
                      <div className="image">
                        <img
                          src={e.thumbnail}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="half">
                      <div className="description">
                        <h2>Description</h2>
                        <p>
                        {e.description}
                        </p>
                      </div>
                      <span className="stock">
                        <i className="fa fa-pen"></i> In stock
                      </span>
                      
                    </div>
                  </div>
                  <div className="card__footer">
                    <div className="recommend">
                      
                    </div>
                    <div className="action">
                      <button type="button"onClick={() => {
                          setcart([...cart, e], Additem());
                        }}>Add Item</button>
                    </div>
                    <div className="action">
                      <button type="button" onClick={()=>{navigateToprevPage()}}
                        >Go   Back</button>
                    </div>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
