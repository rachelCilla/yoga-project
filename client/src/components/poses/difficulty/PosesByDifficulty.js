import React, { useState, useEffect } from "react";
import axios from "axios";
import PoseDifficultyCard from "./PoseDifficultyCard";
import { Link } from "react-router-dom";

export default function PosesByDifficulty({ showDifficulty }) {
	const [showPoseList, setShowPoseList] = useState(false);
	const [difficultyData, setDifficultyData] = useState();
	const [difficulty, setDifficulty] = useState();
	const [loading, setLoading] = useState(false);

	const handleButtonClick = (difficulty) => {
		setLoading(true);
		setDifficulty(difficulty);
		getDifficultyData(difficulty);
	};

	const getDifficultyData = (difficulty) => {
		axios.get(
			`https://yoga-api-nzy4.onrender.com/v1/poses?level=${difficulty}`
		)
			.then((response) => {
				setDifficultyData(response.data);
				setShowPoseList(true); // Show the PoseDifficultyCard component after getting data
				// console.log(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="bg-grayBlueDarker container mt-20 text-center ">
			{/* HEADING */}
			<h1
				className=" display-4 pt-5 font-mont font-semibold text-center text-white  "
				initial={{ opacity: 0, y: 80 }}
			>
				Poses by Difficulty
			</h1>
			<Link
				className="m-3  px-5 btn mb-5"
				style={{ backgroundColor: "#7E6765", color: "#FFFFFF" }}
				to="/home"
			>
				Back
			</Link>
			{/* BUTTONS */}
			<div className="row">
				<button
					className="   py-2 btn btn-secondary pb"
					onClick={() => handleButtonClick("beginner")}
				>
					Beginner Poses
				</button>

				<button
					className=" py-2 btn btn-secondary "
					onClick={() => handleButtonClick("intermediate")}
				>
					Intermediate Poses
				</button>
				<button
					className="   py-2 btn btn-secondary "
					onClick={() => handleButtonClick("expert")}
				>
					Expert Poses
				</button>
				{loading && (
					<div
						className="spinner-border text-light"
						role="status"
					>
						{difficulty && (
							<span className="sr-only">
								`${difficulty} poses are
								loading... This may take a
								moment `{" "}
							</span>
						)}
						<span className="sr-only"></span>
					</div>
				)}
			</div>

			{/* POSE DIFFICULTY CARD rendering */}
			{difficultyData && showPoseList && (
				<PoseDifficultyCard
					handleBackButtonClick={handleButtonClick}
					difficultyData={difficultyData}
				/>
			)}
		</div>
	);
}
