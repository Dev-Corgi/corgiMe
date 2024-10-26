// redux/slices/index.js
"use client"
import { combineReducers } from 'redux';
import loadingReducer from './loadingSlice';

const rootReducer = combineReducers({
  loading : loadingReducer
});

export default rootReducer;
