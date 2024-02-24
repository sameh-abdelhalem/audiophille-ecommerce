import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState: any = { products: [], formIsValid: false };
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
    removeFromCart(state) {},
    removeAll(state) {
      state.products = [];
    },
    incrementProd(state, action) {
      const existingProdIndex = state.products.findIndex(
        (prod: any) => prod.id === action.payload
      );

      const updatedProducts = state.products.map((product: any, index: any) => {
        if (index === existingProdIndex) {
          return {
            ...product,
            prodQuantity: product.prodQuantity + 1,
          };
        }
        return product;
      });
      return { ...state, products: updatedProducts };
    },
    decrementProd(state, action) {
      const existingProdIndex = state.products.findIndex(
        (prod: any) => prod.id === action.payload
      );

      const updatedProducts = state.products.map((product: any, index: any) => {
        if (index === existingProdIndex) {
          return {
            ...product,
            prodQuantity: product.prodQuantity - 1,
          };
        }
        return product;
      });
      return { ...state, products: updatedProducts };
    },
    removeProd(state, action) {
      state.products = state.products.filter((prod: any) => {
        return prod.id !== action.payload;
      });
    },

    validateForm(state, action) {
      state.formIsValid = action.payload;
    },
  },
});

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export const cartActions = cartSlice.actions;

export default store;
