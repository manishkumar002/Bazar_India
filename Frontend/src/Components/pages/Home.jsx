import React from 'react'
import Slider from './Slider'
import Cart from './Cart'
import '../styles/Home.css'
export default function Home() {
  return (
    <div className='container-fluid'>
    <div className='row'>
     <Slider/>
    </div>

    <div className='row'>
    <div className='col-sm-1'></div>
    <div className='col-sm-10 mt-5'>
    <div className='row'>
      <div className='col-sm-6 col-md-12 col-lg-6'>
     <div className="img-wrapper">
     <div className='inner-img imag'>
     </div>
   </div>
      </div>
      <div className='col-sm-6 col-md-12 col-lg-6'>
     <div className='row'>
     <div className='col-sm-6 '>
     <div className="img-wrapper">
     <div className='inner-img ima3'>
     </div>
   </div>
      </div>

      <div className='col-sm-6 '>
     <div className="img-wrapper">
     <div className='inner-img ima4'>
     </div>
   </div>
      </div>
     </div>
     <div className='row'>
     <div className='col-sm-6 '>
     <div className="img-wrapper">
     <div className='inner-img ima1'>
     </div>
   </div>
      </div>

      <div className='col-sm-6 '>
     <div className="img-wrapper">
     <div className='inner-img ima2'>
     </div>
   </div>
      </div>
     </div>
      </div>
    </div>
    </div>
    <div className='col-sm-1'></div>
    </div>

    <div className='row'>
    <div className='col-sm-1'></div>
    <div className='col-sm-10 mt-5'>
      <Cart/>
    </div>
    <div className='col-sm-1'></div>
    </div>
    </div>
  )
}
