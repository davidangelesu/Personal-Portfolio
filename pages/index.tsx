import Head from "next/head";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "../components/Layout/mainLayout/layout";
import { fetchPostsNames } from "../lib/projects";
import ProjectCard from "../components/Projects/ProjectCard/ProjectCard";

export const getStaticProps: GetStaticProps = async (context) => {
	const posts = await fetchPostsNames();
	const projectsMetadata = posts.map((post) => require(`../content/projects/${post}`).meta);
	return {
		props: {
			projectsMetadata
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
export default function Home({ projectsMetadata }: { projectsMetadata: ProjectPostMeta[] }) {
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
					<h1 className={"font-semibold my-2"}>Projects</h1>
					<ul className={"m-2"}>
						{projectsMetadata.map(({ id, date, title, keywords, mainImage, images }) => {
							let imageRoute = !images ? undefined : !mainImage ? images[0] : images[mainImage];
							return (
								<li key={id}>
									<ProjectCard id={id} date={date} title={title} keywords={keywords} image={imageRoute} />
								</li>
							);
						})}
					</ul>
				</section>
			</div>
		</Layout>
	);
}
