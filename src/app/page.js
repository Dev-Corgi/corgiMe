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

  useEffect(() => {
    // 페이지가 로드될 때마다 스크롤을 맨 위로 설정
    window.scrollTo(0, 0);
  }, []);

  return (
    <Provider store={store}>
      <LoadingScreen isLoaded={isLoaded}></LoadingScreen>
    <HomePage></HomePage>
    </Provider>
  );
}
