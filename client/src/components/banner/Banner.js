import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, LayoutGroup, useAnimation } from "framer-motion";
import Loader from "../loader/Loader";
import yogaVideo from "../../images/yogaMain2.mp4";
import VideoScreenshot from "../../images/screenshot.png";
import { Link } from "react-router-dom";

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
	// const [playMarquee, setPlayMarquee] = useState(false);
	// const [isTransition, setIsTransition] = useState(false);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setPlayMarquee(true);
	// 	}, 2000);
	// }, []);

	// const AnimatedLetters = ({ title }) => (
	// 	<motion.span className="row-title" variants={banner} initial="initial" animate="animate">
	// 		{[...title].map((letter) => (
	// 			<motion.span key={Math.random()} className="row-letter" variants={letterAnimation}>
	// 				{letter}
	// 			</motion.span>
	// 		))}
	// 	</motion.span>
	// );

	// const BannerRowTop = ({ title }) => {
	// 	return (
	// 		<div className={"banner-row"}>
	// 			<div className="row-col">
	// 				<AnimatedLetters title={title} />
	// 			</div>
	// 			{/* <motion.div
	// 				initial={{ opacity: 0, y: 80 }}
	// 				animate={{ opacity: 1, y: 0 }}
	// 				transition={{
	// 					ease: "easeInOut",
	// 					duration: 1,
	// 					delay: 0.4,
	// 				}}
	// 				className="row-col">
	// 				<span className="row-message">
	// 					We are specialised in setting up the foundation of your brand and setting you up for success.
	// 				</span>
	// 			</motion.div> */}
	// 		</div>
	// 	);
	// };

	// const BannerRowCenter = ({ title, playMarquee }) => {
	// 	return (
	// 		<div className={`banner-row marquee  ${playMarquee && "animate"}`}>
	// 			<motion.div
	// 				initial={{ y: 310 }}
	// 				animate={{ y: 0 }}
	// 				transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
	// 				className="marquee__inner">
	// 				{/* <AnimatedLetters title={title} disabled /> */}
	// 				<AnimatedLetters title={title} />
	// 			</motion.div>
	// 		</div>
	// 	);
	// };
	// const BannerRowBottom = ({ title }) => {
	// 	return (
	// 		<div className={"banner-row center"}>
	// 			<motion.div
	// 				initial={{ scale: 0 }}
	// 				animate={{ scale: 1 }}
	// 				transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
	// 				className="scroll"></motion.div>
	// 			<AnimatedLetters title={title} />
	// 		</div>
	// 	);
	// };

	return (
		<div className="container-fluid ">
			<>
				<video
					autoPlay
					loop
					muted
					playsInline
					className="  h-screen w-screen object-cover">
					<source
						src={yogaVideo}
						type="video/mp4"
					/>{" "}
					Your browser does not support the video tag.
				</video>

				<div className="">
					<div
						className="container text-center 
                         absolute top-70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
						{/* WELCOME! TITLE */}
						<motion.div
							className=" tracking-widest font-poiret text-center text-7xl lg:text-8xl text-white font-semibold transition duration-500 hover:text-transparent hover:text-stroke-2   "
							initial={{ opacity: 0, y: 80 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								ease: "easeInOut",
								duration: 1,
								delay: 0.4,
							}}>
							Welcome!
						</motion.div>

						<div>{loggedIn ? ` ${userEmail}` : ""}</div>

						{!loggedIn && (
							<Link to="/home">
								<h5 className=" inline-block font-raleway text-white display-8 border-2 border-white px-10 py-3 rounded-full mt-5 ">
									Ready to discover new poses?
								</h5>
							</Link>
						)}
					</div>
				</div>
			</>
		</div>
	);
}

export default Banner;
