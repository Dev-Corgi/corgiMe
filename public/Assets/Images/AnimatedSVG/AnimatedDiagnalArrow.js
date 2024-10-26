"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedDiagnalArrow = ({ className,trigger }) => {
  const [isHovered, setIsHovered] = useState(false); // 호버 상태

  const lineVariants1 = {
    initial: {
      strokeDasharray: 23.6006,
      strokeDashoffset: 0,
      transition: {duration:0}
    },
    animate: {
      strokeDashoffset: [0, 23.6],
      transition: { duration: 0.2 },
    },
  };

  const lineVariants2 = {
    initial: {
      strokeDasharray: 23.6006,
      strokeDashoffset: 23.6006,
      transition: {duration:0}
    },
    animate: {
      strokeDashoffset: [23.6006, 0],
      transition: { duration: 0.2, delay: 0.8 },
    },
  };

  const polylineVariants1 = {
    initial: {
      strokeDasharray: 19.34,
      strokeDashoffset: 0,
      transition: {duration:0}
    },
    animate: {
      strokeDashoffset: [0, 19.34],
      transition: { duration: 0.2, delay: 0.2 },
    },
  };

  const polylineVariants2 = {
    initial: {
      strokeDasharray: 19.34,
      strokeDashoffset: 19.34,
      transition: {duration:0}
    },
    animate: {
      strokeDashoffset: [19.34, 0],
      transition: { duration: 0.4, delay: 0.4 },
    },
  };

  return (
    <motion.div
      className={`${className}`}
      onHoverStart={() => setIsHovered(true)} // 호버 시작
      onHoverEnd={() => setIsHovered(false)} // 호버 종료
    >
      <motion.svg
        id="arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9.56 9.56"
        className="w-full h-full"
      >
        <motion.line
          id="line1"
          x2="0.27"
          y2="9.29"
          x1="9.18"
          y1="0.38"
          fill="#4e4e4e"
          stroke="#4e4e4e"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          variants={lineVariants1}
          initial="initial"
          animate={isHovered ? "animate" : "initial"} // 호버 상태에 따라 애니메이션 변경
        />
        <motion.line
          id="line2"
          x1="0.27"
          y1="9.29"
          x2="9.18"
          y2="0.38"
          fill="#4e4e4e"
          stroke="#4e4e4e"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          variants={lineVariants2}
          initial="initial"
          animate={isHovered ? "animate" : "initial"} // 호버 상태에 따라 애니메이션 변경
        />
        <motion.polyline
          id="arrow-head-1"
          points="9.18 4.55 9.18 0.38 5.01 0.38"
          fill="none"
          stroke="#4e4e4e"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          variants={polylineVariants1}
          initial="initial"
          animate={isHovered ? "animate" : "initial"} // 호버 상태에 따라 애니메이션 변경
        />
        <motion.polyline
          id="arrow-head-2"
          points="5.01 0.38 9.18 0.38 9.18 4.55"
          fill="none"
          stroke="#4e4e4e"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="0.75"
          variants={polylineVariants2}
          initial="initial"
          animate={isHovered ? "animate" : "initial"} // 호버 상태에 따라 애니메이션 변경
        />
      </motion.svg>
    </motion.div>
  );
};

export default AnimatedDiagnalArrow;
