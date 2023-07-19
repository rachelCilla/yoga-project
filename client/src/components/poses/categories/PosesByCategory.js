import React, { useEffect, useState, useContext } from "react";
import PoseCategoryCard from "./PoseCategoryCard";
// import { CategoriesContext } from "../PoseIntro";
import { useLocation } from "react-router-dom";
import { PoseContext } from "../Context";
import { useOutletContext } from "react-router-dom";

export default function PosesByCategory({ showCategory }) {
	// const { poseData } = useContext(PoseContext);
	const { categories } = useOutletContext();
	console.log("categories", categories);

	// const [isHovered, setIsHovered] = useState(false);
	// const categories = poseData;
	// const handleHover = () => {
	// 	setIsHovered(true);
	// };

	// const handleMouseLeave = () => {
	// 	setIsHovered(false);
	// };
	// // Use the pose data in your component
	// console.log("categories" + categories);
	// useEffect(() => {
	// 	const title = document.querySelector(".posesBy");

	// 	if (showCategory) {
	// 		title.classList.add("show");
	// 	}
	// }, [showCategory]);

	return (
		<div className="">
			<h1
				className="posesBy"
				// onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}
			>
				Find yoga poses by Category
			</h1>

			<div>
				<PoseCategoryCard categories={categories} />
			</div>
		</div>
	);
}
