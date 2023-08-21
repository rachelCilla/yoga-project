import React from "react";
import posesBenefitData from "../PoseData";
import PosesCard from "../categories/PosesCard";
import ErrorBoundary from "../ErrorBoundary";
import { useState, useEffect } from "react";
export default function ChosenBenefitsPoseList({
	handleBackClick,
	activeItem,
	mainCategory,
	activeSubCategory,
}) {
	const poses =
		posesBenefitData[activeItem]?.[mainCategory]?.[activeSubCategory] ||
		[];
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (poses.length > 0) {
			setLoading(false);
		}
	}, [poses]);

	return (
		<div className="m-2   pt-3 rounded">
			<div className="bg-light mb-2 rounded p-2">
				<h3 className="m-1 mb-2">
					List of poses that
					<span className="block underline ">
						{activeSubCategory}{" "}
					</span>{" "}
				</h3>
				<button
					className="mb-2 mt-2 px-5 btn "
					style={{
						backgroundColor: "#7E6765",
						color: "#FFFFFF",
					}}
					onClick={handleBackClick}
				>
					Back
				</button>
			</div>
			{loading && <div className="text-center">Loading...</div>}
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
