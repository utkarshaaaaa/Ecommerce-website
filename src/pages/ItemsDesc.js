import { useLocation } from "react-router-dom";
import axios from "axios";
import "./items.css";
import React, { useEffect, useState, useContext } from "react";

export default function ItemsDesc() {
  const [id, setid] = useState("");
  const [data, setdata] = useState([]);

  const location = useLocation();

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
  }, 1);

 
  return (
    <>
      <div>
        <div>
          {data.map((e) => {
            return (
              <div>
                <div class="cardItem">
                  <div class="card__title">
                    <div class="icon">
                      <a href="#">
                        <i class="fa fa-arrow-left"></i>
                      </a>
                    </div>
                    
                  </div>
                  <div class="card__body">
                    <div class="half">
                      <div class="featured_text">
                        <h1>{e.title}</h1>
                       
                        <p class="price">${e.price}</p>
                      </div>
                      <div class="image">
                        <img
                          src={e.thumbnail}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="half">
                      <div class="description">
                        <p>
                        {e.description}
                        </p>
                      </div>
                      <span class="stock">
                        <i class="fa fa-pen"></i> In stock
                      </span>
                      
                    </div>
                  </div>
                  <div class="card__footer">
                    <div class="recommend">
                      <p>Recommended by</p>
                      <h3>Andrew Palmer</h3>
                    </div>
                    <div class="action">
                      <button type="button">Add to cart</button>
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
