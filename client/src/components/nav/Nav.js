import React, { useEffect } from "react";
import { useState } from "react";
import FavoritePosesList from "../FavoritePosesList";
import { useCookies } from "react-cookie";
import Auth from "../auth/AuthModal";
import yogaIcon from "../../images/icons8-prenatal-yoga-50.png";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function Nav() {
	const [showFavorites, setShowFavorites] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [auth, setAuth] = useState(false);

	console.log("logged in " + loggedIn);
	// const toggleAuth = () => {
	// 	setAuth(!auth);
	// };

	// const handleClose = () => {
	// 	setAuth(false);
	// };
	// const handleOpen = () => {
	// 	setAuth(true);
	// };

	// AUTHENTICATION----
	const signOut = () => {
		removeCookie("Email");
		removeCookie("AuthToken");
		window.location.reload();
	};

	useEffect(() => {
		if (cookies.Email && cookies.AuthToken) {
			setLoggedIn(true);
		}
	}, [cookies]);

	// RETURN STATEMENT------------------------------------------------------------
	return (
		<div className="">
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
							<Link to="/" className=" text-white font-raleway text-lg  no-underline">
								Home
							</Link>
						</li>
						<li className=" flex items-center m-2">
							<Link to="/home" className="text-white font-raleway text-lg  no-underline">
								Poses
							</Link>
						</li>
						<li className=" flex items-center m-2">
							<Link to="/learn" className="text-white font-raleway text-lg  no-underline">
								Learn
							</Link>
						</li>
						<li className=" flex items-center m-2">
							<Link to="/favorites" className="text-white font-raleway text-lg  no-underline" state={loggedIn}>
								My Favorites
							</Link>
						</li>

						{/* {loggedIn && (
							<li className="">
								<a
									// onClick={openFavorites}
									className="block self-center text-white font-raleway text-2xl border-white border-2">
									Favorites
								</a>
							</li>
						)} */}
					</ul>
				</div>

				{/* SIGNOUT BUTTON */}
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

				{/* LOGIN/SIGNUP BUTTON */}
				{!loggedIn && !auth && (
					<>
						<Link to="/auth">
							<motion.button
								className=" font-raleway text-white text-md border-2 border-white px-10 py-2 rounded-full m-2"
								// onClick={() => (auth ? handleClose() : handleOpen())}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								Login or Sign Up
							</motion.button>
						</Link>
					</>
				)}
			</motion.nav>

			{/* DISPLAY AUTH MODAL */}
			{/* <AnimatePresence mode="wait" initial={false} onExitComplete={() => setAuth(false)}>
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
			</AnimatePresence> */}
		</div>
	);
}
