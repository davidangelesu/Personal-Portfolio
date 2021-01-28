import Head from "next/head";
import Layout from "../../Layout/mainLayout/layout";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import PhotoGallery from "../../PhotoGallery/PhotoGallery";
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
				<div className="p-2 mx-auto max-w-4xl">
					{children}
					{meta.images && <PhotoGallery photos={meta.images} />}
				</div>
			</article>
		</Layout>
	);
};

export default ProjectPost;
