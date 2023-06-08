import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Loader.css";

// images imports
import image1jpg from "./loaderImages/image1.jpg";
import image2jpg from "./loaderImages/image2.jpg";
import image3jpg from "./loaderImages/image3.jpg";
import image4jpg from "./loaderImages/image4.jpg";
import image5jpg from "./loaderImages/image5.jpg";

// variants

// parent of all images
const container = {
	animate: {
		transition: {
			staggerChildren: 0.35,
		},
	},
};
// item = staggered Children
const item = {
	initial: {
		opacity: 0,
		y: 200,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 4,
			ease: [0.6, 0.01, 0.05, 0.9], // [stiffness, damping, velocity, mass
			duration: 1.6,
		},
	},
	exit: {
		opacity: 0,
		y: -200,
		transition: {
			ease: "easeInOut",
			duration: 0.8,
		},
	},
};

const itemMain = {
	initial: {
		opacity: 0,
		y: 200,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 4,
			ease: [0.6, 0.01, 0.05, 0.9], // [stiffness, damping, velocity, mass
			duration: 1.6,
		},
	},
};
export default function Loader({ setLoading }) {
	return (
		// LOADER
		<div className="loader">
			{/* MOTION PARENT */}
			<motion.div
				variants={container}
				initial="initial"
				animate="animate"
				exit="exit"
				className="loader-inner"
				onAnimationComplete={() => setLoading(false)}>
				{/* MOTION CHILDREN */}

				<motion.img variants={item} className="image-1" src={image1jpg} alt="yoga pose" />
				<motion.div className="transition-image" variants={itemMain}>
					<motion.img alt="yoga pose" layoutId="main-image-1" className="image-3" src={image3jpg} />
				</motion.div>

				<motion.img variants={item} alt="yoga pose" className="image-2" src={image2jpg} />

				<motion.img variants={item} className="image-4" src={image4jpg} alt="yoga pose" />

				<motion.img variants={item} className="image-5" src={image5jpg} alt="yoga pose" />
			</motion.div>
		</div>
	);
}
