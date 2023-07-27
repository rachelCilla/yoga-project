import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
// import MoreInfo from "../MoreInfo";
// import axios from "axios";
import { useCookies } from "react-cookie";
// import Auth from "../../auth/AuthModal";
import { Link, useOutletContext } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function PosesCard({ pose, showingFavorites, categories }) {
	const [showMoreInfo, setShowMoreInfo] = useState(false);
	const [poseData, setPoseData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const [addedToFavorites, setAddedToFavorites] = useState(false);
	const [error, setError] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);
	const [removedFromFavorites, setRemovedFromFavorites] = useState(false);

	// const location = useLocation();
	// const { pose } = location.state;
    // const { showingFavorites } = location.state;

    // const logOutUser = () => {
    //     setLoggedIn(false);
    //     removeCookie("Email");
    //     removeCookie("Password");
    // };
    // passing as url param
    // const stringLogOutUser = logOutUser.toString();

	// handles back buttons
	// const { id: poseId } = useParams();
	// const { poseList } = useOutletContext();
	// const poseSelection = poseList.find((pose) => pose.id == poseId);
	// console.log(poseSelection);
//  const stringLogOutUser = logOutUser.toString();
	const userEmail = cookies.Email;
	// console.log("pose props:", pose);

	// check logged in
	useEffect(() => {
		if (cookies.Email) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	}, [userEmail]);

	// login popup
	const loginPopup = () => {
		setOpenLogin(true);
	};

	// const openMoreInfo = () => {
	// 	setshowingMoreInfo(true);
	// };

	// const closeMoreInfo = () => {
	// 	setshowingMoreInfo(false);
	// };

	// REMOVE FROM FAVORITES-DB
	const removeFromFavorites = async (pose_name) => {
		const user_email = cookies.Email;
		try {
			const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/favorite_poses/${userEmail}/${pose_name}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});

			const data = await response.json();
			if (response.ok) {
				setRemovedFromFavorites(true);
			} else {
				setError(data.detail || "Failed to remove from favorites");
			}
		} catch (err) {
			console.log(err);
			setError("Failed to remove from favorites");
		}
	};

	// ADD TO FAVORITES- DB
	const addToFavorites = async (pose_name) => {
		const user_email = cookies.Email;
		const date = new Date();
		const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/favorite_poses`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ user_email, pose_name, date }),
		});

		const data = await response.json();

		if (data.detail) {
			setError(data.detail);
		} else {
			setAddedToFavorites(true);
		}
    };
    const stringAddToFavorites = addToFavorites.toString();

	// 	if (!pose.english_name) {
	// 		setIsLoading(true);
	// 		if (pose === "Child's Pose") {
	// 			axios.get(`https://yoga-api-nzy4.onrender.com/v1/poses?id=10`)
	// 				.then((response) => {
	// 					setPoseData(response.data);
	// 					setIsLoading(false); // Set loading state to false once data is fetched
	// 				})
	// 				.catch((error) => {
	// 					console.log(error);
	// 					setPoseData(null);
	// 					setIsLoading(false); // Set loading state to false in case of error
	// 				});
	// 		} else {
	// 			axios.get(`https://yoga-api-nzy4.onrender.com/v1/poses?name=${pose}`)
	// 				.then((response) => {
	// 					setPoseData(response.data);
	// 					setIsLoading(false); // Set loading state to false once data is fetched
	// 				})
	// 				.catch((error) => {
	// 					console.log(error);
	// 					setPoseData(null);
	// 					setIsLoading(false); // Set loading state to false in case of error
	// 				});
	// 		}
	// 	}
	// }, [pose]);
	// const poseId = poseData?.id || pose?.id;
	// const poseImageUrl = poseData?.url_png || pose?.url_png;
	// const pose.english_name = poseData?.english_name || pose?.english_name;
	// const poseBenefits = poseData?.pose_benefits || pose?.pose_benefits;
	// const poses = poseData || pose;
	// console.log("poses:", poses);
	// const poseId = pose.id;
	// poses: {id: 28, category_name: 'Strengthening Yoga', english_name: 'Pyramid', sanskrit_name_adapted: 'Parsvottanasana', sanskrit_name: 'Pārśvottānāsana', …}

	return (
		<div className="poses-card">
			{isLoading ? (
				<div>Loading Poses...</div>
			) : (
				!removedFromFavorites && (
					<Card>
						<Card.Img variant="top" className="hidden" src={pose.url_png} alt="pose image" />
						<Card.Body>
							<Card.Title>{pose.english_name}</Card.Title>
							<Card.Text>{pose.pose_benefits}</Card.Text>
							{error && <p>{error}</p>}

							{!loggedIn && (
								<Button type="button" className="btn btn-secondary" onClick={loginPopup}>
									Add to Favorites
								</Button>
							)}

							{openLogin && (
								<>
									<p> Please login or signup to add favorites </p>
									<Link to="/auth">
										<Button> Login or Sign Up</Button>
									</Link>
								</>
							)}
							{loggedIn && !showingFavorites && (
                                    <Button variant="primary"
                                        onClick={() => addToFavorites(pose.english_name)}
                                    >
									{addedToFavorites ? "Added Successfully!" : "Add to Favorites"}
								</Button>
							)}
							{showingFavorites && (
								<Button variant="danger" onClick={() => removeFromFavorites(pose.english_name)}>
									{removedFromFavorites ? "Removed Successfully!" : "Remove from Favorites"}
								</Button>
							)}

							{/* <Link to={`/moreinfo/${poseId}`}>More Info</Link> */}
                                {/* <Link
                                    to={{
                                        pathname: `/moreinfo`,
                                        state:{
                                            pose ,
                                            showingFavorites: showingFavorites
                                            
                                        },
                                    }}
                                        > */}
                                	<Link to={`/moreinfo?addToFavorites=${encodeURIComponent(stringAddToFavorites)}`} state={{ pose, showingFavorites, loggedIn }}>
  More Info
</Link>
							{/* <Button onClick={openMoreInfo}>More Info</Button> */}
						</Card.Body>
					</Card>
				)
			)}
			{/* <MoreInfo closeMoreInfo={closeMoreInfo} pose={poses} addToFavorites={addToFavorites} /> */}
		</div>
	);
}
