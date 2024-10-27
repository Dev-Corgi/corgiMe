"use client";
import { motion } from "framer-motion";
import ContactFrame from "./ContactFrame";
import GithubLogo from "@SVG/IconGithub.svg"
import GmailLogo from "@SVG/IconGmail.svg"
import CallLogo from "@SVG/IconCall.svg"
import MessengerLogo from "@SVG/IconMessage.svg"
import { easeType } from "@root/animationConfig";
export default function ContactList() {
  const contactList = [
    {
      contactName: "깃허브",
      contactInfo: "@Dev-Corgi",
      logo: <GithubLogo className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"></GithubLogo>,
    },
    {
      contactName: "지메일",
      contactInfo: "@bora5242",
      logo: <GmailLogo className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"></GmailLogo>,
    },
    {
      contactName: "카카오톡",
      contactInfo: "@bora5242",
      logo: <MessengerLogo className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"></MessengerLogo>,
    },
    {
      contactName: "전화 문의",
      contactInfo: "@6440-0688",
      logo: <CallLogo className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"></CallLogo>,
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
