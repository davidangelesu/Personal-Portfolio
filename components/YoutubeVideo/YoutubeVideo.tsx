import React, { FunctionComponent } from "react";

interface Props {
	className?: string;
	youtubeEmbededLink: string;
}
const YoutubeVideo: FunctionComponent<Props> = ({ className, youtubeEmbededLink }) => {
	return (
		<div
			className={className}
			style={{
				position: "relative",
				paddingBottom: "56.25%" /* 16:9 */,
				paddingTop: 25,
				height: 0,
			}}
		>
			<iframe
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
				src={youtubeEmbededLink}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	);
};

export default YoutubeVideo;
