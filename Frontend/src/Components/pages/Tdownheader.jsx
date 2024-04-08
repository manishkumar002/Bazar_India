import React from 'react'
import { SiGooglemaps } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import '../../App.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Tdownheader() {

  const {carts} = useSelector((state)=>state.allCart)
  console.log(carts)

  const {wishlist} = useSelector((state)=>state.allWishlist)
  console.log(wishlist)
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6'>
            <div className='row mt-2'>
                <div>
                    <span className='tdownhead' ><SiGooglemaps />Find Store</span>
                    <span className='tdownhead'><FaSearch />Search</span>
                    <Link to="/cart"><span className='tdownhead text-dark' style={{float:'right'}}><FaShoppingCart/><button className='tbutton'>{carts.length}</button>Cart</span></Link>
                    <Link to="/wishlist"><span className='tdownhead text-dark' style={{float:'right'}}><GoHeart /><button className='tbutton'>{wishlist.length}</button>Wishlist</span></Link>
                    <hr/>
                </div>
            </div>
        </div>
        <div className='col-sm-3'></div>
      </div>
    </div>
  )
}
