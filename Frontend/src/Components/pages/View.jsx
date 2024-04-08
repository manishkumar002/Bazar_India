import React, { useState, useEffect } from "react";
import "../styles/View.css";
import { useParams } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdStarHalf } from "react-icons/io";
import { addToCart } from '../../redux/features/cartSlice';
import { addToWishlist } from '../../redux/features/wishlistSlice';
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";
export default function View() {
  const [count, setCount] = useState(0);
  let token = JSON.parse(window.localStorage.getItem("token"));
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);
  function demo() {
    fetch("http://127.0.0.1:8060/api/admin/get-cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        result.json().then((res) => {
          console.log(res.data);
          setData(res.data);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    demo();
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let filteredData = data.filter((item) => item._id == id);


  const dispatch = useDispatch()

  //add to cart
  
  const send = (e)=>{
  dispatch(addToCart(e))
  toast.success("added In your cart")
  }
    

  const add_wishlist =(e)=>{

  dispatch(addToWishlist(e))
  toast.success("Wishlist In your cart")
  }
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          {filteredData.map((item, index) => (
            <div className="row">
              <div className="col-sm-6 col-md-12 col-lg-6">
                <figure className="snip1268">
                  <div className="image">
                    <img
                      src={`http://localhost:8060/api/img/${item.img}`}
                      width="100%"
                      alt="sq-sample4"
                    />
                    <div className="add-to-cart"></div>
                  </div>
                </figure>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <b style={{ fontFamily: "sofia", fontSize: "38px" }}>
                  {item.title}
                </b>
                <br />
                <span className="text-danger">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <IoMdStarHalf />
                  <span className="text-dark">(3 customer reviews)</span>
                  <br />
                </span>
                <span className="price">
                  <s style={{ fontFamily: "sofia", fontSize: "22px" }}>
                    ${item.money}{" "}
                  </s>
                </span>
                {} {}
                <span
                  style={{
                    color: "red",
                    fontFamily: "sofia",
                    fontSize: "28px",
                  }}
                >
                  ${item.discountmoney}{" "}
                </span>
                <br />
                <span
                  style={{ color: "", fontFamily: "sofia", fontSize: "20px" }}
                >
                  This regulator has a rolled diaphragm and high flow rate with
                  reduced pressure drop. It has an excellent degree of
                  condensation.
                </span>
                <br />
                <div className="mt-5">
                  <div className="row">
                    <div className="col-sm-4 col-6">
                      <p className=" m fs-5" style={{fontFamily:'sofia'}}>Quantity</p>
                      <button
                        className="cart-button fs-6"
                        style={{
                          height: "30px",
                          width: "40px",
                          lineHeight: "18px",
                          background: "#d2d2d4",
                          border: "none",
                        }}
                        onClick={decrement}
                      >
                        <b>-</b>
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className="cart-button fs-6"
                        style={{
                          height: "30px",
                          width: "40px",
                          lineHeight: "18px",
                          background: "#d2d2d4",
                          border: "none",
                        }}
                      >
                        <b>{count}</b>
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className="cart-button fs-6"
                        style={{
                          height: "30px",
                          width: "40px",
                          lineHeight: "18px",
                          background: "#d2d2d4",
                          border: "none",
                        }}
                        onClick={increment}
                      >
                        <b>+</b>
                      </button>
                    </div>
                    <div className="col-sm-4 col-6">
                      <p className=" m fs-5" style={{fontFamily:'sofia'}}>Size</p>
                      <button
                        className="cart-button fs-6"
                        style={{
                          height: "30px",
                          width: "40px",
                          lineHeight: "18px",
                          background: "#d2d2d4",
                          border: "none",
                        }}
                      >
                        <b>S</b>
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className="cart-button fs-6"
                        style={{
                          height: "30px",
                          width: "40px",
                          lineHeight: "18px",
                          background: "#d2d2d4",
                          border: "none",
                        }}
                      >
                        <b>M</b>
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className="cart-button fs-6"
                        style={{
                          height: "30px",
                          width: "40px",
                          lineHeight: "18px",
                          background: "#d2d2d4",
                          border: "none",
                        }}
                        onClick={increment}
                      >
                        <b>L</b>
                      </button>
                    </div>
                    <div className="col-sm-4 ">
                      <p className="m fs-5" style={{fontFamily:'sofia'}}>Color</p>

                      <div class=" form-check-inline">
                        <input
                          class="form-check-input bg-danger fs-4"
                          type="radio"
                        />
                      </div>
                      <div class=" form-check-inline">
                        <input
                          class="form-check-input bg-dark fs-4"
                          type="radio"
                        />
                      </div>
                      <div class="form-check-inline">
                        <input
                          class="form-check-input bg-secondary fs-4"
                          type="radio"
                        />
                      </div>
                    </div>
                  </div>
           <div className="row mt-5">
<div className="col-sm-3 col-6 fs-5">
    <button style={{height:'45px',width:'150px',background:'black',color:'white',fontFamily:'sofia',borderRadius:'7px'}} onClick={()=>send(item)}><FaCartArrowDown/>Add to Cart</button>
</div>
<div className="col-sm-3 col-6 fs-5"> 
<button style={{height:'45px',width:'150px',background:'black',color:'white',fontFamily:'sofia',borderRadius:'7px'}} onClick={()=>add_wishlist(item)} > <IoMdHeart/>Add Wishlist</button>
</div>

           </div>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-sm-2"></div>
    </div>
  );
}
