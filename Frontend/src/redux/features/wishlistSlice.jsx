import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishlist: []
}

//wishlist slice

const wishlistSlice = createSlice({
    name: "wishlistSlice",
    initialState,
    reducers: {
        //add to wishlist
        addToWishlist: (state, action) => {
            // state.wishlist = [...state.wishlist, action.payload];


            const IteamIndex_Inc = state.wishlist.findIndex((item) => item._id === action.payload._id);

            if (IteamIndex_Inc >= 0)
             {
                state.wishlist[IteamIndex_Inc].qnty += 1
            }
             else {
                const temp = { ...action.payload, qnty: 1 }
                state.wishlist = [...state.wishlist, temp]

            }
        },
        removeToWishlist:(state,action)=>{
            const data = state.wishlist.filter((item)=>item._id !== action.payload);
            state.wishlist = data
        },
    }
});

export const { addToWishlist,removeToWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;

