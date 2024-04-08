import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../features/cartSlice";
import wishlistSlice from "../features/wishlistSlice";


//create store


export const store = configureStore({
   reducer:{

    allCart:cartSlice,
    allWishlist:wishlistSlice
    
   } 
})