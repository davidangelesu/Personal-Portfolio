declare interface ProjectPostMeta {
	date: string;
	title: string;
	keywords?: string[];
	images?: string[];
	mainImage?: number;
	youtubeVideoLink?: string;
	githubRepository?: string;
	projectLink?: string;
}

declare interface ProjectPostMetaWithId extends ProjectPostMeta{
	id:string
}