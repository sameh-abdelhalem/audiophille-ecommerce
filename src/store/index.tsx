import { configureStore, createSlice } from "@reduxjs/toolkit";
import { log } from "console";
const initialState: any = { products: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.products.push(action.payload);
    },
    removeFromCart(state) {
      console.log(state);
    },
    removeAll(state) {
      state.products = [];
    },
  },
});

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export const cartActions = cartSlice.actions;

export default store;
