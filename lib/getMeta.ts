import path from "path";
import fs from "fs";

export const getMeta = (id: string): ProjectPostMeta => {
  const filePath = path.join(process.cwd(), "content", "projects", `${id}.mdx`);
  const data = fs.readFileSync(filePath, "utf8");
  const match = data.match(/export\s+const\s+meta\s*=\s*({[\s\S]*?})/);
  if (match) {
    return new Function(`return (${match[1]})`)(); // Safely parse as JavaScript object
  }
  return null;
};
