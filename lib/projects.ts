import fs from "fs";
import path from "path";

export async function fetchPostsFileNames(): Promise<string[]> {
	return fs.promises.readdir(path.join(process.cwd(), "content/projects"));
}

export async function fetchPostsIds(): Promise<string[]> {
	return (await fetchPostsFileNames()).map((postName) => postName.replace(".mdx", ""));
}
