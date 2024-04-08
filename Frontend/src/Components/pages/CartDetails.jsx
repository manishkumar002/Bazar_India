import React,{useState,useEffect} from "react";
import "../styles/CartStyle.css";
import { addToCart,removeToCart,removeSingleIteams,emptycartIteam } from '../../redux/features/cartSlice';
 import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

 const CartDetails = () => {
   const { carts } = useSelector((state) => state.allCart);
console.log(carts)

const dispatch=useDispatch()

  const [totalprice, setPrice] = useState(0);
   const [totalquantity, setTotalQuantity] = useState(0);



  // add to cart
  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };

  // remove to cart
  const handlDelete = (e) => {
    dispatch(removeToCart(e));
    toast.success("Remove From Your Cart");
  };

  // remove single item
  const handleSingleDecrement = (e) => {
    dispatch(removeSingleIteams(e));
  
  };

  // empty cart
  const emptycart = () => {
    dispatch(emptycartIteam());
    toast.success("Your Cart is Empty");
  };

  // count total price
  const total = () => {
    let totalprice = 0;
    carts.map((item) => {
      totalprice = item.money * item.qnty + totalprice;
    });
    setPrice(totalprice);
  };

 // count total quantity
  const countquantity = () => {
    let totalquantity = 0;
    carts.map((item) => {
      totalquantity = item.qnty + totalquantity;
    });
    setTotalQuantity(totalquantity);
  };



  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    countquantity();
  }, [countquantity]);


  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">
                  Cart Calculation <span className="text-danger">{carts.length}</span>
                </h5>
                {carts.length > 0 ? (
                  <button className="btn btn-danger mt-0 btn-sm" onClick={emptycart}>
                    <i className="fa fa-trash-alt mr-2"></i>
                    <span>EmptyCart</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {carts.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p>Your Cart Is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        {" "}
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                            <button className="prdct-delete" onClick={()=>handlDelete(data._id)}><i className="fa fa-trash-alt"></i></button>
                            </td>

                            <td>
                            <div className="product-img"><img src={`http://localhost:8060/api/img/${data.img}`} alt="" /></div>
                            </td>
                            <td>
                              <div className="product-name"><p>{data.title}</p></div>
                            </td>
                            <td>{data.money}</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button className="prdct-qty-btn" type="button" onClick={data.qnty <=1 ?()=>handlDelete(data._id) :()=>handleSingleDecrement(data)} >
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text" className="qty-input-box" value={data.qnty} disabled name="" id=""/>
                                <button onClick={()=>handleIncrement(data)}
                                  className="prdct-qty-btn" type="button">
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right"> 
                              ₹ {data.qnty * data.money}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Items In Cart <span className="ml-2 mr-2">:</span>
                        <span className="text-danger">{totalquantity}</span>
                      </th>
                      <th className="text-right">
                        Total Price<span className="ml-2 mr-2">:</span>
                        <span className="text-danger">₹ {totalprice}</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
