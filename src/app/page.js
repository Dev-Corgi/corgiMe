"use client"
import LoadingScreen from "./Components/LoadingScreen";
import store from "@root/redux/store";
import { Provider } from 'react-redux';
import React,{useEffect,useState} from "react";
import HomePage from './home/Homepage';

export default function Home() {

  const [isLoaded, setisLoaded] = useState(false)

  useEffect(() => {
  if(typeof window !== 'undefined'){
    setisLoaded(true);
  }
  }, [])

  return (
    <Provider store={store}>
      <LoadingScreen isLoaded={isLoaded}></LoadingScreen>
    <HomePage></HomePage>
    </Provider>
  );
}
