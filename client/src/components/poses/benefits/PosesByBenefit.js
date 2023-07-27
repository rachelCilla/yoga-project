import React, { useState, useEffect } from "react";
import posesBenefitData from "../PoseData";
import ChosenBenefitsPoseList from "./ChosenBenefitsPoseList";
import { Link } from "react-router-dom";
// import styles from "../../css/App.module.css";
// index = index of poseBD objs= [{},{},{},{}]
// object = object of poseBD = [{},{},{},{}]
// mainCategories = "Symptoms", "Stretches", etc
// subCategories= the keys of the object that is the value of mainCategories. "Strengthens the abdomen", "Stimulates lungs"
export default function PosesByBenefit({ showBenefit }) {
	const [activeItem, setActiveItem] = useState(null);
	const [activeSubCategory, setActiveSubCategory] = useState(null);
	const toggleAccordion = (index) => {
		if (activeItem === index) {
			setActiveItem(null);
		} else {
			setActiveItem(index); //set the clicked item as active
		}
	};

	const handleClick = (subCategory) => {
		setActiveSubCategory(subCategory);
	};

	const handleBackClick = () => {
		setActiveSubCategory(null);
	};

	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	useEffect(() => {}, [activeSubCategory]);

	// useEffect(() => {
	// 	const title = document.querySelector(`.${styles.posesBy}`);

	// 	if (showBenefit) {
	// 		title.classList.add(styles.show);
	// 	}
	// }, [showBenefit]);

	// ... your code ...

	return (
		<div className="accordion">
			<h1
				// className={`${styles.posesBy} ${isHovered ? styles.hovered : ""}`}
				onMouseEnter={handleHover}
				onMouseLeave={handleMouseLeave}>
				Find Poses by Benefit
			</h1>
			<Link to="/home">
				<button className="text-xl bg-blue-200">Back </button>
			</Link>

			{posesBenefitData.map((object, index) => (
				<div className="accordion-item" key={index}>
					<div className={`accordion-header ${activeItem === index ? "active" : ""}`} onClick={() => toggleAccordion(index)}>
						{Object.keys(object)}
					</div>

					{activeItem === index && (
						<div className="accordion-content">
							{Object.keys(object[Object.keys(object)]).map((subCategory) => (
								<button key={subCategory} onClick={() => handleClick(subCategory)}>
									{subCategory}
								</button>
							))}
						</div>
					)}
				</div>
			))}

			{activeSubCategory && activeItem !== null && (
				<ChosenBenefitsPoseList
					handleBackClick={handleBackClick}
					activeItem={activeItem}
					activeSubCategory={activeSubCategory}
					mainCategory={Object.keys(posesBenefitData[activeItem])}
				/>
			)}
		</div>
	);
}
