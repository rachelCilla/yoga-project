import React, { useState, useEffect } from "react";
import axios from "axios";
import PoseDifficultyCard from "./PoseDifficultyCard";
import { Link } from "react-router-dom";

export default function PosesByDifficulty({ showDifficulty }) {
	const [showPoseList, setShowPoseList] = useState(false);
	const [difficultyData, setDifficultyData] = useState();
	const [difficulty, setDifficulty] = useState();

	const handleButtonClick = (difficulty) => {
		setDifficulty(difficulty);
		getDifficultyData(difficulty);
	};

	const getDifficultyData = (difficulty) => {
		axios.get(`https://yoga-api-nzy4.onrender.com/v1/poses?level=${difficulty}`)
			.then((response) => {
				setDifficultyData(response.data);
				setShowPoseList(true); // Show the PoseDifficultyCard component after getting data
				// console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="poses-by-difficulty">
			<h1>Poses by Difficulty</h1>

			<>
				{/* Update the Link component to use the state difficulty */}
				{/* <Link to={`/${difficulty}`}> */}
				<button
					className="block my-8 rounded bg-blue-700 px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
					onClick={() => handleButtonClick("beginner")}>
					Beginner Poses
				</button>
				{/* </Link> */}

				{/* <button onClick={() => handleButtonClick("beginner")}>Beginner Poses</button> */}
				<button
					className="block  mb-8 rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
					onClick={() => handleButtonClick("intermediate")}>
					Intermediate Poses
				</button>
				<button
					className="block mb-8 rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
					onClick={() => handleButtonClick("expert")}>
					Expert Poses
				</button>
			</>

			{/* POSE DIFFICULTY CARD rendering */}
			{difficultyData && showPoseList && <PoseDifficultyCard handleBackButtonClick={handleButtonClick} difficultyData={difficultyData} />}
		</div>
	);
}
