import { fetchPostsIds } from "../../lib/projects";
import React, { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import fs from 'fs';
import path from 'path';
import { getMeta } from "../../lib/getMeta";


interface Props {
	meta: ProjectPostMeta;
	id: string;
}
const ProjectPost: FunctionComponent<Props> = ({ id, meta }) => {
	const Mdx = dynamic(() => import(`../../content/projects/${id}.mdx`));

	return (
		<div>
			<Mdx />
		</div>
	);
};

export default ProjectPost;

export async function getStaticPaths() {
	const postsIds = await fetchPostsIds();
	return {
		paths: postsIds.map((id) => ({ params: { id } })),
		fallback: false, // In a static-only build, we don't need fallback rendering.
	};
}

export const getStaticProps = async (ctx) => {
	const id = ctx.params.id;
	const meta = getMeta(id)

	return {
		props: {
			id,
			meta
		},
	};
};



