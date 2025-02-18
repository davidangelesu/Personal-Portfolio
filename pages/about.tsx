import Layout from "../components/Layout/mainLayout/layout";
import React from "react";
import { motion } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function About() {
	return (
		<Layout pageTitle="About Me">
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
					<div>
						<motion.button
							className="text-base font-semibold  rounded-3xl shadow-md mx-2"
							whileHover={{ zIndex: 1, scale: 1.05, color: "#6f42c1", transition: { duration: 0.2 } }}
						>
							<a href={"https://github.com/davidangelesu"} className="flex flex-row items-center p-2" target="_blank">
								<FontAwesomeIcon icon={faGithub} color="#1b1f23" height="32" width="32" className="sm:mx-2" />
								<p className="mx-2 hidden sm:block">GitHub</p>
							</a>
						</motion.button>
						{/* TODO Update Linkedin First */}
						<motion.button
							className="text-base font-semibold  rounded-3xl shadow-md mx-2"
							whileHover={{ zIndex: 1, scale: 1.05, color: "#0077B5", transition: { duration: 0.2 } }}
						>
							<a href={"https://www.linkedin.com/in/david-angeles-ungson-55b495141/"} className="flex flex-row items-center p-2" target="_blank">
								<FontAwesomeIcon icon={faLinkedin} color="#1b1f23" height="32" width="32" className="sm:mx-2" />
								<p className="mx-2 hidden sm:block">LinkedIn</p>
							</a>
						</motion.button>
					</div>
				</div>
				<p>
					Hi, I am a Software Engineer 👨‍💻 based in Munich with a nonconventional journey into the Computer Science world. I started my academic career at CETYS University in Mexicali, Mexico pursuing my Undergraduate degree in Mechanical Engineering 🔨. I decided to continue my studies with a Master degree in Computational Mechanics at the Technical University of Munich. It is here where I found my passion in Computer Science as I was exposed into amazing applications and courses during my studies.
				</p>
				<br /><p>
					I decided to pursue a career in the world of software development as I am drawn into crafting and solving complex problems and applications. I have strong professional experience in frontend engineering focused on crafting intricated web applications.
				</p><br /><p>
					My strong analytical background has shaped my ability to dive into challenging projects not only limited to the frontend domain. I am not a framework-specific developer, as I believe in mastering the fundamentals of software engineering and adapting to the tools that best suit the problem at hand. While I have proven expertise in React, my skills are not limited by any one framework. I focus on understanding the underlying principles of development, which enables me to quickly dive into and work with a variety of technologies as needed to deliver the best possible solution.
				</p>
			</section>
		</Layout>
	);
}
