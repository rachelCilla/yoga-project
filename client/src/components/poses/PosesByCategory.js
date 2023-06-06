import React, { useEffect, useState } from "react";
import PoseCategoryCard from "./PoseCategoryCard";

import styles from "../../css/PosesByCategory.module.css";

export default function PosesByCategory({ categories, showCategory }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		const title = document.querySelector(`.${styles.posesBy}`);

		if (showCategory) {
			title.classList.add(styles.show);
		}
	}, [showCategory]);

	return (
		<div className={`${styles.poseCategories} ${styles.card}`}>
			<h1
				className={`${styles.posesBy}${
					isHovered ? styles.hovered : ""
				}`}
				onMouseEnter={handleHover}
				onMouseLeave={handleMouseLeave}
			>
				Find yoga poses by Category
			</h1>

			{isHovered && (
				<div>
					<PoseCategoryCard categories={categories} />
				</div>
			)}
		</div>
	);
}
