import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import PosesCard from "./poses/PosesCard";
import axios from "axios";

export default function FavoritePosesList({
	handleBackButtonClick,
	favoritePose,
	showFavorites,
}) {
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const [apiData, setApiData] = useState(null);

	const userEmail = cookies.Email;

	const getPoseData = (pose) => {
		return axios
			.get(
				`https://yoga-api-nzy4.onrender.com/v1/poses?name=${pose}`
			)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
				return null;
			});
	};

	const getAllFavorites = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_SERVER_URL}/favorite_poses/${userEmail}`,
				{
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}
			);
			const data = await response.json();
			return data;
			// const dataNames = data.map((obj) => obj.pose_name);
			// const uniqueDataNames = [...new Set(dataNames)];
			//     //  uniqueDataNames = ['Boat', 'Half Boat', 'Chair', 'Crow', 'Dolphin', 'Side Plank', 'Plank']
			// const fetchAllPoseData = async () => {
			//         await Promise.all(uniqueDataNames.map(pose => getPoseData(pose)));

			// };
		} catch (err) {
			console.log(err);
		}
	};

	// IMMEDIATELY CALLED
	useEffect(() => {
		getAllFavorites()
			.then((data) => {
				const dataNames = data.map((obj) => obj.pose_name);
				const uniqueDataNames = [...new Set(dataNames)];

				const fetchAllPoseData = async () => {
					// console.log('unique', uniqueDataNames)=['Boat', 'Half Boat', 'Chair', 'Crow', 'Dolphin', 'Side Plank', 'Plank']
					const poseData = await Promise.all(
						uniqueDataNames.map((poseName) =>
							getPoseData(poseName)
						)
					);
					//    console.log('posedata',poseData)
					// ;=(7) [undefined, undefined, undefined, undefined, undefined, undefined, undefined]
					const filteredPoseData = poseData.filter(
						(pose) => pose !== null
					);
					setApiData(filteredPoseData);
				};

				fetchAllPoseData();
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="">
			<h1 className="">Favorite Poses List</h1>
			<p>{userEmail}</p>
			<button onClick={handleBackButtonClick}>Back</button>
			{apiData !== null &&
				apiData.map((poseObj) => (
					<div key={poseObj.id}>
						<PosesCard
							pose={poseObj}
							showFavorites={showFavorites}
						/>
					</div>
				))}
		</div>
	);
}
