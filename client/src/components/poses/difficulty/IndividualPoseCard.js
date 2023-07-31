import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { Link, useOutletContext } from "react-router-dom";
import axios from "axios";

export default function PosesCard({  pose, showingFavorites}) {

	const [showMoreInfo, setShowMoreInfo] = useState(false);
	const [poseData, setPoseData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const [addedToFavorites, setAddedToFavorites] = useState(false);
	const [error, setError] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);
    const [removedFromFavorites, setRemovedFromFavorites] = useState(false);
   const [updatedPoseData, setUpdatedPoseData] = useState();
    const userEmail = cookies.Email;


    


//   // handles poses coming from chosen benefits pose list page (an array of pose names) but ignores if pose is coming from chosen categories pose list page (an array of pose objects)
//   useEffect(() => {
//     if (!categoriesPose && !pose.english_name) {
//       setIsLoading(true);
//       if (pose === "Child's Pose") {
//         axios
//           .get(`https://yoga-api-nzy4.onrender.com/v1/poses?id=10`)
//           .then((response) => {
//             setPoseData(response.data);
//             setIsLoading(false); // Set loading state to false once data is fetched
//           })
//           .catch((error) => {
//             console.log(error);
//             setPoseData(null);
//             setIsLoading(false); // Set loading state to false in case of error
//           });
//       } else if (!categoriesPose) {
//         axios
//           .get(`https://yoga-api-nzy4.onrender.com/v1/poses?name=${pose}`)
//           .then((response) => {
//             setPoseData(response.data);
//             setIsLoading(false); // Set loading state to false once data is fetched
//           })
//           .catch((error) => {
//             console.log(error);
//             setPoseData(null);
//             setIsLoading(false); // Set loading state to false in case of error
//           });
//       }
//     }
//   }, [pose]);

//   // Check if poseData is available and update pose accordingly
//   useEffect(() => {
//     if (poseData) {
//       setpose(poseData);
//     } else if (categoriesPose) {
//       setpose(categoriesPose);
//     } else if (difficultyPose) {
//       setpose(difficultyPose);
//     }
//   }, [poseData, categoriesPose, difficultyPose]);

  // Check logged in
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

	return (
		<div className="poses-card">
            {isLoading
                // || !updatedPoseData
                ? (
				<div>Loading Poses...</div>
            ) : (
                     !removedFromFavorites ? (
					<Card>
						<Card.Img variant="top" className="hidden" src={pose.url_png} alt="pose image" />
						<Card.Body>
						{pose && pose.english_name && (
  <Card.Title>{pose.english_name}</Card.Title>
)}
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
                                
							{loggedIn && !showingFavorites && pose && pose.english_name && (
                                    <Button variant="primary"
                                        onClick={() => addToFavorites(pose.english_name)}
                                    >
									{addedToFavorites ? "Added Successfully!" : "Add to Favorites"}
								</Button>
							)}
							{showingFavorites && pose && pose.english_name &&(
								<Button variant="danger" onClick={() => removeFromFavorites(pose.english_name)}>
									{removedFromFavorites ? "Removed Successfully!" : "Remove from Favorites"}
								</Button>
							)}
                                	<Link to={`/moreinfoposes?addToFavorites=${encodeURIComponent(stringAddToFavorites)}`} state={{ pose, showingFavorites, loggedIn }}>
  More Info
</Link>
						 
						</Card.Body>
					</Card>
            ):(
            null
            )   
			)}
	
		</div>
	);
}


// import React from "react";
// import { useState, useEffect } from "react";
// import { Card, Button } from "react-bootstrap";
// import MoreInfo from "./MoreInfoDifficulty";
// import axios from "axios";
// import { useCookies } from "react-cookie";
// export default function IndividualPoseCard({ pose }) {
// 	const [showMoreInfo, setShowMoreInfo] = useState(false);
// 	const [poseData, setPoseData] = useState();
// 	const [isLoading, setIsLoading] = useState(false);
//     const [addedToFavorites, setAddedToFavorites] = useState(false);
//     const [error, setError] = useState(null);
//     const [loggedIn, setLoggedIn] = useState(false)
//     const [cookies, setCookie, removeCookie] = useCookies(null);
//     const userEmail = cookies.Email;
  
    
//     // check logged in
// 	useEffect(() => {
// 		if (cookies.Email) {
// 			setLoggedIn(true);
// 		} else {
// 			setLoggedIn(false);
// 		}
// 	}, [userEmail]);

// 	// login popup
// 	// const loginPopup = () => {
// 	// 	setOpenLogin(true);
//     // };
    
// 	const openMoreInfo = () => {
// 		setShowMoreInfo(true);
// 	};

// 	const closeMoreInfo = () => {
// 		setShowMoreInfo(false);
// 	};
// 	// ADD TO FAVORITES- DB
// 	const addToFavorites = async (pose_name) => {
// 		const user_email = cookies.Email;
// 		const date = new Date();
// 		const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/favorite_poses`, {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify({ user_email, pose_name, date }),
// 		});

// 		const data = await response.json();

// 		if (data.detail) {
// 			setError(data.detail);
// 		} else {
// 			setAddedToFavorites(true);
// 		}
//     };
//     const stringAddToFavorites = addToFavorites.toString();

// 	useEffect(() => {
// 		if (!pose.english_name) {
// 			setIsLoading(true);
// 			if (pose === "Child's Pose") {
// 				axios.get(`https://yoga-api-nzy4.onrender.com/v1/poses?id=10`)
// 					.then((response) => {
// 						setPoseData(response.data);
// 						setIsLoading(false); // Set loading state to false once data is fetched
// 					})
// 					.catch((error) => {
// 						console.log(error);
// 						setPoseData(null);
// 						setIsLoading(false); // Set loading state to false in case of error
// 					});
// 			} else {
// 				axios.get(`https://yoga-api-nzy4.onrender.com/v1/poses?name=${pose}`)
// 					.then((response) => {
// 						setPoseData(response.data);
// 						setIsLoading(false); // Set loading state to false once data is fetched
// 					})
// 					.catch((error) => {
// 						console.log(error);
// 						setPoseData(null);
// 						setIsLoading(false); // Set loading state to false in case of error
// 					});
// 			}
// 		}
// 	}, [pose]);

// 	const poseImageUrl = poseData?.url_png || pose?.url_png;
// 	const poseEnglishName = poseData?.english_name || pose?.english_name;
// 	const poseBenefits = poseData?.pose_benefits || pose?.pose_benefits;
// 	const poses = poseData || pose;

// 	return (
// 		<div className="poses-card">
// 			{showMoreInfo && <MoreInfo className="z-100 w-100" closeMoreInfo={closeMoreInfo} pose={poses} />}
// 			{isLoading ? (
// 				<div>Loading Poses...</div>
// 			) : (
// 				<Card>
// 					{/* <Card.Img variant="top" className="max-w-sm" src={poseImageUrl} alt="pose image" /> */}
// 					<Card.Body>
// 						<Card.Title>{poseEnglishName}</Card.Title>
// 						<Card.Text>{poseBenefits}</Card.Text>
// 						<Button variant="primary">Add to Favorites</Button>{" "}
// 						<Button variant="secondary" onClick={openMoreInfo}>
// 							More Info
// 						</Button>
// 					</Card.Body>
// 				</Card>
// 			)}
// 		</div>
// 	);
// }
