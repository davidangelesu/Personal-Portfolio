import React, { FunctionComponent } from "react";
import Link from "next/link";
import Date from "../../Date/date";

interface Props {
	id: string;
	title: string;
	date: string;
	image?: string;
	keywords?: string[];
}

const ProjectCard: FunctionComponent<Props> = ({ id, title, date, keywords, image }) => {
	return (
		<Link href={`/projects/${id}`}>
			<a className={" hover:border-transparent hover:shadow-lg group block rounded-xl  m-2 border border-gray-200 "}>
				<div className="flex flex-col md:flex-row">
					{image ? <img src={image} className=" w-full md:w-32 h-36 object-cover my-auto" /> : null}
					<div className="m-4">
						<h2 className={"font-semibold"}>{title}</h2>
						<br />
						<small className="text-l text-gray-600">
							<Date dateString={date} />
						</small>
						{keywords ? (
							<ul className={"flex flex-row space-x-2 overflow-hidden truncate "}>
								{keywords.map((keyword) => (
									<li key={keyword} className=" bg-gray-100 rounded-lg p-1">
										{keyword}
									</li>
								))}
							</ul>
						) : null}
					</div>
				</div>
			</a>
		</Link>
	);
};

export default ProjectCard;
