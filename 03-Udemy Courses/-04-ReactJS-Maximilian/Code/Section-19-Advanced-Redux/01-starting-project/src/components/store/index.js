import { configureStore } from '@reduxjs/toolkit';

import { cartReducers } from './cart';
const store = configureStore({
  reducer: { cart: cartReducers },
});

export default store;
