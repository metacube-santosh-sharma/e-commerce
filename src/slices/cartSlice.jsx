import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [] 
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQty : (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decreaseQty : (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  }
})

export const { addToCart, increaseQty, decreaseQty, removeItem } = cartSlice.actions

export default cartSlice.reducer
