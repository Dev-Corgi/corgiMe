"use client";
import SubLabels from "@/app/Components/SubLabels";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { easeType } from "@root/animationConfig";
import AnimatedLetter from "@AnimatedSVG/AnimatedLetter";

export default function Title({ className }) {
  const isLoadingAnimationComplete = useSelector(
    (state) => state.loading.isLoadingAnimationComplete
  );
  return (
    <div className="flex flex-col flex-wrap w-full mt-24 md:flex-row md:items-center">
      <motion.p
        className="relative w-full text-6xl leading-none origin-bottom md:w-min font-primary text-primary md:text-8xl"
        animate={isLoadingAnimationComplete && "begin"}
        initial={{ scaleY: 0 }}
        variants={{
          begin: {
            scaleY: 1,
            transition: { duration: 0.8, ease: easeType.easeOut },
          },
        }}>
        Creative
      </motion.p>
      <div className="flex flex-col w-full md:flex-row md:justify-end gap-x-4 md:order-last">
        {/* <p className="w-full leading-none md:w-min font-accent text-7xl text-point text-end md:text-8xl">
          Visual
        </p> */}
        <div className="flex flex-row justify-end w-full md:w-min h-min">
        <AnimatedLetter className="h-14 md:h-20 lg:h-24 xl:h-32 text-point"></AnimatedLetter>
        </div>
        <motion.p
          className="relative w-full text-6xl leading-none origin-bottom md:w-min font-primary text-primary md:text-8xl"
          animate={isLoadingAnimationComplete && "begin"}
          initial={{ scaleY: 0 }}
          variants={{
            begin: {
              scaleY: 1,
              transition: { delay: 0.4, duration: 0.8, ease: easeType.easeOut },
            },
          }}>
          Developer
        </motion.p>
      </div>
      <div className="flex flex-row justify-between flex-grow gap-10 mt-20 md:gap-0 md:justify-around md:mt-4 md:ml-6">
        <SubLabels
          text={
            "2024 DEV CORGI’s\nFRONTEND PORTPOLIO"
          }></SubLabels>
        <SubLabels text={"MADE WITH NEXT.JS\nPUBLISHED BY VERCEL"}></SubLabels>
      </div>
    </div>
  );
}
