import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

import styles from "./css/App.module.css";
import "bootstrap/dist/css/bootstrap.css";

import Banner from "./components/banner/Banner";

import Loader from "./components/loader/Loader";
import Learn from "./components/Learn";
import PosesByCategory from "./components/poses/PosesByCategory";
import PosesByDifficulty from "./components/poses/PosesByDifficulty";
import PosesByBenefit from "./components/poses/PosesByBenefit";
import Nav from "./components/nav/Nav";
import image2 from "./components/loader/loaderImages/image2.jpg";

function App() {
	const [loading, setLoading] = useState(true);
	const [loggedIn, setLoggedIn] = useState(false);
	const [hideMainContent, setHideMainContent] = useState(false);
	const [favoritePoses, setFavoritePoses] = useState(null);
	const [categories, setCategories] = useState([]);
	const [showComponents, setShowComponents] = useState(false);
	const [showCategory, setShowCategory] = useState(false);
	const [showDifficulty, setShowDifficulty] = useState(false);
	const [showBenefit, setShowBenefit] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const userEmail = cookies.Email;
	const authToken = cookies.AuthToken;

	// loading
	useEffect(() => {
		loading ? document.querySelector("body").classList.add("loading") : document.querySelector("body").classList.remove("loading");
	}, [loading]);
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

	// API CALLS-----------------------------------------------------------------
	useEffect(() => {
		axios.get("https://yoga-api-nzy4.onrender.com/v1/categories")
			.then((response) => {
				setCategories(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
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
			<LayoutGroup>
				<AnimatePresence>
					{loading ? (
						<motion.div key="loader">
							<Loader setLoading={setLoading} />
						</motion.div>
					) : (
						<>
							<Nav toggleHideMainContent={toggleHideMainContent} />
							<Banner
								userEmail={userEmail}
								toggleHideMainContent={toggleHideMainContent}
								hideMainContent={hideMainContent}
								setLoading={setLoading}
								loading={loading}
							/>

							{!loading && (
								<div className="transition-image final">
									<motion.img
										transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
										src={image2}
										layoutId="main-image-1"
									/>
								</div>
							)}
						</>
					)}
				</AnimatePresence>
			</LayoutGroup>

			{/* SECOND HERO SECTION */}
			{!loading && !hideMainContent && (
				<div className="">
					{/* POSE OPTIONS */}
					<div className={styles.poseOptionsDiv}>
						<h1 className={`${styles.posesByTitle}`}>
							<span className={styles.hidden}>How&nbsp;</span>
							<span className={styles.hidden}>would&nbsp;</span>
							<span className={styles.hidden}>you&nbsp;</span>
							<span className={styles.hidden}>like&nbsp;</span>
							<span className={styles.hidden}>to&nbsp;</span>
							<span className={styles.hidden}>discover&nbsp;</span>
							<span className={styles.hidden}>?</span>
						</h1>
						<div className={`${styles.poseOptionsParent} ${styles.hidden}`}>
							{showCategory && (
								<PosesByCategory
									categories={categories}
									className={`${styles.hidden} ${showCategory && styles.show}`}
								/>
							)}
							{showDifficulty && <PosesByDifficulty className={`${styles.hidden} ${showDifficulty && styles.show}`} />}
							{showBenefit && <PosesByBenefit className={`${styles.hidden} ${showBenefit && styles.show}`} />}
						</div>
					</div>
					{/* LEARN */}
					<Learn />
				</div>
			)}
		</>
	);
}

export default App;
