import fs from "fs";
import path from "path";

export async function fetchPostsNames(): Promise<string[]> {
	return  fs.promises.readdir(path.join(process.cwd(), "content/projects"));
}
