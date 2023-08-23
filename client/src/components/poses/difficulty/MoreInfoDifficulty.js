import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MoreInfo({ closeMoreInfo, pose }) {
	const [videoId, setVideoId] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Make the GET request to search for videos based on the keyword
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

				// Retrieve the video ID from the response
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
						Pose is{" "}
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
						{pose.english_name} pose, you can look:
					</h6>
					<div>
						{videoId && (
							<iframe
								className="mx-auto w-full"
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
					<Button
						onClick={() => navigate(-1)}
						variant="secondary"
					>
						Go back
					</Button>
					<Button variant="primary">
						Add to Favorites
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
