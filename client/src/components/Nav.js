import React, { useEffect } from "react";
import { useState } from "react";
import FavoritePosesList from "./FavoritePosesList";
import { useCookies } from "react-cookie";
import Auth from "./AuthModal";
import yogaIcon from "../images/icons8-prenatal-yoga-50.png";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/Nav.module.css";

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

	// RETURN STATEMENT------------------------------------------------------------
	return (
		<div>
			<div className="nav">
				<div className="nav-items">
					<img
						class="logo"
						src={yogaIcon}
						alt="yoga icon"
					/>
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
				{/* LOGGED IN -> FAVORITES AND SIGNOUT BUTTONS */}
				{loggedIn && (
					<div>
						<button
							className="button"
							onClick={openFavorites}
						>
							See my Favorites
						</button>
						<button
							className="button"
							onClick={signOut}
						>
							Sign Out
						</button>
					</div>
				)}
				{/* NOT LOGGED IN -> LOGIN/SIGNUP BUTTON */}
				{!loggedIn && !auth && (
					<div>
						<motion.button
							className="button"
							onClick={() =>
								auth
									? handleClose()
									: handleOpen()
							}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Login or Sign Up
						</motion.button>
					</div>
				)}
			</div>
			{/* DISPLAY FAVORITES COMP */}
			{showFavorites && (
				<FavoritePosesList
					showFavorites={showFavorites}
					handleBackButtonClick={handleBackButtonClick}
				/>
			)}
			{/* DISPLAY AUTH MODAL */}
			<AnimatePresence
				mode="wait"
				initial={false}
				onExitComplete={() => setAuth(false)}
			>
				{auth && (
					<motion.div>
						<Auth
							key="modal"
							auth={auth}
							handleClose={handleClose}
							exit={{ opacity: 0 }}
							animate={{ scale: 1.2 }}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
