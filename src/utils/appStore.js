import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: { cart: cartReducer },
});

export default appStore;
