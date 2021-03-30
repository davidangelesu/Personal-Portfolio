import { GetStaticProps } from "next";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/mainLayout/layout";
import { fetchPostsFileNames } from "../lib/projects";
import ProjectCard from "../components/Projects/ProjectCard/ProjectCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React from "react";

export const getStaticProps: GetStaticProps = async (context) => {
	const postsFileNames = await fetchPostsFileNames();
	const projectsMetadataWithId = postsFileNames
		.map((post) => {
			return { ...require(`../content/projects/${post}`).meta, id: post.replace(".mdx", "") } as ProjectPostMetaWithId;
		})
		.sort((a, b) => (a.date < b.date ? 1 : -1));
	return {
		props: {
			projectsMetadataWithId,
		},
	};
};
export default function Works({ projectsMetadataWithId }: { projectsMetadataWithId: ProjectPostMetaWithId[] }) {
	return (
		<Layout pageTitle="Projects">
			<section className={" p-2 mx-auto max-w-4xl"}>
				<h1 className={"font-semibold my-2 text-2xl"}>Projects</h1>
				<div className={"m-2"}>
					<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2 }}>
						<Masonry>
							{projectsMetadataWithId.map(({ id, date, title, keywords, mainImage, images }) => {
								let imageRoute = !images ? undefined : !mainImage ? images[0] : images[mainImage];
								return (
									<motion.div key={id} whileHover={{ zIndex: 1, scale: 1.05, transition: { duration: 0.2 } }}>
										<ProjectCard id={id} date={date} title={title} keywords={keywords} image={imageRoute} />
									</motion.div>
								);
							})}
						</Masonry>
					</ResponsiveMasonry>
				</div>
			</section>
		</Layout>
	);
}
