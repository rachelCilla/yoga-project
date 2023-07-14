import React, { useEffect, useState, useContext } from "react";
import PoseCategoryCard from "./PoseCategoryCard";
import { CategoriesContext } from "../PoseIntro";

export default function PosesByCategory({ showCategory }) {
	const categories = useContext(CategoriesContext);
	// const data = useLocation();
	// const categories = data.state.categories;

	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		console.log("categories", categories);
	}, [categories]);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		const title = document.querySelector(".posesBy");

		if (showCategory) {
			title.classList.add("show");
		}
	}, [showCategory]);

	return (
		<div className="">
			<h1 className="posesBy" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
				Find yoga poses by Category
			</h1>
			<div>
				<PoseCategoryCard categories={categories} />
			</div>
		</div>
	);
}
