import Head from "next/head";
import Layout from "../../Layout/mainLayout/layout";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import { FunctionComponent } from "react";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";

interface ProjectPostProps {
	meta: ProjectPostMeta;
}

const customComponents: MDXProviderComponents = {
	h1: (props) => <h1 className="mb-8" {...props}></h1>,
	h2: (props) => <h1 className="mb-6" {...props}></h1>,
	p: (props) => <p className="my-3.5" {...props}></p>,
};

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
						externalLink={meta.projectLink}
					/>
					{mainImage}
				</div>
				<div className="p-4 mx-auto max-w-4xl">
					<MDXProvider components={customComponents}>{children}</MDXProvider>
					{meta.images && <PhotoGallery photos={meta.images} />}
				</div>
			</article>
		</Layout>
	);
};

export default ProjectPost;
