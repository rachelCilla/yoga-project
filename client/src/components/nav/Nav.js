import React, { useEffect } from "react";
import { useState } from "react";
import FavoritePosesList from "../FavoritePosesList";
import { useCookies } from "react-cookie";
import Auth from "../AuthModal";
import yogaIcon from "../../images/icons8-prenatal-yoga-50.png";
import { motion, AnimatePresence } from "framer-motion";
// import "./Nav.css";

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
		<div className="">
			{!auth && (
				<motion.nav
					className="flex justify-between items-center bg-black bg-opacity-25 w-full z-2 absolute top-0 left-0 z-2 border-slate-200"
					initial={{ opacity: 0, y: -180 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						delay: 0.6,
					}}>
					<div className="">
						<ul className="flex m-0 p-0">
							<li className="flex items-center m-2 ">
								<img className=" h-9 relative" src={yogaIcon} alt="yoga icon" />
							</li>
							<li className=" flex items-center m-2">
								<a className=" text-white font-raleway text-lg  no-underline">Introduction</a>
							</li>
							<li className=" flex items-center m-2">
								<a className="text-white font-raleway text-lg  no-underline">Poses</a>
							</li>
							<li className=" flex items-center m-2">
								<a className="text-white font-raleway text-lg  no-underline">Learn</a>
							</li>
							<li className=" flex items-center m-2">
								<a className="text-white font-raleway text-lg  no-underline">My Favorites</a>
							</li>
							{loggedIn && (
								<li className="">
									<a
										onClick={openFavorites}
										className="block self-center text-white font-raleway text-2xl border-white border-2">
										Favorites
									</a>
								</li>
							)}
						</ul>
					</div>

					{/* LOGGED IN -> FAVORITES AND SIGNOUT BUTTONS */}
					{loggedIn && (
						<div className="contents">
							{/* <button
								className="col-span-2 col-start-6 cursor-pointer m-4 text-white text-lg  border-2 border-white px-8 py-2 rounded-full bg-transparent  font-raleway"
								onClick={openFavorites}>
								See my Favorites
							</button> */}

							<button
								className="col-span-2 col-start-8 cursor-pointer m-4  text-white font-raleway text-lg  border-2 border-white px-8 py-2 rounded-full bg-transparent"
								onClick={signOut}>
								Sign Out
							</button>
						</div>
					)}

					{/* NOT LOGGED IN -> LOGIN/SIGNUP BUTTON */}
					{!loggedIn && !auth && (
						<>
							<motion.button
								className=" font-raleway text-white text-md border-2 border-white px-10 py-2 rounded-full m-2"
								onClick={() => (auth ? handleClose() : handleOpen())}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								Login or Sign Up
							</motion.button>
						</>
					)}
				</motion.nav>
			)}
			{/* NAV DISPLAY FEATURES  */}
			{/* DISPLAY FAVORITES COMP */}
			{showFavorites && <FavoritePosesList showFavorites={showFavorites} handleBackButtonClick={handleBackButtonClick} />}
			{/* DISPLAY AUTH MODAL */}
			<AnimatePresence mode="wait" initial={false} onExitComplete={() => setAuth(false)}>
				{auth && (
					<motion.div>
						<Auth
							key="modal"
							auth={auth}
							setAuth={setAuth}
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
