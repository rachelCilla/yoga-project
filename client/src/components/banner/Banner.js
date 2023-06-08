import React from "react";
import { useEffect } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { useAnimation } from "framer-motion";
import Loader from "../loader/Loader";
import yogaVideo from "../../images/yogaVideo.mp4";
import image3 from "../loader/loaderImages/image3.jpg";
import Navbar from "../Nav";
import "./Banner.css";

function Banner({ hideMainContent, setLoading, loading, toggleHideMainContent, loggedIn, userEmail }) {
	// useEffect(() => {
	// 	loading ? document.querySelector("body").classList.add("loading") : document.querySelector("body").classList.remove("loading");
	// }, [loading]);
	//variants
	const container = {
		show: {
			transition: {
				staggerChildren: 0.35,
			},
		},
	};
	const item = {
		hidden: {
			opacity: 0,
			y: 200,
		},
		show: {
			opacity: 1,
			// bring it to original position
			y: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 1.6,
			},
		},
		// runs on unmount
		exit: {
			opacity: 0,
			y: -200,
			transition: {
				ease: "easeInOut",
				duration: 0.8,
			},
		},
	};
	return (
		<LayoutGroup type="crossfade">
			<AnimatePresence>
				{loading ? (
					<motion.div key="loader">
						<Loader setLoading={setLoading} />
					</motion.div>
				) : (
					<div className="">
						{/* NAVBAR */}
						<Navbar toggleHideMainContent={toggleHideMainContent} />
						{!loading && (
							<div className="transition-image final">
								<motion.img
									src={image3}
									alt="transition"
									layoutId="main-image-1"
									transition={{
										ease: [0.6, 0.01, -0.05, 0.95],
										duration: 1.6,
									}}
								/>
							</div>
						)}

						{/* HERO */}

						{!hideMainContent && (
							<>
								<div className="hero">
									<video autoPlay loop muted playsInline className="heroVideo">
										<source src={yogaVideo} type="video/mp4" /> Your browser does not support the video tag.
									</video>

									<div className="content">
										{/* WELCOME! TITLE */}

										<motion.div variants={container} initial="hidden" animate="show" exit="exit">
											<h1>
												<motion.div
													variants={container}
													initial="hidden"
													animate="show"
													exit="exit"></motion.div>
												<span variants={item}>W</span>
												<span variants={item}>e</span>
												<span variants={item}>l</span>
												<span variants={item}>c</span>
												<span variants={item}>o</span>
												<span variants={item}>m</span>
												<span variants={item}>e</span>
												<span variants={item}>!</span>
											</h1>
											<div>{loggedIn ? ` ${userEmail}` : ""}</div>
										</motion.div>

										{!loggedIn && <h5 className="contentBtn">Ready to discover new poses?</h5>}
									</div>
								</div>
							</>
						)}
					</div>
				)}
			</AnimatePresence>
		</LayoutGroup>
	);
}

export default Banner;
