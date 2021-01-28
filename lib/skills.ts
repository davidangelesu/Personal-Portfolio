export function fetchSkills(): { category: string; skills: Skill[] }[] {
	const skillsPreProcessed = require("../content/skills/index.json");

	let skills: { category: string; skills: Skill[] }[] = [];
	for (const category in skillsPreProcessed) {
		skills.push({ category: category, skills: skillsPreProcessed[category] });
	}
	return skills;
}
