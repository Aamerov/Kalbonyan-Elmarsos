import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: true,
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.isVisible = action.payload.isVisible;
      state.items = action.payload.items;
    },
    toggleHandler: (state) => {
      state.isVisible = !state.isVisible;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    addItem: (state, action) => {
      const item = action.payload;
      const doesExistInItems = Object.keys(state.items).includes(item.id);
      if (doesExistInItems) {
        state.items[item.id].quantity += 1;
      } else {
        state.items[item.id] = item;
        state.items[item.id].quantity = 1;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    increment: (state, action) => {
      const itemId = action.payload;
      state.items[itemId].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    decrement: (state, action) => {
      const itemId = action.payload;
      if (state.items[itemId].quantity === 1) {
        delete state.items[itemId];
      } else {
        state.items[itemId].quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
