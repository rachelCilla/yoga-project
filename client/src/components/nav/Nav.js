import React, { useEffect } from "react";
import { useState } from "react";
import FavoritePosesList from "../FavoritePosesList";
import { useCookies } from "react-cookie";
import Auth from "../AuthModal";
import yogaIcon from "../../images/icons8-prenatal-yoga-50.png";
import { motion, AnimatePresence } from "framer-motion";
import "./Nav.css";

export default function Nav({ toggleHideMainContent }) {
	const [showFavorites, setShowFavorites] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [auth, setAuth] = useState(false);

	const toggleAuth = () => {
		setAuth(!auth);
		toggleHideMainContent();
	};

	const handleClose = () => {
		setAuth(false);
		toggleHideMainContent();
	};
	const handleOpen = () => {
		setAuth(true);
		toggleHideMainContent();
	};

	// AUTHENTICATION----
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

	// RETURN STATEMENT------------------------------------------------------------
	return (
		<>
			{/* nav  */}
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					ease: "easeInOut",
					duration: 1,
					delay: 0.6,
				}}>
				<div className="nav">
					<img className="nav-items nav-1" src={yogaIcon} alt="yoga icon" />
					<div className="nav-items nav-2">Introduction</div>
					<div className="nav-items nav-3">Poses</div>
					<div className="nav-items nav-4">Learn</div>
					{/* LOGGED IN -> FAVORITES AND SIGNOUT BUTTONS */}
					{loggedIn && (
						<>
							<button className="button nav-5" onClick={openFavorites}>
								See my Favorites
							</button>

							<button className="button nav-5" onClick={signOut}>
								Sign Out
							</button>
						</>
					)}
					{/* NOT LOGGED IN -> LOGIN/SIGNUP BUTTON */}
					{!loggedIn && !auth && (
						<>
							<motion.button
								className="button nav-5"
								onClick={() => (auth ? handleClose() : handleOpen())}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								Login or Sign Up
							</motion.button>
						</>
					)}
				</div>
			</motion.div>

			{/* NAV DISPLAY FEATURES  */}

			{/* DISPLAY FAVORITES COMP */}
			{showFavorites && <FavoritePosesList showFavorites={showFavorites} handleBackButtonClick={handleBackButtonClick} />}

			{/* DISPLAY AUTH MODAL */}
			<AnimatePresence mode="wait" initial={false} onExitComplete={() => setAuth(false)}>
				{auth && (
					<motion.div>
						<Auth key="modal" auth={auth} handleClose={handleClose} exit={{ opacity: 0 }} animate={{ scale: 1.2 }} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
