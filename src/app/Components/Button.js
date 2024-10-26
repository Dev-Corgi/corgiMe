"use client";
import { motion } from "framer-motion";
import { easeType } from "@root/animationConfig";

export default function Button({ className, buttonText, highlight }) {
  const parts = buttonText.split(highlight); // 강조할 부분을 기준으로 분할
  return (
    <motion.button
      className={`${className} flex border border-secondary rounded-full text-primary overflow-hidden`}
      whileHover="hover"
    >
      <div className="relative w-full h-full">
        <motion.div
          className="absolute inset-0 z-0 origin-center bg-white rounded-full opacity-60"
          animate={{
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          variants={{
            hover: {
              scale: [0, 1.1],
              opacity: [0, 1],
              transition: { duration: 0.4, ease: easeType.easeOut },
            },
          }}
        />
        <div className="absolute flex items-center justify-center w-full h-full">
          <motion.p className="text-lg leading-tight md:text-2xl font-primary"
                    animate={{
                      transition: { duration: 0},
                    }}
                    variants={{
                      hover: {
                        color:"#000000",
                        transition: { duration: 0.4, ease: easeType.easeOut },
                      },
                    }}
          >
            {parts[0]}
            <span className="font-accent">{highlight}</span>
            {parts[1]}
          </motion.p>
        </div>
      </div>
    </motion.button>
  );
}
