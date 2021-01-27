import Head from "next/head";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import Layout, { siteTitle } from "../components/Layout/mainLayout/layout";
import { fetchPostsFileNames } from "../lib/projects";
import ProjectCard from "../components/Projects/ProjectCard/ProjectCard";

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
	return (
		<Layout home header={header}>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div className="p-2 mx-auto max-w-4xl">
				<section className={"text-xl my-4"}>
					<p>
						Hi there! I'm <b>David</b>. I'm an mechanical engineer and a software developer. Currently my site is under
						construction, so the current look is not final {":)"}
					</p>
				</section>
				<section className={" my-4"}>
					<h1 className={"font-semibold my-2"}>Selected Projects</h1>
					<ul className={"m-2"}>
						{projectsMetadataWithId.map(({ id, date, title, keywords, mainImage, images }) => {
							let imageRoute = !images ? undefined : !mainImage ? images[0] : images[mainImage];
							return (
								<motion.li key={id} whileHover={{ zIndex: 1, scale: 1.2, transition: { duration: 0.2 } }}>
									<ProjectCard id={id} date={date} title={title} keywords={keywords} image={imageRoute} />
								</motion.li>
							);
						})}
					</ul>
				</section>
			</div>
		</Layout>
	);
}
