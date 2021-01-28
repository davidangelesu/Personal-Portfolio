import { GetStaticProps } from "next";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/mainLayout/layout";
import { fetchPostsFileNames } from "../lib/projects";
import ProjectCard from "../components/Projects/ProjectCard/ProjectCard";
import AnimatedIntro from "../components/MainPage/AnimatedIntro/AnimatedIntro";
import React, { useState } from "react";

export const getStaticProps: GetStaticProps = async (context) => {
	const postsFileNames = await fetchPostsFileNames();
	const projectsMetadataWithId = postsFileNames
		.map((post) => {
			return { ...require(`../content/projects/${post}`).meta, id: post.replace(".mdx", "") } as ProjectPostMetaWithId;
		})
		.sort((a, b) => (a.id < b.id ? 1 : -1));
	return {
		props: {
			projectsMetadataWithId,
		},
	};
};

let name = "David Angeles";
let header = (
	<div className="p-8 items-center">
		{/* MODIFY */}
		<img src="/images/profile.jpg" className="w-32 h-32 md:w-48 md:h-auto  rounded-full mx-auto" alt={name} />
		<h1 className="text-6xl font-semibold">{name}</h1>
	</div>
);
export default function Home({ projectsMetadataWithId }: { projectsMetadataWithId: ProjectPostMetaWithId[] }) {
	const [isHeroVisible, setIsHeroVisible] = useState(true);
	console.log(isHeroVisible);
	const onClickHideHero = () => {
		setIsHeroVisible(false);
	};
	return (
		<Layout>
			<header>
				<AnimatePresence>{isHeroVisible && <AnimatedIntro onClickHandler={onClickHideHero} />}</AnimatePresence>
			</header>
			{!isHeroVisible && (
				<section className={" my-2 p-2 mx-auto max-w-4xl"}>
					<h1 className={"font-semibold my-2"}>Selected Projects</h1>
					<ul className={"m-2"}>
						{projectsMetadataWithId.map(({ id, date, title, keywords, mainImage, images }) => {
							let imageRoute = !images ? undefined : !mainImage ? images[0] : images[mainImage];
							return (
								<motion.li key={id} whileHover={{ zIndex: 1, scale: 1.05, transition: { duration: 0.2 } }}>
									<ProjectCard id={id} date={date} title={title} keywords={keywords} image={imageRoute} />
								</motion.li>
							);
						})}
					</ul>
				</section>
			)}
		</Layout>
	);
}
