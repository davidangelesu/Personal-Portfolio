declare interface ProjectPostMeta {
	date: string;
	title: string;
	keywords?: string[];
	images?: string[];
	mainImage?: number;
	youtubeVideoLink?: string;
	githubRepository?: string;
	projectLink?: string;
	id: string;
}

declare interface ProjectData extends Omit<ProjectPostMeta, "imageFolder"> {
	contentHTML: string;
}
