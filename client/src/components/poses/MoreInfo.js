import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function MoreInfo() {
	const [videoId, setVideoId] = useState("");
	const [addedToFavorites, setAddedToFavorites] = useState(false);
	const [error, setError] = useState(null); // log out user function
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const stringAddToFavorites = queryParams.get("addToFavorites");
	// Convert the function string back to a function
	const addToFavorites = eval(`(${stringAddToFavorites})`);

	const data = location.state;
	const [openLogin, setOpenLogin] = useState(false);
	const navigate = useNavigate();
	// const loggedIn = useOutletContext();
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const { selectedPose, showingFavorites, loggedIn } = location.state;

	const pose = selectedPose;
	// const { pose } = data.pose;
	// const showingFavorites = data.showingFavorites;
	// const favoritesPose = data.favoritesPose;
	// const addToFavorites = data.addToFavorites;

	// console.log("data", data);
	// console.log("poseEnglishName:", pose);
	//pose: {poseEnglishName: 'Dolphin'}

	// const pose = poseList.find((pose) => pose.english_name === poseEnglishName);
	// console.log("pose currently --- ", pose);

	// useEffect(() => {
	// 	console.log("favroies", favoritesPose);
	// }, []);

	// const addToFavorites = async (pose_name) => {
	// 	const user_email = cookies.Email;
	// 	const date = new Date();
	// 	const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/favorite_poses`, {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify({ user_email, pose_name, date }),
	// 	});

	// 	const data = await response.json();

	// 	if (data.detail) {
	// 		setError(data.detail);
	// 	} else {
	// 		setAddedToFavorites(true);
	// 	}
	// };

	const handleAddToFavorites = async () => {
		try {
			await addToFavorites(pose.english_name);
			setAddedToFavorites(true);
		} catch (error) {
			console.log("error", error);
			setError("Failed to add favorite pose");
		}
	};

	// youtube video
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://www.googleapis.com/youtube/v3/search",
					{
						params: {
							key: "AIzaSyA54q0EAFfvYQ_s1iZKcwo4sFSluUTjPXo",
							q: `${pose.english_name} yoga pose guide`,
							part: "snippet",
							type: "video",
							maxResults: 1,
						},
					}
				);

				const video = response.data.items[0];
				const videoId = video.id.videoId;
				setVideoId(videoId);
			} catch (error) {
				console.error("Error fetching YouTube video:", error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="modal show d-block ">
			<Modal
				dialogClassName="modal-100w"
				show={true}
				onHide={() => navigate(-1)}
			>
				<Modal.Header
					closeButton
					className="text-center mx-auto w-full flex "
				>
					<Modal.Title className="mx-auto w-100">
						More info about <br />{" "}
						<span className=" underline h2">
							{pose.english_name}
						</span>{" "}
					</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<h6 className="text-center">
						The Sanskrit name of {pose.english_name}{" "}
						Pose is
						<span className="font-bold ">
							{" "}
							{pose.sanskrit_name}{" "}
						</span>
					</h6>
					<h6 className="text-center">
						{pose.translation_name}
					</h6>
					<img
						className="max-w-xs mx-auto"
						src={pose.url_png}
						alt=""
					/>
					<h3>Pose Benefits:</h3>
					<p>{pose.pose_benefits}</p>

					<h3>Pose Instructions:</h3>
					<p>{pose.pose_description}</p>
					<h6>
						For further assistance with{" "}
						{pose.english_name} pose, watch this
						tutorial:
					</h6>
					<div>
						{videoId && (
							<iframe
								className="mx-auto "
								width="560"
								height="315"
								src={`https://www.youtube.com/embed/${videoId}`}
								title="YouTube Video"
								frameBorder="0"
								allowFullScreen
							></iframe>
						)}
					</div>
				</Modal.Body>

				<Modal.Footer>
					{error && <p>{error}</p>}
					{/* <Link to={`/posesbycategory/${pose.category_name}`}> */}
					<Button
						onClick={() => navigate(-1)}
						variant="secondary"
					>
						Go back
					</Button>

					{!loggedIn && (
						<Button
							type="button"
							className="btn btn-secondary"
							onClick={() => setOpenLogin(true)}
						>
							Add to Favorites (Login Required)
						</Button>
					)}

					{openLogin && (
						<>
							<p>
								{" "}
								Please login or signup to add
								favorites{" "}
							</p>
							<Link to="/auth">
								<Button>
									{" "}
									Login or Sign Up
								</Button>
							</Link>
						</>
					)}
					{loggedIn && !showingFavorites && (
						<Button
							variant="primary"
							onClick={() =>
								handleAddToFavorites(
									pose.english_name
								)
							}
						>
							{addedToFavorites
								? "Added Successfully!"
								: "Add to Favorites"}
						</Button>
					)}
					{/* <Button onClick={() => handleAddToFavorites(pose.english_name)} variant="primary">
						{addedToFavorites ? "Added Successfully!" : "Add to Favorites"}
					</Button> */}
				</Modal.Footer>
			</Modal>
		</div>
	);
}
