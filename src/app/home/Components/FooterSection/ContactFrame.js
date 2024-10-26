"use client";
import { motion } from "framer-motion";
import BehanceIcon from "@SVG/IconBehance.svg";
import { easeType } from "@root/animationConfig";
export default function ContactFrame({
  className,
  contactInfo: { contactName, contactInfo, logo },
}) {
  return (
    <motion.div className={`${className} `} whileHover="hover">
      <div className="relative flex flex-col font-primary">
        <motion.div
          className="absolute w-full bg-point"
          initial={{ height: 0 }}
          variants={{
            hover: {
              height: [0, "100%"],
              transition: { duration: 0.9, ease: easeType.easeOut },
            },
          }}
        ></motion.div>
        <div className="z-10 w-full h-px bg-white"></div>
        <div className="flex py-6">
        <motion.div
          className="z-10 flex flex-row items-center justify-between w-full"
          initial={{ paddingRight: 0, paddingLeft: 0 }}
          variants={{
            hover: {
              paddingLeft: [0, 20],
              paddingRight: [0, 20],
              transition: { duration: 0.9, ease: easeType.easeOut },
            },
          }}
        >
          <div className="flex flex-col">
            <p className="text-2xl leading-tight text-white">{contactName}</p>
            <p className="text-xs leading-tight text-secondary">
              {contactInfo}
            </p>
          </div>
          <div className="flex items-center justify-center text-white bg-white rounded-full size-12 lg:size-14 xl:size-16">
            <BehanceIcon className="text-black size-5 xl:size-6"></BehanceIcon>
          </div>
        </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
