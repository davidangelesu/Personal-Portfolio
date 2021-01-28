import React, { FunctionComponent } from "react";

interface Props {
	skillName: string;
	imageRoute: string;
}

const SkillCard: FunctionComponent<Props> = ({ skillName, imageRoute }) => {
	return (
		<div
			className={
				"grid  hover:border-transparent hover:shadow-lg group  rounded-xl  m-2 border border-gray-200 bg-white overflow-hidden"
			}
		>
			<div >
				<img src={imageRoute} className=" w-full h-24 sm:h-36 lg:h-48 object-cover my-auto  rounded-t-xl" />
			</div>
			<div className="mx-auto ">
				<h2 className={"text-base font-semibold"}>{skillName}</h2>
			</div>
		</div>
	);
};

export default SkillCard;
