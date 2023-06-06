import React, { useEffect, useState, useRef } from "react";
import styles from "./css/App.module.css";
import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";
import Navbar from "./components/Nav.js";
import Learn from "./components/Learn";
import PosesByCategory from "./components/poses/PosesByCategory";
import PosesByDifficulty from "./components/poses/PosesByDifficulty";
import PosesByBenefit from "./components/poses/PosesByBenefit";
import { useCookies } from "react-cookie";
import yogaVideo from "./images/yogaMain2.mp4";

function App() {
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const [favoritePoses, setFavoritePoses] = useState(null);
	const [categories, setCategories] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [hideMainContent, setHideMainContent] = useState(false);
	const userEmail = cookies.Email;
	const authToken = cookies.AuthToken;
	const [showComponents, setShowComponents] = useState(false);
	const [showCategory, setShowCategory] = useState(false);
	const [showDifficulty, setShowDifficulty] = useState(false);
	const [showBenefit, setShowBenefit] = useState(false);

	const toggleHideMainContent = () => {
		setHideMainContent(!hideMainContent);
	};

	const getFavoritesData = async () => {
		try {
			const response = await fetch(
				`http://localhost:8000/favorite_poses/${userEmail}`
			);
			const jsonFavoritesResponse = await response.json();
			setFavoritePoses(jsonFavoritesResponse);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (authToken) {
			getFavoritesData();
			setLoggedIn(true);
		}
	}, []);

	const sortedFavoritePoses = favoritePoses?.sort(
		(a, b) => new Date(a.date) - new Date(b.date)
	);

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

		const hiddenElements = document.querySelectorAll(
			`.${styles.hidden}`
		);
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

	// RETURN-------------------------------------------------------------------
	return (
		<div className={styles.App}>
			{/* NAVBAR */}
			<Navbar toggleHideMainContent={toggleHideMainContent} />
			{/* HERO */}
			{!hideMainContent && (
				<>
					<div className={styles.hero}>
						<video
							autoPlay
							loop
							muted
							playsInline
							className={styles.heroVideo}
						>
							<source
								src={yogaVideo}
								type="video/mp4"
							/>{" "}
							Your browser does not support the
							video tag.
						</video>

						<div className={styles.content}>
							<h1>
								Welcome
								{loggedIn
									? ` back ${userEmail}`
									: "!"}
							</h1>
							{!loggedIn && (
								<h5
									className={`${styles.contentBtn}`}
								>
									Ready to discover new
									poses?
								</h5>
							)}
						</div>
					</div>
					{/* POSE OPTIONS */}
					<div className={styles.poseOptionsDiv}>
						<h1 className={`${styles.posesByTitle}`}>
							<span className={styles.hidden}>
								How&nbsp;
							</span>
							<span className={styles.hidden}>
								would&nbsp;
							</span>
							<span className={styles.hidden}>
								you&nbsp;
							</span>
							<span className={styles.hidden}>
								like&nbsp;
							</span>
							<span className={styles.hidden}>
								to&nbsp;
							</span>
							<span className={styles.hidden}>
								discover&nbsp;
							</span>
							<span className={styles.hidden}>
								?
							</span>
						</h1>
						<div
							className={`${styles.poseOptionsParent} ${styles.hidden}`}
						>
							{showCategory && (
								<PosesByCategory
									categories={categories}
									className={`${
										styles.hidden
									} ${
										showCategory &&
										styles.show
									}`}
								/>
							)}
							{showDifficulty && (
								<PosesByDifficulty
									className={`${
										styles.hidden
									} ${
										showDifficulty &&
										styles.show
									}`}
								/>
							)}
							{showBenefit && (
								<PosesByBenefit
									className={`${
										styles.hidden
									} ${
										showBenefit &&
										styles.show
									}`}
								/>
							)}
						</div>
					</div>
					{/* LEARN */}
					<Learn />
				</>
			)}
		</div>
	);
}

export default App;
