import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

import styles from "./css/App.module.css";
import "bootstrap/dist/css/bootstrap.css";

import Banner from "./components/banner/Banner";
import Learn from "./components/Learn";
import PosesByCategory from "./components/poses/PosesByCategory";
import PosesByDifficulty from "./components/poses/PosesByDifficulty";
import PosesByBenefit from "./components/poses/PosesByBenefit";

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

	// set Loading to false after 4 seconds
	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setLoading(false);
	// 		// CHANGE THIS BACK TO 4000!
	// 	}, 40000000);
	// 	return () => clearTimeout(timer);
	// });

	const toggleHideMainContent = () => {
		setHideMainContent(!hideMainContent);
	};

	const getFavoritesData = async () => {
		try {
			const response = await fetch(`http://localhost:8000/favorite_poses/${userEmail}`);
			const jsonFavoritesResponse = await response.json();
			setFavoritePoses(jsonFavoritesResponse);
		} catch (err) {
			console.log(err);
		}
	};

	// loading
	useEffect(() => {
		loading ? document.querySelector("body").classList.add("loading") : document.querySelector("body").classList.remove("loading");
	}, [loading]);

	useEffect(() => {
		if (authToken) {
			getFavoritesData();
			setLoggedIn(true);
		}
	}, []);

	const sortedFavoritePoses = favoritePoses?.sort((a, b) => new Date(a.date) - new Date(b.date));

	// API CALLS-----------------------------------------------------------------
	// API CALL FOR CATEGORIES
	useEffect(() => {
		axios.get("https://yoga-api-nzy4.onrender.com/v1/categories")
			.then((response) => {
				setCategories(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// animations ____________________________________________________________
	const observer = useRef(null);

	useEffect(() => {
		observer.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(styles.show);
					setShowComponents(true);
				} else {
					entry.target.classList.remove(styles.show);
					setShowComponents(false);
				}
			});
		});

		const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
		hiddenElements.forEach((element) => {
			observer.current.observe(element);
		});

		// Cleanup the observer when the component unmounts
		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, []);

	useEffect(() => {
		if (showComponents) {
			const categoryTimer = setTimeout(() => {
				setShowCategory(true);
			}, 1000);
			const difficultyTimer = setTimeout(() => {
				setShowDifficulty(true);
			}, 2000);
			const benefitTimer = setTimeout(() => {
				setShowBenefit(true);
			}, 3000);

			return () => {
				clearTimeout(categoryTimer);
				clearTimeout(difficultyTimer);
				clearTimeout(benefitTimer);
			};
		}
	}, [showComponents]);

	// animations part 2- trying with framer + useInView
	// inView is a boolean that tells us if the element is in view or not
	// ref is a reference to the element that we want to monitor
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 1.5,
					bounce: 0.4,
				},
			});
		}
		if (!inView) {
			animation.start({
				x: "-100vw",
			});
		}
	}, [inView]);

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
		<div className="">
			{/* LOADER/ BANNER  */}
			<Banner
				userEmail={userEmail}
				toggleHideMainContent={toggleHideMainContent}
				hideMainContent={hideMainContent}
				setLoading={setLoading}
				loading={loading}
			/>

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
						<PosesByCategory categories={categories} className={`${styles.hidden} ${showCategory && styles.show}`} />
					)}
					{showDifficulty && <PosesByDifficulty className={`${styles.hidden} ${showDifficulty && styles.show}`} />}
					{showBenefit && <PosesByBenefit className={`${styles.hidden} ${showBenefit && styles.show}`} />}
				</div>
			</div>
			{/* LEARN */}
			<Learn />
		</div>
	);
}

export default App;
