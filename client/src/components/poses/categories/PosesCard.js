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
import axios from "axios";

// props:
// pose = poses arr of names from chosen benefits page(not ready for use in posesCard - must use API). 
// categoriesPose = arr of objs from Chosen Categories Pose List(ready for use in PosesCard)

export default function PosesCard({ difficultyPose, categoriesPose, pose, showingFavorites, categories }) {

    // console.log("categoriesPose:", categoriesPose) // categoriesPose: {id: 47, category_name: 'Strengthening Yoga', english_name: 'Wheel', sanskrit_name_adapted: 'Urdhva Dhanurasana', sanskrit_name: 'Ūrdhva Dhanurāsana', …}
// category_name: "Strengthening Yoga" , english_name : "Wheel" , id: 47, pose_benefits: ... etc. url_png: "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483097/yoga-api/47_w2jsof.png"

    // console.log("pose from chosen benefits:", pose) // "Triangle"


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

let [selectedPose, setSelectedPose] = useState({});
    


  // handles poses coming from chosen benefits pose list page (an array of pose names) but ignores if pose is coming from chosen categories pose list page (an array of pose objects)
  useEffect(() => {
    if (!categoriesPose && !pose.english_name) {
      setIsLoading(true);
      if (pose === "Child's Pose") {
        axios
          .get(`https://yoga-api-nzy4.onrender.com/v1/poses?id=10`)
          .then((response) => {
            setPoseData(response.data);
            setIsLoading(false); // Set loading state to false once data is fetched
          })
          .catch((error) => {
            console.log(error);
            setPoseData(null);
            setIsLoading(false); // Set loading state to false in case of error
          });
      } else if (!categoriesPose) {
        axios
          .get(`https://yoga-api-nzy4.onrender.com/v1/poses?name=${pose}`)
          .then((response) => {
            setPoseData(response.data);
            setIsLoading(false); // Set loading state to false once data is fetched
          })
          .catch((error) => {
            console.log(error);
            setPoseData(null);
            setIsLoading(false); // Set loading state to false in case of error
          });
      }
    }
  }, [pose]);

  // Check if poseData is available and update selectedPose accordingly
  useEffect(() => {
    if (poseData) {
      setSelectedPose(poseData);
    } else if (categoriesPose) {
      setSelectedPose(categoriesPose);
    } else if (difficultyPose) {
      setSelectedPose(difficultyPose);
    }
  }, [poseData, categoriesPose, difficultyPose]);

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
						<Card.Img variant="top" className="hidden" src={selectedPose.url_png} alt="pose image" />
						<Card.Body>
						{selectedPose && selectedPose.english_name && (
  <Card.Title>{selectedPose.english_name}</Card.Title>
)}
							<Card.Text>{selectedPose.pose_benefits}</Card.Text>
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
                                
							{loggedIn && !showingFavorites && selectedPose && selectedPose.english_name && (
                                    <Button variant="primary"
                                        onClick={() => addToFavorites(selectedPose.english_name)}
                                    >
									{addedToFavorites ? "Added Successfully!" : "Add to Favorites"}
								</Button>
							)}
							{showingFavorites && selectedPose && selectedPose.english_name &&(
								<Button variant="danger" onClick={() => removeFromFavorites(selectedPose.english_name)}>
									{removedFromFavorites ? "Removed Successfully!" : "Remove from Favorites"}
								</Button>
							)}
                                	<Link to={`/moreinfo?addToFavorites=${encodeURIComponent(stringAddToFavorites)}`} state={{ selectedPose, showingFavorites, loggedIn }}>
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
