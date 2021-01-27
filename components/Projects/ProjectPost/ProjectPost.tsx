import Head from "next/head";
import Link from "next/link";
import Layout from "../../Layout/mainLayout/layout";
import Date from "../../Date/date";
import SocialBar from "../../SocialBar/SocialBar";
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
					<div className="max-w-4xl mx-auto p-4">
						<h1 className="text-6xl">{meta.title}</h1>
						<div className="flex flex-row justify-between my-4">
							<div className="text-gray-500">
								<Date dateString={meta.date} />
							</div>
							<SocialBar className="flex" githubLink={meta.githubRepository} youtubeLink={meta.youtubeVideoLink} />
						</div>
					</div>
					{mainImage}
				</div>
				{children}
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