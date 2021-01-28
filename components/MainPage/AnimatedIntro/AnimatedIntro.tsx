import React, { useEffect, FunctionComponent } from "react";
import { motion, Variants } from "framer-motion";

const messages = ["Hi", "I am David.", "I am a Engineer and a Software Developer.", "And this is my Site."];
const HeaderVariants: Variants = {
	hidden: { x: "-100vh", opacity: 0 },
	shown: (i) => ({ x: 0, opacity: 1, transition: { delay: i * 1, duration: 1, type: "spring", stiffness: 120 } }),
};

interface IProps {
	onClickHandler: (event: any) => void;
}
const AnimatedIntro = ({ onClickHandler }: IProps) => {
	return (
		<motion.div
			className={"h-screen bg-black p-10 flex flex-col flex-auto  overflow-hidden"}
			initial={{ opacity: 1 }}
			exit={{ opacity: 0, height: 0, scale: 0, transition: { duration: 1, delay: 0 } }}
			onClick={onClickHandler}
			key="1"
		>
			{messages.map((message, i) => (
				<div key={i} className="my-auto ">
					<motion.h1
						variants={HeaderVariants}
						initial="hidden"
						animate="shown"
						custom={i}
						className=" text-4xl sm:text-7xl font-bold hover:underline text-white inline-block"
						whileHover={{ zIndex: 1, scale: 1.05, transition: { duration: 0.2 } }}
					>
						{message}
					</motion.h1>
				</div>
			))}
		</motion.div>
	);
};

export default AnimatedIntro;
