"use client";
import { motion } from "framer-motion";
import TabArrow from "@SVG/TabArrow.svg";
import TopWhileVIewWrapper from "@/app/UtilComponents/TopWhileViewWrapper";
import { easeType } from "@root/animationConfig";
export default function   AwardReferance({
  className,
  awardInfo: { featuring, year, awardName },
}) {
  return (
    <div className={`${className}  flex flex-col font-primary`}>
      <div className="flex flex-row items-center justify-between py-6">
        <div className="flex flex-row items-center gap-x-6">
          <div className="flex flex-col w-20 lg:w-24 xl:w-28">
            <p className="leading-tight uppercase text-2xs text-secondary">
              {featuring}
            </p>
            <p className="leading-tight uppercase text-2xs text-secondary">
              {year}
            </p>
          </div>
          <TopWhileVIewWrapper>
          <p className="flex-grow w-32 text-2xl leading-tight md:w-56 lg:w-60 xl:w-64 text-primary">
            {awardName}
          </p>
          </TopWhileVIewWrapper>
        </div>
        <motion.div
        whileHover={"hover"}
        whileInView={{opacity:[0,1],right:["10%",0],transition: { duration: 0.9, ease: easeType.easeOut }}}
          className="relative flex items-center justify-center rounded-full size-12 lg:size-14 xl:size-16 bg-primary"
          animate={{
            rotate: 0,
          }}
          variants={{
            hover: {
              rotate: [0, "-45deg"],
              transition: { duration: 0.9, ease: easeType.easeOut },
            },
          }}
        >
          <TabArrow className="size-5 lg:size-6 xl:size-7 text-secondary"></TabArrow>
        </motion.div>
      </div>
      <div className="w-full h-px bg-secondary"></div>
    </div>
  );
}
