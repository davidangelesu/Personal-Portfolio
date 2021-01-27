import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface Props {
	className?: string;
	email?: string;
	githubLink?: string;
	instagramLink?: string;
	youtubeLink?: string;
}
const SocialBar: FunctionComponent<Props> = ({ className, email, githubLink, instagramLink, youtubeLink }) => {
	return (
		<div className={className}>
			{githubLink ? (
				<a href={githubLink}>
					<FontAwesomeIcon icon={faGithub} color={"6f42c1"} className="h-16 w-16 mx-2" />
				</a>
			) : null}
			{youtubeLink ? (
				<a href={youtubeLink}>
					<FontAwesomeIcon icon={faYoutube} color={"#FF0000"} className="h-16 w-16 mx-2" />
				</a>
			) : null}
			{instagramLink ? (
				<a href={instagramLink}>
					<FontAwesomeIcon icon={faInstagram} className="h-16 w-16 mx-2" />
				</a>
			) : null}
			{email ? (
				<a href={email}>
					<FontAwesomeIcon icon={faEnvelope} className="h-16 w-16 mx-2" />
				</a>
			) : null}
		</div>
	);
};

export default SocialBar;
