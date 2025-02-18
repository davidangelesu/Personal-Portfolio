import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";

const AnchorVariants: Variants = {
	initial: {},
	hovering: { scale: 1.1, translateY: 5, textUnderlinePosition: "left" },
};

const NavVariants: Variants = {
	hidden: { y: "-50vh", opacity: 0 },
	shown: { y: 0, opacity: 1, transition: { delay: 0, duration: 0.5 } },
};

const NavBar = () => {
	return (
		<motion.nav variants={NavVariants} initial="hidden" animate="shown" className=" h-8 sm:h-12 p-4   flex flex-col text-base sm:text-2xl ">
			<ul className="flex flex-row justify-between mx-4 sm:mx-16 md:mx-32 align-middle h-full ">
				<li className="flex flex-col">
					<Link href="/">
						<motion.div key="home" id="home" className="menu-item m-auto  cursor-pointer" variants={AnchorVariants} whileHover="hovering" >
							Home
						</motion.div>
					</Link>
				</li>
				<li className="flex flex-col">
					<Link href="/projects">
						<motion.div key="projects" id="projects" className="menu-item m-auto cursor-pointer" variants={AnchorVariants} whileHover="hovering">
							Projects
						</motion.div>
					</Link>
				</li>
				<li className="flex flex-col">
					<Link href="/about">
						<motion.div key="about" id="about" className="menu-item m-auto cursor-pointer" variants={AnchorVariants} whileHover="hovering">
							About
						</motion.div>
					</Link>
				</li>
				<li className="flex flex-col">
					<Link href="/skills">
						<motion.div key="skills" id="skills" className="menu-item m-auto cursor-pointer" variants={AnchorVariants} whileHover="hovering">
							Skills
						</motion.div>
					</Link>
				</li>
				<li className="flex flex-col">
					<Link href="/contact">
						<motion.div key="contact" id="contact" className="menu-item m-auto cursor-pointer" variants={AnchorVariants} whileHover="hovering">
							Contact
						</motion.div>
					</Link>
				</li>
			</ul>
		</motion.nav>
	);
};

export default NavBar;
