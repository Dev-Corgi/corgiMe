"use client";
import { motion } from "framer-motion";
import { easeType } from "@root/animationConfig";
export default function SeparateLine() {
  return (
    <motion.div className="w-full h-px mt-24 bg-secondary"
    whileInView={{width:[0,"100%"]  ,transition: { duration: 0.9, ease: easeType.easeOut }}}></motion.div>
  );
}