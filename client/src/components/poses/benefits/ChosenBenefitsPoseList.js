import React from "react";
import posesBenefitData from "../PoseData";
import PosesCard from "../categories/PosesCard";
import ErrorBoundary from "../ErrorBoundary";

export default function ChosenBenefitsPoseList({ handleBackClick, activeItem, mainCategory, activeSubCategory }) {
	const poses = posesBenefitData[activeItem]?.[mainCategory]?.[activeSubCategory] || [];
console.log("poses benefits page:", poses)
	return (
		<div>
			<h3>Poses that {activeSubCategory}</h3>
			<button onClick={handleBackClick}>Back</button>
			{poses.map((pose, index) => (
				<div key={index}>
					<ErrorBoundary>
						<PosesCard pose={pose} />
                        
					</ErrorBoundary>
				</div>
			))}
		</div>
	);
}
// poses benefits page: (13) ['Cat', 'Dolphin', 'King Pigeon', 'Half Boat', 'Half-Moon', 'Handstand', 'Plow', 'Seated Forward Bend', 'Standing Forward Bend', 'Lotus', 'Shoulder Stand', 'Side Plank', 'Triangle']