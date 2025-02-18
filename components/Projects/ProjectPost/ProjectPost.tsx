import Layout from "../../Layout/mainLayout/layout";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import React, { FunctionComponent, JSX, PropsWithChildren } from "react";
import { MDXProvider } from "@mdx-js/react";
import PDFViewer from "../../PDFViewer/PDFViewer";
import { MDXComponents } from "mdx/types";

interface ProjectPostProps {
	meta: ProjectPostMeta;
}

const customComponents: MDXComponents = {
	h1: (props) => <h1 className="mb-8" {...props}></h1>,
	h2: (props) => <h1 className="mb-6" {...props}></h1>,
	p: (props) => <p className="my-3.5" {...props}></p>,
};

const ProjectPost: FunctionComponent<PropsWithChildren<ProjectPostProps>> = ({ children, meta }) => {
	//define Main Image;
	let mainImage: JSX.Element | undefined = undefined;
	if (meta.images) {
		const mainImageRoute = meta.mainImage ? meta.images[meta.mainImage] : meta.images[0];
		mainImage = <img src={mainImageRoute} className="inset-0 w-full h-full md:h-80 object-cover filter-grayscale " />;
	}

	return (
		<Layout pageTitle={meta.title}>
			<article >
				{/* Title */}
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
				{/* Content */}
				<div className="p-4 mx-auto max-w-4xl">
					<MDXProvider components={customComponents}>{children}</MDXProvider>
					{meta.pdfUrl && (
						<div className="w-full h-96 lg:h-screen my-4 lg:py-2">
							<PDFViewer pdfUrl={meta.pdfUrl} />
						</div>
					)}
					{meta.images && <PhotoGallery photos={meta.images} />}
				</div>
			</article>
		</Layout>
	);
};

export default ProjectPost;
