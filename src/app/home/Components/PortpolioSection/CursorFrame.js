"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { easeType } from "@root/animationConfig";

export default function CursorFrame({className = null, images,active}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false); // 클라이언트 사이드 렌더링 여부 체크
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval); // 1초마다 이미지 변경

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  useEffect(() => {
    setIsMounted(true); // 컴포넌트가 클라이언트에서 렌더링됨을 설정
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isMounted) {
    // 서버 사이드에서는 렌더링되지 않도록 함
    return null;
  }

  return ReactDOM.createPortal(
    <motion.div
      className={`fixed flex flex-col ${active ? "visible" : "invisible"}`}
      style={{
        transform: `translate(${position.x-20}px, ${position.y-20}px)`,
      }}
      initial={{opacity:0}}
      animate={{
        opacity:[0,1],
        transition: {
          duration: 0.4,
          ease: easeType.easeOut
        },
      }}
      // exit={
      //   {
      //     opacity:[1,0],
      //     transition: {
      //       duration: 0.4,
      //       ease: easeType.easeOut
      //     },
      //   }
      // }
    >
      <div className="flex flex-row items-start gap-x-2">
        <div className="border-2 border-white rounded-full size-10 lg:size-11 xl:size-12"></div>
        <div className="flex items-center justify-center h-10 px-8 bg-white rounded-full lg:h-11 xl:h-12 lg:px-9 xl:px-10">
          <p className="text-sm leading-tight text-black font-primary">
            Highlights
          </p>
        </div>
      </div>

      <div className="flex flex-col h-40 lg:h-44 xl:h-48 mt-3 bg-[#FFFFFF] rounded-sm w-60 lg:w-64 xl:w-72 bg-opacity-20">
        <div className="flex flex-row gap-x-0.5 px-1 py-0.5">
          <div className="bg-[#FFFFFF] size-1 bg-opacity-40 rounded-full"></div>
          <div className="bg-[#FFFFFF] size-1 bg-opacity-40 rounded-full"></div>
          <div className="bg-[#FFFFFF] size-1 bg-opacity-40 rounded-full"></div>
        </div>
        <div className="relative flex px-0.5 pb-0.5 w-full h-full">
          {images.map((image,index)=>{
            return(
              <Image
              src={image}
              alt="cursor Image"
              sizes="(max-width: 428px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, (max-width: 1440px) 33vw, 25vw"
              className={`left-0 top-0 absolute w-full h-full object-cover rounded-sm ${active && currentIndex==index ? "visible" : "invisible"}`}
            key = {index}
            />
            )
          })}
        </div>
      </div>
    </motion.div>,
    document.getElementById("cursorRoot")
  );
}
