import Layout from "../components/Layout/mainLayout/layout";
import React from "react";
import { motion } from "framer-motion";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function About() {
	return (
		<Layout>
			<section className="p-8 items-center" key="userImage">
				<motion.img
					key="imageUser"
					src="/images/profile.jpg"
					className="w-32== h-32 md:w-48 md:h-auto lg:w-64  rounded-full mx-auto shadow-lg"
					alt="Profile"
					whileHover={{ zIndex: 1, scale: 1.05, transition: { duration: 0.2 } }}
				/>
			</section>
			<section className=" mx-auto max-w-4xl flex flex-col p-4" key="about">
				<div className="flex items-end justify-between my-4 ">
					<h1 className="font-semibold ">About Me</h1>
					<motion.button
						className="text-base font-semibold  rounded-3xl shadow-md"
						whileHover={{ zIndex: 1, scale: 1.05, transition: { duration: 0.2 } }}
					>
						<a href={"https://github.com/davidange"} className="flex flex-row items-center p-2">
							<FontAwesomeIcon icon={faGithubSquare} color="#1b1f23" width="32" height="32" className="mx-2" />
							<p className="mx-2 hidden sm:block" >GitHub</p>
						</a>
					</motion.button>
				</div>
				<p>
					I am a Software Developer 👩‍💻 and an Engineer 🛠 in Munich. I studied at CETYS University (in Mexicali, Baja
					California, Mexico) my Undergraduate degree in Mechanical Engineering and had the opportunity of working in
					the industry before continuing with my studies.
				</p>
				<p>Currently I am pursuing my Master degre in Computational Mechanics at the Technical University of Munich.</p>
				<br></br>
				{/* <p>I really enjoy programming and would love to pursue a career as a Software Developer😁 .</p> */}
			</section>
		</Layout>
	);
}
