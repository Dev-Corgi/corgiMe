"use client";
import { motion,AnimatePresence } from "framer-motion";
import DropdownSVG from "@SVG/DropDown.svg";
import React,{useState} from "react"
import { easeType } from "@root/animationConfig";
export default function Navigation({ className }) {
  const [isHover, setisHover] = useState(false)
  return (
    <div className={`${className} flex flex-row justify-between`}>
      <motion.div className="flex flex-col" whileHover="hover">
        <p className="text-xs leading-none uppercase text-primary font-primary">
          Abhishek Jah
        </p>
        <div className="relative w-full h-px">
          <motion.div
            className="absolute top-0 w-full h-px origin-right bg-primary"
            initial={{ scaleX: 1 }} // 초기 상태를 명시적으로 설정
            animate={{ scaleX: 1, transition: { duration: 0 } }}
            variants={{
              hover: {
                scaleX: [1, 0],
                transition: {
                  duration: 0.9,
                  ease: easeType.easeOut
                },
              },
            }}
          ></motion.div>
          <motion.div
            className="absolute top-0 w-full h-px origin-left bg-primary"
            initial={{ scaleX: 0 }} // 초기 상태를 명시적으로 설정
            animate={{ scaleX: 0, transition: { duration: 0 } }}
            variants={{
              hover: {
                scaleX: [0, 1], // scaleX 값은 숫자 값이어야 함
                transition: {
                  duration: 0.9,
                  delay: 0.3,
                  ease: easeType.easeOut
                },
              },
            }}
          ></motion.div>
        </div>
      </motion.div>

      <div className="hidden md:flex md:flex-col">
        <p className="text-xs leading-none uppercase text-primary font-primary">
          Playbook
        </p>
        <div className="w-full h-px bg-primary"></div>
      </div>

      <motion.div
        className="relative hidden md:flex md:flex-col"
        onMouseEnter={() =>{
          setisHover(true);
        }}
        onMouseLeave={() => {setisHover(false);}}
        whileHover="hover"
      >
        <AnimatePresence>
        {isHover &&
        <motion.div
          className="absolute pb-6 bg-white md:w-44 lg:w-48 xl:w-52 md:-left-10 lg:-left-12 xl:-left-14 rounded-3xl "
          initial={{ opacity: 0,top:-40 }} // 초기 상태를 명시적으로 설정
          animate={{
              opacity: [0, 1],
              top:[-40,-24],
              transition: {
                duration: 0.9,
                ease: easeType.easeOut
            },
          }}
          exit={{opacity: 0,top:-40}}
        >
          <div className="relative w-full h-14">
            <DropdownSVG className="absolute top-7 right-10"></DropdownSVG>
            <motion.div
              className="absolute bottom-0 h-px origin-center inset-x-4 bg-secondary"
              initial={{ scaleX: 0 }} // 초기 상태를 명시적으로 설정
              animate={{
                  scaleX: [0, 1],
                  transition: {
                    duration: 0.9,
                    ease: easeType.easeOut
                  },
              }}
            ></motion.div>
          </div>
          <motion.div className="flex flex-col w-full gap-8 md:pl-10 lg:pl-12 xl:pl-14 mt-7"
                animate={{
                    transition: {
                      staggerChildren: 0.2, // 각 자식 요소의 애니메이션을 0.3초 간격으로 스태깅
                  },
                }}>
            <div className="flex">
              <motion.p
                className="relative text-xs leading-tight font-primary text-primary"
                initial={{ top:24,opacity:0 }} // 초기 상태를 명시적으로 설정
                animate={{
                    top:[24,0],
                    opacity:[0,1],
                    transition: {
                      duration: 0.9,
                      ease: easeType.easeOut
                  },
                }}
              >
                Behance
              </motion.p>
            </div>
            <div className="flex">
              <motion.p
                className="relative text-xs leading-tight font-primary text-primary"
                initial={{ top:24,opacity:0 }} // 초기 상태를 명시적으로 설정
                animate={{
                  top:[24,0],
                  opacity:[0,1],
                  transition: {
                    duration: 0.9,
                    ease: easeType.easeOut
                },
              }}
              >
                Behance
              </motion.p>
            </div>
            <div className="flex">
              <motion.p
                className="relative text-xs leading-tight font-primary text-primary"
                initial={{ top:24,opacity:0 }} // 초기 상태를 명시적으로 설정
                animate={{
                  top:[24,0],
                  opacity:[0,1],
                  transition: {
                    duration: 0.9,
                    ease: easeType.easeOut
                },
              }}
              >
                Behance
              </motion.p>
            </div>
            <div className="flex">
              <motion.p
                className="relative text-xs leading-tight font-primary text-primary"
                initial={{ top:24,opacity:0 }} // 초기 상태를 명시적으로 설정
                animate={{
                  top:[24,0],
                  opacity:[0,1],
                  transition: {
                    duration: 0.9,
                    ease: easeType.easeOut
                },
              }}
              >
                Behance
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
}
</AnimatePresence>

        <p className="relative text-xs leading-none uppercase text-primary font-primary">
          Social
        </p>
        <div className="relative w-full h-px bg-primary"></div>
      </motion.div>

      <div className="flex flex-col">
        <p className="text-xs leading-none uppercase text-primary font-primary">
          Contact
        </p>
        <div className="w-full h-px bg-primary"></div>
      </div>
    </div>
  );
}
