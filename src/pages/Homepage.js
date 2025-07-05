import axios from "axios";
import "./homepage.css";
import { Data } from "../Context";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";

export default function Homepage({ onClick }) {
  const navigate = useNavigate();
  //add to cart
  const {
    cart,
    setcart,
    itemNumber,
    setitemNumber,
    userimg,
    userdata,

  } = useContext(Data);

  //number of item in cart

  const Additem = () => {
    setitemNumber(itemNumber + 1);
  };
  const removeitem = () => {
    setitemNumber(itemNumber - 1);
  };

  const [data, setdata] = useState([]);
  const [itemcategory, setitemcategory] = useState("");
  const [otherdata, setotherdata] = useState([]);

  const [price, setprice] = useState(0);
  //search
  const [search, setsearch] = useState("");
  const [id, setid] = useState();

  //navigate to items
  const itemRoute = (Id) => {
    setid(id);
    navigate("/items", { state: { id: Id } });
  };

  //navigate to cart
  const cartRoute = () => {
    navigate("/cart", { state: { ID: id } });
  };

  useEffect(() => {
    
      axios.get("https://dummyjson.com/products").then((res) => {
        setdata(res.data.products);
        setotherdata(res.data.products);
      });
   
  }, []);

  
  //Custom price
  const customPrice = () => {
    const filterprice = otherdata.filter((e) => {
      return e.price < price;
    });
    setdata(filterprice);
  };
  useEffect(() => {
    customPrice();
  }, [price]);

  

  useEffect(() => {
    setTimeout(() => {
      const searchdata = otherdata.filter((e) => {
        return search.toLowerCase() === ""
          ? e
          : e.title.toLowerCase().includes(search);
      });
      setdata(searchdata);
      console.log(searchdata, "search data");
    }, 10);
  }, [search]);

  //categories searching
  const filteredCategories = () => {
    const filteredItems = otherdata.filter((e) => {
      return e.category === itemcategory;
    });
    setdata(filteredItems);
    console.log(filteredItems, "categoryy");
  };

  return (
    <div>
      <div></div>
      <div className="welcome">
        <div className="header">
          <h2 className="welcome">
            {userdata.map((e) => {
              return <p>Welcome , {e.firstName}</p>;
            })}
          </h2>
          
          <div className="PB-range-slider-div">
            <div className="price-range">${price} : </div>
            <div className="price-range">$10</div>
            <input
              type="range"
              min={10}
              max={1000}
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
              className="PB-range-slider"
              id="myRange"
            />
            <p className="price-range">$1000</p>
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />

            
          </div>
          <div className="profile">
            <img
              src={userimg}
              alt="Profile"
              width="55"
              height="60"
              style={{ borderradius: 70 }}
            />
          </div>
        </div>
        <div className="sidebar-toggle">Menu &#9776; </div>

        <div className="sidebar-container">
          <div className="sidebar">
            <a >About</a>
            <a href="#" onClick={cartRoute}>
              Cart - {itemNumber}{" "}
            </a>
          </div>
        </div>

        <div className="container">
          {data.map((e) => {
            return (
              <div>
                <div className="product">
                  <img
                    src={e.thumbnail}
                    alt="Product 1"
                    onClick={() => {
                      itemRoute(e.id);
                    }}
                    className="img"
                  />

                  <div className="product-content">
                    <h3 className="product-title">{e.title}</h3>
                    <p className="product-price">${e.price}</p>
                    <p className="product-description">{e.description}</p>
                    <div className="cart">
                      <button
                        className="add-to-cart-button"
                        onClick={() => {
                          setcart([...cart, e], Additem());
                        }}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="add-to-cart-button"
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
