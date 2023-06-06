import React, { useEffect } from "react";
import { useState } from "react";
import FavoritePosesList from "./FavoritePosesList";
// import SignUp from './SignUp';
import { useCookies } from "react-cookie";
import Auth from "./Auth";
import yogaIcon from "../images/icons8-prenatal-yoga-50.png";

export default function Nav({toggleHideMainContent}) {
	const [showFavorites, setShowFavorites] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [auth, setAuth] = useState(false);
	// const [showSignUp, setShowSignUp] = useState(false);

	// OPENING AND CLOSING MODALS-----------------------------------------------
	// const toggleSignUp = () => {
	// 	setShowSignUp(!showSignUp);
	// };

        const toggleAuth = () => {
            setAuth(!auth);
            toggleHideMainContent();
        }
	const openAuth = () => {
		// setAuth(true);
        // toggleHideMainContent();
	};

    const closeAuth = () => {
        // setAuth(false);
        // toggleHideMainContent();
    }

	const signOut = () => {
		removeCookie("Email");
		removeCookie("AuthToken");
		window.location.reload();
	};

	const openFavorites = () => {
		setShowFavorites(true);
        toggleHideMainContent();
	};

	const handleBackButtonClick = () => {
		setShowFavorites(false);
        toggleHideMainContent();
	};

	useEffect(() => {
		if (cookies.Email && cookies.AuthToken) {
			setLoggedIn(true);
		}
	}, [cookies]);

	// SCROLLING BEHAVIOR----------------------------------------------------------
	const scrollToIntroduction = () => {
        setAuth(false);
        toggleHideMainContent();
		// const introduction = document.getElementById("introduction");
		// introduction.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToPoseCategories = () => {
        setAuth(false);
        toggleHideMainContent();
		// const PoseCategories = document.getElementById("pose-categories");
		// PoseCategories.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToLearn = () => {
        setAuth(false);
        toggleHideMainContent();
		// const learn = document.getElementById("learn");
		// learn.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div>
			<div className="nav">
				<div className="nav-items">
                    <img class="logo" src={yogaIcon} alt="yoga icon" />
					<div
						className="nav-items"
						onClick={scrollToIntroduction}
					>
						Introduction
					</div>
					<div
						className="nav-items"
						onClick={scrollToPoseCategories}
					>
						Poses
					</div>
					<div
						className="nav-items"
						onClick={scrollToLearn}
					>
						Learn
					</div>
				</div>
				{loggedIn && (
					<div>
						<button className="button" onClick={openFavorites}>
							See my Favorites
						</button>
						<button  className="button" onClick={signOut}>Sign Out</button>
					</div>
				)}
				{!loggedIn && !auth && (
					<div>
						<button className="button" onClick={toggleAuth}>
							Login or Sign Up
						</button>
					</div>
				)}
			</div>
			{showFavorites && (
				<FavoritePosesList
					showFavorites={showFavorites}
					handleBackButtonClick={handleBackButtonClick}
				/>
			)}
			{auth && <Auth toggleAuth={toggleAuth} />}
		</div>
	);
}
