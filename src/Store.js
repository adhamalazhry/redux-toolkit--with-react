import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "./features/cart/CartSlice"
import modalSlice from "./features/modal/ModalSlice";
export const store =configureStore({
    reducer:{
        cart:cartReduser,
        modal:modalSlice,
    }
})