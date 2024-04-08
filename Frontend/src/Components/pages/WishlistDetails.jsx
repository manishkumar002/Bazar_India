import React from 'react'
import '../styles/WishlistDetails.css';
import { addToCart} from '../../redux/features/cartSlice';
import{removeToWishlist} from '../../redux/features/wishlistSlice'
// import { addToWishlist } from '../../redux/features/wishlistSlice';
 import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { GiHearts } from "react-icons/gi";
export default function WishlistDetails() {

  const { wishlist } = useSelector((state) => state.allWishlist);
  console.log(wishlist)


  const dispatch = useDispatch()

  //add to cart
  const add_to_cart = (e)=>{
    dispatch(addToCart(e))
    toast.success("added In your cart")
    }

    //remove to wishlist

    const handlDeletes = (e) => {
      dispatch(removeToWishlist(e));
      toast.success("Remove From Your Wishlist");
    };
  return (
<div className='container-fluid'>
  <div className='row'>
    <div className='col-sm-3'></div>
    <div className='col-sm-6'>
    <div className="row justify-content-center m-0">
    <div className="col-md-8 mt-5 mb-5">
      <div className="wishlist">
        <div className="wishlist-header bg-dark p-3">
          <div className="wishlist-header-flex">
            <h5 className="text-white m-0">
              My WishlistDetails <span className="text-danger fs-2"><GiHearts/></span>
            </h5>
          </div>
        </div>
        <div className="wishlist-body p-0">
          {wishlist.length === 0 ? (
            <table className="table wishlist-table mb-0">
   
            </table>
          ) : (
            <table className="table wishlist-table mb-0 table-responsive-sm">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((data, index) => {
                  return (
                    <>
                      <tr>
                        <td>
                        <button className="wishlist-delete" onClick={()=>handlDeletes(data._id)}><i className="fa fa-trash-alt"></i></button>
                        </td>

                        <td>
                        <div className="product-img"><img src={`http://localhost:8060/api/img/${data.img}`} alt="" /></div>
                        </td>
                        <td>
                          <div className="product-name"><p>{data.title}</p></div>
                        </td>
                        <td> ₹ {data.money}</td>

                        <td className="text-right"> 
                         <button className='add-button' onClick={()=>add_to_cart(data)}>Add to cart</button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  </div>

    </div>
    <div className='col-sm-3'></div>
  </div>
</div>

  
  )
}
