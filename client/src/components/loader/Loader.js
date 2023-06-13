import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

import "./Loader.css";

// images imports
import image1jpg from "./loaderImages/image1.jpg";
import image2jpg from "./loaderImages/image2.jpg";
import image3jpg from "./loaderImages/image3.jpg";
import image4jpg from "./loaderImages/image4.jpg";
import image5jpg from "./loaderImages/image5.jpg";
import screenshot from "../../images/screenshot.png";

export default function Loader() {
	const [beginAnimation, setBeginAnimation] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setBeginAnimation(true);
		}, 2000);
	}, []);

	return (
		<m.div className="loader-inner" initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ delayChildren: 2 }}>
			{beginAnimation && (
				<>
					<m.img
						className="image-1"
						alt="yoga pose"
						src={image1jpg}
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 2, delay: 1, exit: 4 }}
						exit={{ y: 200 }}
					/>

					<m.img
						className="image-2"
						alt="yoga pose"
						src={image2jpg}
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 2, delay: 3 }}
					/>
					{/* <m.img
						className="image-3"
						alt="yoga pose"
						src={image3jpg}
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 2, delay: 3 }}
					/> */}
					<m.img
						className="image-4"
						alt="yoga pose"
						src={image3jpg}
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 2, delay: 5 }}
					/>
					<m.img
						className="image-5"
						alt="yoga pose"
						src={image5jpg}
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 2, delay: 7 }}
					/>
				</>
			)}
			<m.img
				className="screenshot"
				alt="yoga pose"
				src={screenshot}
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 2, delay: 0 }}
			/>
		</m.div>
	);
}
