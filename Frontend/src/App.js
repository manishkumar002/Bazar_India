
import './App.css';
import toast,{Toaster} from 'react-hot-toast'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/pages/Header';
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import TopHeader from './Components/pages/TopHeader';
import Tdownheader from './Components/pages/Tdownheader';
import Cartpost from './Components/pages/Cartpost';
import View from './Components/pages/View';
import Sendlink from './Components/pages/Sendlink';
import Resetpassword from './Components/pages/Resetpassword';
import CartDetails from './Components/pages/CartDetails';
import WishlistDetails from './Components/pages/WishlistDetails';
function App() {
  return (
    <>
    <BrowserRouter>
    <TopHeader/>
    <Tdownheader/>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cpost" element={<Cartpost />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/send-link" element={<Sendlink/>}/>  
        <Route path="/reset/:id/:token" element={<Resetpassword/>}/>  
        <Route path="/cart" element={<CartDetails/>}/>  
        <Route path="/wishlist" element={<WishlistDetails/>}/>  
      
      
    </Routes>
  
  </BrowserRouter>
  <Toaster/>
  </>
  );
}

export default App;
