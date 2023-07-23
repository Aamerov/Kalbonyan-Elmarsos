import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: true };

const toggleSlice = createSlice({
  name: 'toggler',
  initialState,
  reducers: {},
});
export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;
