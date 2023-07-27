import React from "react";
import PosesCard from "../categories/PosesCard";
import IndividualPoseCard from "./IndividualPoseCard";

export default function PoseDifficultyCard({ handleBackButtonClick, difficultyData }) {
	return (
		<div className="pose-difficulty-card">
			<h1>{difficultyData.difficulty_level} Poses</h1>

			{difficultyData.poses.map((pose) => (
				<div key={pose.id}>
					<IndividualPoseCard pose={pose} />
				</div>
			))}

			<button onClick={handleBackButtonClick}>back</button>
		</div>
	);
}
