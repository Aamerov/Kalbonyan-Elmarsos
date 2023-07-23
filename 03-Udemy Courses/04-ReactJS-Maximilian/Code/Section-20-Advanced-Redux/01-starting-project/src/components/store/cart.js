import { createSlice } from '@reduxjs/toolkit';

const cartIntialState = { isShown: false, listOfItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartIntialState,
  reducers: {
    toggle: (state) => {
      state.isShown = !state.isShown;
    },
    addToCart: (state, action) => {
      let itemIndex = 0;
      const filteredItems = state.listOfItems.filter((item, index) => {
        if (item.title === action.payload.title) {
          itemIndex = index;
          return true;
        }
      });

      if (filteredItems.length === 0) {
        state.listOfItems.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        state.listOfItems[itemIndex].quantity += 1;
      }
    },
    increment: (state, action) => {
      const itemInCart = state.listOfItems.find(
        (item) => item.title === action.payload.title
      );
      if (itemInCart) {
        itemInCart.quantity++;
      }
    },
  },
});

export const cartReducers = cartSlice.reducer;

export const cartActions = cartSlice.actions;
export default cartSlice;
