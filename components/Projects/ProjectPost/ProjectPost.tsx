import Head from "next/head";
import Link from "next/link";
import Layout from "../../Layout/mainLayout/layout";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import { FunctionComponent } from "react";

interface ProjectPostProps {
	meta: ProjectPostMeta;
}
const ProjectPost: FunctionComponent<ProjectPostProps> = ({ meta, children }) => {
	//define Main Image;
	let mainImage: JSX.Element | undefined = undefined;
	if (meta.images) {
		const mainImageRoute = meta.mainImage ? meta.images[meta.mainImage] : meta.images[0];
		mainImage = <img src={mainImageRoute} className="inset-0 w-full h-full md:h-80 object-cover filter-grayscale " />;
	}

	return (
		<Layout>
			<Head>
				<title>{meta.title}</title>
			</Head>
			<article>
				<div className="mb-8">
					<ProjectTitle
						title={meta.title}
						date={meta.date}
						youtubeLink={meta.youtubeVideoLink}
						githubLink={meta.githubRepository}
					/>
					{mainImage}
				</div>
				<div className="p-2 mx-auto max-w-4xl">{children}</div>
			</article>
			<div className=" max-w-4xl mx-auto my-8">
				<Link href="/">
					<button
						type="button"
						className="bg-black  text-white text-xl justify-center font-semibold px-6 py-2 rounded-lg
							hover:border-transparent hover:shadow-lg"
					>
						Back
					</button>
				</Link>
			</div>
		</Layout>
	);
};

export default ProjectPost;
