"use client";
import { motion } from "framer-motion";
import BehanceLogo from "@SVG/IconBehance.svg";
import InstaLogo from "@SVG/IconInstagram.svg";
import TwitterLogo from "@SVG/IconTwitter.svg";
import DribbbleLogo from "@SVG/IconDribbble.svg";
import ContactFrame from "./ContactFrame";
import { easeType } from "@root/animationConfig";
export default function ContactList() {
  const contactList = [
    {
      contactName: "깃허브",
      contactInfo: "@Dev-Corgi",
      logo: <BehanceLogo></BehanceLogo>,
    },
    {
      contactName: "지메일",
      contactInfo: "@bora5242",
      logo: <InstaLogo></InstaLogo>,
    },
    {
      contactName: "카카오톡",
      contactInfo: "@bora5242",
      logo: <TwitterLogo></TwitterLogo>,
    },
    {
      contactName: "전화 문의",
      contactInfo: "@6440-0688",
      logo: <DribbbleLogo></DribbbleLogo>,
    },
  ];
  return (
    <motion.div
      className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 mt-36 gap-x-12 xl:grid-rows-1 xl:grid-cols-4"
      whileInView="inView"
      variants={{
        inView: {
          transition: {
            staggerChildren: 0.1, // 각 자식 요소의 애니메이션을 0.3초 간격으로 스태깅
          },
        },
      }}
    >
      {contactList.map((contactInfo, index) => {
        return (
          <motion.div
            className="col-span-1 row-span-1"
            variants={{
              inView: {
                opacity: [0, 1],
                marginTop:[60,0],
                transition: {
                  duration: 3,
                  ease: easeType.easeOut
                },
              },
            }}
            key = {index}
          >
            <ContactFrame
              contactInfo={contactInfo}
              className="col-span-1 row-span-1"
            ></ContactFrame>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
