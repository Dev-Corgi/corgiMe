// redux/slices/counterSlice.js
"use client"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoadingAnimationComplete: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setTrue:(state)=>{
      state.isLoadingAnimationComplete = true
    },
    setFalse:(state)=>{
      state.isLoadingAnimationComplete = false
    }
  },
});

export const { setTrue, setFalse} = loadingSlice.actions;

export default loadingSlice.reducer;
