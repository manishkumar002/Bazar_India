import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Header.css';
import { VscThreeBars } from "react-icons/vsc";
import { BsXLg } from "react-icons/bs";


export default function Header() {
  let token = JSON.parse(window.localStorage.getItem("token"));
  let navigate = useNavigate();
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Click is outside the sidebar, close it
        togleSidebar();
      }
    }

    // Add event listener to detect clicks on the document body
    document.body.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
   
  }, []); // Empty dependency array ensures that effect runs only once

  function logout() {
    window.localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
  }

  function togleSidebar() {
    var element = document.getElementById("manish");
    element.classList.toggle("hidesidebar");
  }




  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <div className='row'>
            <div className='col-sm-2 col-10 col-md-11 col-lg-6'>
              <div>
                <b className=' fs-2'>
                  <img src="https://cdn-icons-png.freepik.com/512/9608/9608655.png" style={{ height: '50px', width: '50px', borderRadius: '50px' }} />
                  &nbsp;<span style={{ fontFamily: 'sofia' }}>Bazar India</span>
                </b>
              </div>
            </div>
            <div className='col-sm-10 col-2 col-md-1 col-lg-6 '>
              <div className='row'>
                <div className='d-block d-lg-none' style={{ float: 'right' }}>
                  <span onClick={togleSidebar} className='text-dark fs-1'><VscThreeBars /></span>
                </div>
                <div className='d-none d-lg-block '>
                  <ul className='header'>
                    <li>
                      <Link className='Link fs-5' to="/"> <img src="https://static.vecteezy.com/system/resources/thumbnails/016/416/789/small/home-line-icon-in-black-colors-house-button-illustration-png.png" style={{ height: '25px', width: '25px', borderRadius: '50px' }} /> Home</Link>
                    </li>
                    <li>
                      <Link className='Link fs-5' to="/cpost"> <img src="https://cdn4.vectorstock.com/i/1000x1000/56/38/arrow-upload-data-icon-vector-11705638.jpg" style={{ height: '25px', width: '25px', borderRadius: '50px' }} /> CartPost</Link>
                    </li>
                    <li>
                      {token ?
                        <Link className='Link  fs-5' onClick={logout}><img src="https://banner2.cleanpng.com/20180516/zq/kisspng-computer-icons-google-account-icon-design-login-5afc02dab4a218.0950785215264652427399.jpg" style={{ height: '25px', width: '25px', borderRadius: '50px' }} /> Logout</Link>
                        :
                        <Link className='Link  fs-5' to="login"><img src="https://banner2.cleanpng.com/20180516/zq/kisspng-computer-icons-google-account-icon-design-login-5afc02dab4a218.0950785215264652427399.jpg" style={{ height: '25px', width: '25px', borderRadius: '50px' }} />Login</Link>
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className='col-sm-2'></div>
      </div>

      <div className='col-sm-3 sidebar hidesidebar d-lg-none' id="manish" style={{ background: 'black' }} ref={sidebarRef}>
        <span onClick={togleSidebar} className='text-light fs-3'><BsXLg /></span>
        <ul className='' onClick={togleSidebar}>
          <li>
            <Link className='Link fs-5 text-light' to="/"> <img src="https://static.vecteezy.com/system/resources/previews/021/948/181/non_2x/3d-home-icon-free-png.png" style={{ height: '25px', width: '25px', borderRadius: '50px' }} /> Home</Link>
          </li>
          <li>
            <Link className='Link fs-5 text-light' to="/cpost"> <img src="https://static.vecteezy.com/system/resources/previews/021/948/181/non_2x/3d-home-icon-free-png.png" style={{ height: '25px', width: '25px', borderRadius: '50px' }} /> CartPost</Link>
          </li>
          <li>
            {token ?
              <Link className='Link text-light fs-5' onClick={logout}><img src="https://banner2.cleanpng.com/20180516/zq/kisspng-computer-icons-google-account-icon-design-login-5afc02dab4a218.0950785215264652427399.jpg" style={{ height: '25px', width: '25px', borderRadius: '50px' }} /> Logout</Link>
              :
              <Link className='Link  text-light fs-5' to="login"><img src="https://banner2.cleanpng.com/20180516/zq/kisspng-computer-icons-google-account-icon-design-login-5afc02dab4a218.0950785215264652427399.jpg" style={{ height: '25px', width: '25px', borderRadius: '50px' }} />Login</Link>
            }
          </li>
        </ul>
      </div>
    </div>
  );
}
