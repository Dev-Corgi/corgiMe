"use client";
import { motion } from "framer-motion";
import { easeType } from "@root/animationConfig";
export default function TopWhileVIewWrapper({ className = null, children }) {
  return (
      <motion.div
        className={`${className} origin-bottom`}
        initial={{ scaleY: 0 }}
        whileInView={{
          scaleY: 1,
          transition: { duration: 0.9, ease: easeType.easeOut },
        }}>
        {children}
      </motion.div>
  );
}
