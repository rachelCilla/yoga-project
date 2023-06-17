import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import PoseIntro from "./components/PoseIntro";
import styles from "./css/App.module.css";
import "bootstrap/dist/css/bootstrap.css";

import Banner from "./components/banner/Banner";

import Loader from "./components/loader/Loader";
import Learn from "./components/Learn";

import Nav from "./components/nav/Nav";
import screenshot from "./images/screenshot.png";

function App() {
	const [loading, setLoading] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [hideMainContent, setHideMainContent] = useState(false);
	const [favoritePoses, setFavoritePoses] = useState(null);

	const [showComponents, setShowComponents] = useState(false);

	const [cookies, setCookie, removeCookie] = useCookies(null);
	const userEmail = cookies.Email;
	const authToken = cookies.AuthToken;

	// loading
	// useEffect(() => {
	// 	loading ? document.querySelector("body").classList.add("loading") : document.querySelector("body").classList.remove("loading");
	// }, [loading]);
	// hide main content
	const toggleHideMainContent = () => {
		setHideMainContent(!hideMainContent);
	};
	// set login status
	useEffect(() => {
		if (authToken) {
			getFavoritesData();
			setLoggedIn(true);
		}
	}, []);

	const getFavoritesData = async () => {
		try {
			const response = await fetch(`http://localhost:8000/favorite_poses/${userEmail}`);
			const jsonFavoritesResponse = await response.json();
			setFavoritePoses(jsonFavoritesResponse);
		} catch (err) {
			console.log(err);
		}
	};

	// ⊹  .  ۟   .    ꒰    return below  ꒱     .  ۟  .  ⊹
	// 🌸  /ᐠ｡ ꞈ｡ ᐟ\  ʚ🍄ɞ    ✧ °  ｡ʚ 🍓 ɞ ｡° ✧
	//                                   *                   *
	//  *            *
	//                     *                             *
	// //                                   ∧___ ∧
	// //      *                           ( ̳• · • ̳)               *                       *
	// //              *                  /    づ♡ I love you
	//                             *                                      *
	//  *
	//                                    *
	//             *               *
	// : ¨·.·¨ :
	// `       ‘
	//  ` ·. 🦋
	//               ╱|、
	//             (˚ˎ 。7
	//              |、˜〵
	//             じしˍ,)ノ
	//     ⋆｡ ﾟ ☁︎｡⋆｡ ﾟ ☾ ﾟ ｡⋆ ⋆｡  ✧ °  ｡ʚ 🍓 ɞ ｡° ✧ﾟ ☁︎｡⋆｡ ꒰    return below  ꒱   ﾟ ☾ ﾟ ｡⋆      ⋆｡ ﾟ ☁︎｡⋆｡ ﾟ ☾ ﾟ ｡⋆
	return (
		<>
			{/* {loading ? (
						<motion.div key="loader" className="loader">
							<Loader setLoading={setLoading} />
						</motion.div>
					) : (  */}
			<>
				{" "}
				{hideMainContent && (
					<Banner
						userEmail={userEmail}
						toggleHideMainContent={toggleHideMainContent}
						hideMainContent={hideMainContent}
						setLoading={setLoading}
						loading={loading}
					/>

					/* {!loading && (
								<div className="transition-image final">
									<motion.img
										transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
										src={screenshot}
										layoutId="main-image-1"
									/>
								</div>
							)}
						</> */
				)}
			</>
			<Nav toggleHideMainContent={toggleHideMainContent} />

			{/* SECOND HERO SECTION */}
			{!hideMainContent && (
				<div className="">
					{/* POSE OPTIONS */}
					<PoseIntro />
					{/* LEARN */}
					<Learn />
				</div>
			)}
		</>
	);
}

export default App;
