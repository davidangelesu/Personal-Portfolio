import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import Layout from "../components/Layout/mainLayout/layout";
import { fetchSkills } from "../lib/skills";
import SkillCard from "../components/Skills/SkillCard/SkillCard";
import React from "react";

export const getStaticProps: GetStaticProps = async (context) => {
	const allSkills = fetchSkills();
	return {
		props: {
			allSkills,
		},
	};
};
export default function Skills({ allSkills }: { allSkills: { category: string; skills: Skill[] }[] }) {
	return (
		<Layout pageTitle="Skills">
			<section className={" p-2 mx-auto max-w-4xl md:my-12"} key="skills">
				<h1 className={"font-semibold my-2"}>Skills</h1>
				<p>Hi!</p>
				<p>
					This are some of the programming languages, frameworks and libraries that I feel comfortable working with.

				</p>
			</section>
			<section className=" p-2 mx-auto max-w-4xl" key="skill list">
				<h1 className="font-semibold my-2">Skills</h1>
				<ul className="m-2">
					{allSkills.map(({ category, skills }) => (
						<li key={category} className="flex flex-col">
							<h2 className=" my-2">{category}</h2>
							<hr />
							<ul className="grid grid-cols-3 lg:grid-cols-4">
								{skills.map(({ name, image, darkImage, link }) => (
									<motion.li key={name} whileHover={{ zIndex: 1, scale: 1.05, transition: { duration: 0.2 } }}>
										<SkillCard skillName={name} imageRoute={image} darkImage={darkImage} urlLink={link} />
									</motion.li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
