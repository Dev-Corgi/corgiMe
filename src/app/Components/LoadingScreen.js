"use client";
import { AnimatePresence, motion } from "framer-motion";
import LoadingCircle from "@SVG/LoadingCircle.svg";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTrue, setFalse } from "../../../redux/slices/loadingSlice";
import { easeType } from "@root/animationConfig";
export default function LoadingScreen({ isLoaded }) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 1000); // 1초 후에 컴포넌트를 제거
    dispatch(setFalse());
    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        dispatch(setTrue());
      }}>
      {(!isAnimationComplete || !isLoaded) && (
        <motion.div className="fixed z-20 flex flex-col items-center justify-between w-screen h-full">
          <motion.div
            className="absolute w-full h-full origin-top bg-point"
            exit={{
              scaleY: 0,
              transition: {
                delay: 0.7,
                duration: 0.9,
                ease: easeType.easeOut,
              },
            }}></motion.div>
          <motion.div
            className="absolute w-full h-full origin-top bg-black"
            exit={{
              scaleY: 0,
              transition: {
                delay: 0.4,
                duration: 0.9,
                ease: easeType.easeOut,
              },
            }}></motion.div>
          <div className="relative flex flex-col items-center mt-10">
            <div className="flex overflow-hidden">
              <motion.p
                className="relative text-xs leading-tight text-white font-primary"
                exit={{
                  top: "-100%",
                  transition: {
                    duration: 0.9,
                    ease: easeType.easeOut,
                  },
                }}>
                Front Portfolio
              </motion.p>
            </div>
            <div className="flex overflow-hidden">
              <motion.p
                className="relative text-xs leading-tight text-white font-primary"
                exit={{
                  top: "-100%",
                  transition: {
                    duration: 0.9,
                    ease: easeType.easeOut,
                  },
                }}>
                @2024
              </motion.p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            <motion.div
              className="flex flex-row justify-center w-full mt-3 gap-x-2 lg:gap-x-3 xl:gap-x-4 overflow-clip"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05, // Set the desired stagger duration here
                  },
                },
                exit: {
                  transition: {
                    staggerChildren: 0.05, // Set the desired stagger duration here
                  },
                },
                hidden: {},
              }}>
              <motion.p
                className="relative text-4xl leading-tight text-white font-primary"
                variants={{
                  visible: {
                    left: 0,
                    transition: { duration: 0.9, ease: easeType.easeOut },
                  },
                  exit: {
                    top: "-100%",
                    transition: {
                      duration: 0.9,
                      ease: easeType.easeOut,
                    },
                  },
                  hidden: { left: 48 },
                }}>
                Dev
              </motion.p>
              <motion.p
                className="relative text-4xl leading-tight text-point font-accent"
                variants={{
                  visible: {
                    left: 0,
                    transition: { duration: 0.9, ease: easeType.easeOut },
                  },
                  exit: {
                    top: "-100%",
                    transition: {
                      duration: 0.9,
                      ease: easeType.easeOut,
                    },
                  },
                  hidden: { left: 48 },
                }}>
                Corgi
              </motion.p>
              <motion.p
                className="relative text-4xl leading-tight text-white font-primary"
                variants={{
                  visible: {
                    left: 0,
                    opacity: 1,
                    transition: { duration: 0.9, ease: easeType.easeOut },
                  },
                  exit: {
                    top: "-100%",
                    transition: {
                      duration: 0.9,
                      ease: easeType.easeOut,
                    },
                  },
                  hidden: { left: 144, opacity: 0 },
                }}>
                is
              </motion.p>
              <motion.p
                className="relative text-4xl leading-tight text-white font-primary"
                variants={{
                  visible: {
                    left: 0,
                    opacity: 1,
                    transition: { duration: 0.9, ease: easeType.easeOut },
                  },
                  exit: {
                    top: "-100%",
                    transition: {
                      duration: 0.9,
                      ease: easeType.easeOut,
                    },
                  },
                  hidden: { left: 144, opacity: 0 },
                }}>
                a
              </motion.p>
            </motion.div>
          </div>
          <div className="relative flex items-center justify-center pb-6">
              <LoadingCircle className="size-9 animate-spin"></LoadingCircle>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
