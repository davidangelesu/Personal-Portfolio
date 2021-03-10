import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export interface Props {
	className?: string;
	email?: string;
	githubLink?: string;
	instagramLink?: string;
	youtubeLink?: string;
	bigIcons?: boolean;
	externalLink?: string;
}
const SocialBar: FunctionComponent<Props> = ({
	className,
	email,
	githubLink,
	instagramLink,
	youtubeLink,
	externalLink,
	bigIcons,
}) => {
	const iconClass = bigIcons ? "fa-6x" : "fa-3x";

	return (
		<div className={className}>
			{githubLink ? (
				<a href={githubLink} className="mx-2">
					<FontAwesomeIcon icon={faGithub} color="#1b1f23" className={iconClass} width="32" height="32" />
				</a>
			) : null}
			{youtubeLink ? (
				<a href={youtubeLink} className="mx-2">
					<FontAwesomeIcon icon={faYoutube} color={"#FF0000"} className={iconClass} width="32" height="32" />
				</a>
			) : null}
			{instagramLink ? (
				<a href={instagramLink} className="mx-2">
					<FontAwesomeIcon icon={faInstagram} className={iconClass} width="32" height="32" />
				</a>
			) : null}
			{email ? (
				<a href={email} className="mx-2">
					<FontAwesomeIcon icon={faEnvelope} className={iconClass} width="32" height="32" />
				</a>
			) : null}
			{externalLink ? (
				<a href={externalLink} className="mx-2">
					<FontAwesomeIcon icon={faExternalLinkAlt} color="#000000" className={iconClass} width="32" height="32" />
				</a>
			) : null}
		</div>
	);
};

export default SocialBar;
