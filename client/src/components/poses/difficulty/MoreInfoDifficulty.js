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
				const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
					params: {
						key: "AIzaSyA54q0EAFfvYQ_s1iZKcwo4sFSluUTjPXo",
						q: `${pose.english_name} yoga pose guide`,
						part: "snippet",
						type: "video",
						maxResults: 1,
					},
				});

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
			<Modal dialogClassName="modal-100w" show={true} onHide={() => closeMoreInfo()}>
				<Modal.Header closeButton>
					<Modal.Title>More Info About {pose.english_name} Pose</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<h6>
						The Sanskrit name of {pose.english_name} Pose is {pose.sanskrit_name}
					</h6>
					<h6>{pose.translation_name}</h6>
					<h3>Pose Benefits:</h3>
					<p>{pose.pose_benefits}</p>
					<img src={pose.url_png} alt="" />
					<h3>Pose Instructions:</h3>
					<p>{pose.pose_description}</p>
					<h6>For further assistance with {pose.english_name} pose, you can look:</h6>
					<div>
						{videoId && (
							<iframe
								width="560"
								height="315"
								src={`https://www.youtube.com/embed/${videoId}`}
								title="YouTube Video"
								frameBorder="0"
								allowFullScreen></iframe>
						)}
					</div>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={closeMoreInfo}>
						Close
					</Button>
					<Button variant="primary">Add to Favorites</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
