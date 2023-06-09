import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, LayoutGroup, useAnimation } from "framer-motion";
import Loader from "../loader/Loader";
import yogaVideo from "../../images/yogaMain2.mp4";
import image3 from "../loader/loaderImages/image3.jpg";

import "./Banner.css";

// varients
const banner = {
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1,
		},
	},
};
const letterAnimation = {
	initial: {
		y: 400,
	},
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1,
		},
	},
};

function Banner({ hideMainContent, setLoading, loading, toggleHideMainContent, loggedIn, userEmail }) {
	const [playMarquee, setPlayMarquee] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setPlayMarquee(true);
		}, 2000);
	}, []);

	const AnimatedLetters = ({ title }) => (
		<motion.span className="row-title" variants={banner} initial="initial" animate="animate">
			{[...title].map((letter) => (
				<motion.span key={Math.random()} className="row-letter" variants={letterAnimation}>
					{letter}
				</motion.span>
			))}
		</motion.span>
	);

	const BannerRowTop = ({ title }) => {
		return (
			<div className={"banner-row"}>
				<div className="row-col">
					<AnimatedLetters title={title} />
				</div>
				{/* <motion.div
					initial={{ opacity: 0, y: 80 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						delay: 0.4,
					}}
					className="row-col">
					<span className="row-message">
						We are specialised in setting up the foundation of your brand and setting you up for success.
					</span>
				</motion.div> */}
			</div>
		);
	};

	const BannerRowCenter = ({ title, playMarquee }) => {
		return (
			<div className={`banner-row marquee  ${playMarquee && "animate"}`}>
				<motion.div
					initial={{ y: 310 }}
					animate={{ y: 0 }}
					transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
					className="marquee__inner">
					{/* <AnimatedLetters title={title} disabled /> */}
					<AnimatedLetters title={title} />
				</motion.div>
			</div>
		);
	};
	const BannerRowBottom = ({ title }) => {
		return (
			<div className={"banner-row center"}>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
					className="scroll"></motion.div>
				<AnimatedLetters title={title} />
			</div>
		);
	};

	return (
		<LayoutGroup type="crossfade">
			<AnimatePresence>
				{loading ? (
					<motion.div key="loader">
						<Loader setLoading={setLoading} />
					</motion.div>
				) : (
					// transition image
					<div className="">
						{!loading && (
							<div className="transition-image final">
								<motion.img
									src={image3}
									layoutId="main-image-1"
									alt="transition image"
									transition={{
										ease: [0.6, 0.01, -0.05, 0.95],
										duration: 1.6,
									}}
								/>
							</div>
						)}
						{!hideMainContent && (
							<>
								<div className="hero">
									<video autoPlay loop muted playsInline className="heroVideo">
										<source src={yogaVideo} type="video/mp4" /> Your browser does not support the video tag.
									</video>

									<div className="content">
										{/* WELCOME! TITLE */}
										<motion.div className="banner" varients={banner}>
											<BannerRowTop title={"Discover"} />
											<BannerRowCenter title={"Yoga"} playMarquee={playMarquee} />
											<BannerRowBottom title={"Poses"} />
										</motion.div>

										<div>{loggedIn ? ` ${userEmail}` : ""}</div>

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
