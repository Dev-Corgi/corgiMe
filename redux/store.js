"use client"
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices'; // 여러 개의 slice가 있는 경우, 각 slice들을 결합한 rootReducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;