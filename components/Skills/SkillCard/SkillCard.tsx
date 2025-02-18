import Link from "next/link";
import React, { FunctionComponent } from "react";

interface Props {
	skillName: string;
	imageRoute: string;
	urlLink: string;
	darkImage?: boolean
}

const SkillCard: FunctionComponent<Props> = ({ skillName, imageRoute, darkImage, urlLink }) => {
	return (
		<a target="_blank" href={urlLink} rel="noopener noreferrer">
			<div className="relative  hover:border-transparent shadow-md hover:shadow-lg group  rounded-xl  m-2 border border-gray-200 bg-white overflow-hidden" >
				<img src={imageRoute} className="w-full h-24 sm:h-36 lg:h-48 object-cover my-auto  rounded-t-xl a" />
				<div className="absolute z-10 bottom-0 left-0 w-full  px-4 pb-2 bg-white bg-opacity-30">
					<h2 className={` relative bottom-0 text-base font-semibold ${darkImage ? " text-white " : "text-black"}`}>{skillName}</h2>
				</div>
			</div>
		</a >
	);
};

export default SkillCard;
