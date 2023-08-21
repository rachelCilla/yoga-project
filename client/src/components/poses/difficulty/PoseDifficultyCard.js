import React from "react";
import PosesCard from "./IndividualPoseCard";
import { Link } from "react-router-dom";
export default function PoseDifficultyCard({
	handleBackButtonClick,
	difficultyData,
}) {
	const poses = difficultyData.poses;

	return (
		<div className="">
			<h1 className="text-white font-mont font-semibold display-5 underline my-3">
				{difficultyData.difficulty_level} Poses
			</h1>

			<div className="row">
				<div className=" d-flex flex-wrap flex-fill">
					{poses.map((pose) => (
						<div
							key={pose.id}
							className="col-12 col-md-6 col-lg-4 mb-4  "
						>
							<div className="d-flex flex-column h-100">
								<PosesCard
									pose={pose}
									className=""
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<Link
				to="/home"
				className="mb-3  px-5 py-2 btn "
				style={{ backgroundColor: "#7E6765", color: "#FFFFFF" }}
			>
				Back
			</Link>
		</div>
	);
}
