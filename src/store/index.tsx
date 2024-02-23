import { configureStore, createSlice } from "@reduxjs/toolkit";
import { log } from "console";
const initialState: any = { products: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProdIndex = state.products.findIndex(
        (prod: any) => prod.id === action.payload.id
      );
      if (existingProdIndex !== -1) {
        const updatedProducts = state.products.map(
          (product: any, index: any) => {
            if (index === existingProdIndex) {
              return {
                ...product,
                prodQuantity:
                  product.prodQuantity + action.payload.prodQuantity,
              };
            }
            return product;
          }
        );
        return { ...state, products: updatedProducts };
      } else {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }
    },
    removeFromCart(state) {
      console.log(state);
    },
    removeAll(state) {
      state.products = [];
    },
    incrementProd(state, action) {
      state.products = state.products.map((prod: any) => {
        if (prod.id == action.payload) {
          return {
            ...prod,
            prodQuantity: prod.prodQuantity + 1,
          };
        }
      });
    },
    decrementProd(state, action) {
      state.products = state.products.map((prod: any) => {
        if (prod.prodQuantity > 1 && prod.id == action.payload) {
          return {
            ...prod,
            prodQuantity: prod.prodQuantity - 1,
          };
        }
      });
    },
    removeProd(state, action) {
      state.products = state.products.filter((prod: any) => {
        return prod.id !== action.payload;
      });
    },
  },
});

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export const cartActions = cartSlice.actions;

export default store;
