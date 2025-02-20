import { GetStaticProps } from "next";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/mainLayout/layout";
import { fetchPostsFileNames } from "../lib/projects";
import ProjectCard from "../components/Projects/ProjectCard/ProjectCard";
import React from "react";
import { getMeta } from "../lib/getMeta";

export const getStaticProps: GetStaticProps = async (context) => {
	const postsFileNames = await fetchPostsFileNames();
	const projectsMetadataWithId = postsFileNames
		.map((post) => {
			const id = post.replace(".mdx", "")
			return { ...getMeta(id), id } as ProjectPostMetaWithId;
		})
		.sort((a, b) => (a.date < b.date ? 1 : -1))
		.filter((post) => post.stared === true);
	return {
		props: {
			projectsMetadataWithId,
		},
	};
};
export default function Home({ projectsMetadataWithId }: { projectsMetadataWithId: ProjectPostMetaWithId[] }) {

	return (
		<Layout pageTitle="My Portfolio" >
			<section className={" p-2 mx-auto max-w-4xl md:my-12"}>
				<p className="text-center">Hi there 👋, I am <span>David</span>
					<br />
					This is my site where I showcase some of my projects.<br />
					Feel free to roam around!
				</p>
			</section>
			<section className={" p-2 mx-auto max-w-4xl"}>
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

		</Layout>
	);
}
