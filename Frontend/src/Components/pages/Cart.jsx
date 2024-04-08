

import React, { useState, useEffect } from 'react';
import '../styles/Cart.css'
import { IoMdHeart } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdStarHalf } from "react-icons/io";
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/features/cartSlice';
import { addToWishlist } from '../../redux/features/wishlistSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast'

export default function Cart() {
    let token = JSON.parse(window.localStorage.getItem("token"));
    const [data, setData] = useState([]);

    function demo() {
        fetch('http://127.0.0.1:8060/api/admin/get-cart', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((result) => {
            result.json().then((res) => {
                console.log(res.data);
                setData(res.data);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(() => {
        demo();
    }, []);

const dispatch = useDispatch()

//add to cart

const send = (e)=>{
dispatch(addToCart(e))
toast.success("added In your cart")
}



const clicksend = (e)=>{
  dispatch(addToWishlist(e))
  toast.success("added In your wishlist")
  }


    return (
        <div className='container-fluid'>

            <div className='row mt-5'>
            <center style={{fontFamily:'sofia',fontSize:'36px'}}>Featured Products</center>
            <center style={{fontFamily:'sofia',fontSize:'26px'}}>New Arrivals | Featured | Best Seller</center>
                {
                    data.map((item, index) => (
             <div className="col-sm-3">
            <figure className="snip1268">
                <div className="image">
                <img src={`http://localhost:8060/api/img/${item.img}`} width="100%"  alt="sq-sample4"/>
                  <div className="add-to-cart">
                  <center> <Link to={`/view/${item._id}`}><button
                      className="cart-button fs-6 bg-dark text-light ms-4"
                      style={{
                        height: "30px",
                        width: "100px",
                        lineHeight: "26px",
                      }}
                    >
                      Quick View
                    </button>
                    </Link>
                    <button onClick={()=>clicksend(item)}
                      className="cart-button m-2 fs-5 bg-dark text-light"
                      style={{
                        height: "30px",
                        width: "40px",
                        lineHeight: "26px",
                      }}
                    >
                      <IoMdHeart />
                    </button>
                    <button onClick={()=>send(item)}
                      className="cart-button fs-5 bg-dark text-light"
                      style={{
                        height: "30px",
                        width: "40px",
                        lineHeight: "26px",
                      }}
                    >
                    <FaCartArrowDown />
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>{item.title}</center>
                  <center>
                  <span className='text-danger'>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <IoMdStarHalf />
                    <br />
                    </span>
                    <span className="price">
                      <s>${item.money} </s>
                    </span>
                    {} {}
                    <span style={{ color: "red" }}>${item.discountmoney} </span>
                  </center>
                </figcaption>
              </figure>
            </div>             
                    ))
                }
            </div>



             
        </div>
    );
}


























