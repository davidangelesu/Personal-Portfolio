import React, { FunctionComponent } from "react";
import Date from "../../Date/date";
import SocialBar, { Props as SocialBarProps } from "../../SocialBar/SocialBar";
interface Props {
	title: string;
	date: string;
	email?: string;
	githubLink?: string;
	instagramLink?: string;
	youtubeLink?: string;
}
const ProjectTitle: FunctionComponent<Props> = ({ title, date, githubLink, instagramLink, youtubeLink }) => {
	return (
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="text-6xl">{title}</h1>
			<div className="flex flex-row justify-between my-4">
				<div className="text-gray-500">
					<Date dateString={date} />
				</div>
				<SocialBar className="flex" githubLink={githubLink} youtubeLink={youtubeLink} instagramLink={instagramLink} />
			</div>
		</div>
	);
};
export default ProjectTitle;
