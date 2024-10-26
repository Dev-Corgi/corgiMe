"use client";
import Image from "next/image";
import DiagnalArrowSVG from "@SVG/DiagnalArrow.svg";
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";
import { easeType } from "@root/animationConfig";

export default function NullProjectReferance({
  className,
  title,
  highlight,
  backgroundSrc,
  year,
  role,
}) {
  const parts = title.split(highlight); // 강조할 부분을 기준으로 분할
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={`${className}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative flex flex-row items-end justify-start w-full h-full overflow-hidden rounded-2xl"
        whileHover="hover"
      >
        <Image
          src={backgroundSrc}
          alt="Project Referance Thumbnail"
          sizes="(max-width: 428px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, (max-width: 1440px) 33vw, 25vw"
          className={"absolute w-full h-full object-cover"}
        />
        <div className="relative flex flex-col items-start p-4 gap-y-2.5 lg:gap-y-3 xl:gap-y-3.5 w-full">
          <motion.div
            className="flex flex-col gap-y-2.5 lg:gap-y-3 xl:gap-y-3.5 items-start"
            variants={{
              hover: {
                transition: {
                  staggerChildren: 0.2, // 각 자식 요소의 애니메이션을 0.3초 간격으로 스태깅
                  duration: 0.9,
                  ease: easeType.easeOut
                },
              },
            }}
          >
            <motion.div
              className="relative flex items-center h-8 px-5 bg-white rounded-full lg:px-7 xl:px-8 lg:h-10 xl:h-12"
              initial={{ opacity: 0, top:-12}}
              variants={{
                hover: {
                  opacity: [0, 1],
                  top:[-12,0]
                },
              }}
            >
              <p className="leading-tight text-black uppercase text-2xs font-primary">
                year: {year}
              </p>
            </motion.div>
            <motion.div
              className="relative flex items-center h-8 px-5 bg-white rounded-full lg:px-7 xl:px-8 lg:h-10 xl:h-12"
              initial={{ opacity: 0, top:-12 }}
              variants={{
                hover: {
                  opacity: [0, 1],
                  top:[-12,0]
                },
              }}
            >
              <p className="leading-tight text-black uppercase text-2xs font-primary">
                ROLE: {role}
              </p>
            </motion.div>
          </motion.div>
          <div className="flex flex-row gap-x-4">
            <div className="flex items-center bg-white rounded-full px-9 lg:px-12 xl:px-16 h-14 lg:h-16 xl:h-20">
              <p className="text-2xl leading-tight text-black font-primary">
                {parts[0]}
                <span className="font-accent">{highlight}</span>
                {parts[1]}
              </p>
            </div>

            <div className="flex items-center justify-center bg-white rounded-full size-14 lg:size-16 xl:size-20">
              <DiagnalArrowSVG className="size-5 lg:size-6 xl:size-7"></DiagnalArrowSVG>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
