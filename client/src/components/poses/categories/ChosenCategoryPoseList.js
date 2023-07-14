import React, { useContext } from "react";
// children
import PosesCard from "./PosesCard";
import { CategoriesContext } from "../PoseIntro";

export default function ChosenCategoryPoseList({ handleBackButtonClick, categoryIndex }) {
	const categories = useContext(CategoriesContext);
	const poses = categories[categoryIndex].poses;

	return (
		<div className="">
			<button onClick={handleBackButtonClick}>Back to Categories</button>
			{poses.map((pose) => (
				<div key={pose.id}>
					<PosesCard
						categories={categories}
						categoryIndex={categoryIndex}
						pose={pose}
						//  poseName={pose.english_name} poseImg={pose.url_png} poseBenefits={pose.pose_benefits}
					/>
				</div>
			))}
		</div>
	);
}
