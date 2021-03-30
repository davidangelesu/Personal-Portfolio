import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import Layout from "../components/Layout/mainLayout/layout";
import { fetchPostsFileNames } from "../lib/projects";
import ProjectCard from "../components/Projects/ProjectCard/ProjectCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";

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
	const [search, setSearch] = useState("");
	const [filteredProjectsMetadataWithId, setFilteredProjectsMetadataWithId] = useState<ProjectPostMetaWithId[]>([
		...projectsMetadataWithId,
	]);

	//Filter List of projects
	useEffect(() => {
		if (search.length > 0) {
			//apply simple search & Filter
			let lowerCaseSearch = search.toLowerCase();
			//create array of each searchWord
			let searchWords = lowerCaseSearch.split(/\s+/);

			setFilteredProjectsMetadataWithId(
				projectsMetadataWithId.filter((post) => {
					for (const searchWord of searchWords) {
						//SearchWord in Name
						let isInName = post.title.toLowerCase().includes(searchWord);
						//SearchWord in Keywords
						let isInKeywords = post.keywords.findIndex((keyword) => keyword.toLowerCase().includes(searchWord)) != -1;

						//if Searchword is not in name or keywords, return false. (to prevent unnecesary evaluations)
						if (!(isInName || isInKeywords)) {
							return false;
						}
					}
					return true;
				})
			);
		} else {
			setFilteredProjectsMetadataWithId([...projectsMetadataWithId]);
		}
	}, [search]);

	return (
		<Layout pageTitle="Projects">
			<section className={" p-2 mx-auto max-w-4xl"}>
				<h1 className={"font-semibold my-2 text-2xl"}>Projects</h1>
				<div className="m-2">
					<SearchBar search={search} setSearch={setSearch} />
				</div>

				<div className={"m-2"}>
					<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2 }}>
						<Masonry>
							{filteredProjectsMetadataWithId.map(({ id, date, title, keywords, mainImage, images }) => {
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
