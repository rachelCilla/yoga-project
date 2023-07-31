import React from "react";
import PosesCard from "./IndividualPoseCard";

export default function PoseDifficultyCard({ handleBackButtonClick, difficultyData }) {
  
    const poses = difficultyData.poses
    console.log("poses", poses)
	return (
		<div className="pose-difficulty-card">
			<h1>{difficultyData.difficulty_level} Poses</h1>

        
			{poses.map((pose) => (
				<div key={pose.id}>
                    <PosesCard pose={pose} />
				</div>
			))}

			<button onClick={handleBackButtonClick}>back</button>
		</div>
	);
}
