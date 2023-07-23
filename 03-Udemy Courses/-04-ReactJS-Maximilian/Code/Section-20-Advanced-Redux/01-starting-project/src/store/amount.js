import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 1 };

const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log('+1');
    },
    decrement: (state) => {
      if (state.value === 0) {
        return;
      }
      state.value -= 1;
      console.log('-1');
    },
  },
});

export const amountActions = amountSlice.actions;

export default amountSlice.reducer;
