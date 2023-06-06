import React, { useState, useEffect } from "react";
import axios from "axios";
import PoseDifficultyCard from "./PoseDifficultyCard";
import styles from "../../css/App.module.css";

export default function PosesByDifficulty({ showDifficulty }) {
	const [showPoseList, setShowPoseList] = useState(false);
	const [difficultyData, setDifficultyData] = useState();
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleButtonClick = (difficulty) => {
		setShowPoseList(!showPoseList);
		getDifficultyData(difficulty);
	};

	const getDifficultyData = (difficulty) => {
		axios.get(
			`https://yoga-api-nzy4.onrender.com/v1/poses?level=${difficulty}`
		)
			.then((response) => {
				setDifficultyData(response.data);
				// console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		const title = document.querySelector(`.${styles.posesBy}`);

		if (showDifficulty) {
			title.classList.add(styles.show);
		}
	}, [showDifficulty]);

	return (
		<div className="poses-by-difficulty">
			<h1
				className={`${styles.posesBy} ${
					isHovered ? styles.hovered : ""
				}`}
				onMouseEnter={handleHover}
				onMouseLeave={handleMouseLeave}
			>
				Poses by Difficulty
			</h1>
			{isHovered && (
				<>
					<button
						onClick={() =>
							handleButtonClick("beginner")
						}
					>
						Beginner Poses
					</button>
					<button
						onClick={() =>
							handleButtonClick("intermediate")
						}
					>
						Intermediate Poses
					</button>
					<button
						onClick={() => handleButtonClick("expert")}
					>
						Expert Poses
					</button>
				</>
			)}
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
