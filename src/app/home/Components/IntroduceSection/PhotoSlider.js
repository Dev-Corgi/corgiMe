"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image1 from "@Image/Slider_1.png";
import Image2 from "@Image/Slider_2.png";
import Image3 from "@Image/Slider_3.png";
import Image from "next/image";

export default function PhotoSlider({ className }) {
	const { scrollYProgress } = useScroll();
	const rotate1 = useTransform(scrollYProgress, [0, 0.1], [-16, -8]);
	const rotate2 = useTransform(scrollYProgress, [0, 0.1], [-8, 0]);
	const rotate3 = useTransform(scrollYProgress, [0, 0.1], [-4, 4]);
	return (
		<div className={`${className}`}>
			<div className="relative flex items-center justify-center w-72 h-120 md:w-88 md:h-120 lg:w-112 lg:h-160 xl:w-152 xl:h-216">
				<motion.div
					className="absolute top-0 left-0 w-52 h-88 md:w-56 md:h-88 lg:w-72 lg:h-120 xl:w-104 xl:h-168"
					style={{ rotate: rotate1 }}>
					<Image
						src={Image1}
						alt="first slide image"
						sizes="(max-width: 428px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, (max-width: 1440px) 33vw, 25vw"
						className={"w-full h-full object-cover rounded-2xl"}
					/>
				</motion.div>
				<motion.div
					className="relative w-52 h-88 md:w-56 md:h-88 lg:w-72 lg:h-120 xl:w-104 xl:h-168"
					style={{ rotate: rotate2 }}>
					<Image
						src={Image2}
						alt="first slide image"
						sizes="(max-width: 428px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, (max-width: 1440px) 33vw, 25vw"
						className={"w-full h-full object-cover rounded-2xl"}
					/>
				</motion.div>
				<motion.div
					className="absolute bottom-0 right-0 w-52 h-88 md:w-56 md:h-88 lg:w-72 lg:h-120 xl:w-104 xl:h-168"
					style={{ rotate: rotate3 }}>
					<Image
						src={Image3}
						alt="first slide image"
						sizes="(max-width: 428px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, (max-width: 1440px) 33vw, 25vw"
						className={"w-full h-full object-cover rounded-2xl"}
					/>
				</motion.div>
			</div>
		</div>
	);
}
