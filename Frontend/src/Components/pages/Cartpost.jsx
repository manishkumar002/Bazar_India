import React, { useState } from 'react'
import '../styles/Cartpost.css'
export default function Cartpost() {
    let token=JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    const[title,setTitle]=useState('')
    const[img,setImg]=useState('')
    const[discountmoney,setDiscountmoney]=useState('')
    const[money,setmoney]=useState('')

function handleAdd(e){
    e.preventDefault(); 
    const formData = new FormData();
    formData.append("title", title);
    formData.append("discountmoney", discountmoney);
    formData.append("money", money);
    formData.append("img", img);
 
  
      fetch(`http://127.0.0.1:8060/api/admin/add-cart`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      })
        .then((res) => {
          return res.json();
        })
        .then(() => {
          alert("Content Added Successfully");
        })
        .catch((err) => {
          console.log(err);
        });

  } 

  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6 mt-5'>
        <div className='row cborder p-3'>
    <label for="Image"> <b>Image</b></label>
    <input type="file" placeholder="Enter image" required   onChange={(e)=>setImg(e.target.files[0])}  className='form-control'/>
    <label for="psw"><b>Title</b></label>
    <input type="text" placeholder="Enter Title"  required  onChange={(e)=>setTitle(e.target.value)} value={title} className='form-control' />
    <label for="psw"><b>Money</b></label>
    <input type="text" placeholder="Enter Money"  required  onChange={(e)=>setmoney(e.target.value)} value={money} className='form-control' />
    <label for="psw"><b>Discount</b></label>
    <input type="text" placeholder="Enter Discount"  required  onChange={(e)=>setDiscountmoney(e.target.value)} value={discountmoney}  className='form-control'/>
    <button className='control-form bg-dark text-light' style={{height:'50px',borderRadius:'15px'}} onClick={handleAdd}>Click Me!</button>
    </div>
        </div>
        <div className='col-sm-3'></div>
    </div>
   
    </div>
  )
}
