import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import Layout from "../components/Layout/mainLayout/layout";
import { fetchSkills } from "../lib/skills";
import SkillCard from "../components/Skills/SkillCard/SkillCard";
import React from "react";

export const getStaticProps: GetStaticProps = async (context) => {
	const allSkills = fetchSkills();
	console.log(allSkills);
	console.log(allSkills);
	return {
		props: {
			allSkills,
		},
	};
};
export default function Skills({ allSkills }: { allSkills: { category: string; skills: Skill[] }[] }) {
	return (
		<Layout>
			<section className={" p-2 mx-auto max-w-4xl md:my-12"}>
				<h1 className={"font-semibold my-2"}>Skills</h1>
				<p>Hi!</p>
				<p>
					This are some of the Frameworks and softwares that I have worked with in some of my projects and I am able
					to use them to solve any problem that I might face.
				</p>
			</section>
			<section className=" p-2 mx-auto max-w-4xl">
				<h1 className="font-semibold my-2">Skills</h1>
				<ul className="m-2">
					{allSkills.map(({ category, skills }) => (
						<li key={category} className="flex flex-col">
							<h2 className=" my-2">{category}</h2>
							<hr />
							<ul className="grid grid-cols-3 lg:grid-cols-4">
								{skills.map(({ name, image }) => (
									<motion.li key={name} whileHover={{ zIndex: 1, scale: 1.05, transition: { duration: 0.2 } }}>
										<SkillCard skillName={name} imageRoute={image} />
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
