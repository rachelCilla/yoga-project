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
		<div className="bg-grayBlueDarker container mt-20 pb-10 text-center accordion rounded">
			{!activeSubCategory && (
				<>
					<h1
						className="display-4 pt-5 font-mont font-semibold text-center text-white  "
						// className={`${styles.posesBy} ${isHovered ? styles.hovered : ""}`}
						onMouseEnter={handleHover}
						onMouseLeave={handleMouseLeave}
					>
						Find Poses by Benefit
					</h1>
					<Link to="/home">
						<button
							className="m-3  px-5 btn mb-4"
							style={{
								backgroundColor: "#7E6765",
								color: "#FFFFFF",
							}}
						>
							Back{" "}
						</button>
					</Link>

					{posesBenefitData.map((object, index) => (
						<div
							className="accordion-item btn btn-secondary col-12 m-2 mx-auto"
							key={index}
						>
							<div
								className="m-1 h5 "
								onClick={() =>
									toggleAccordion(index)
								}
							>
								{`Search by ${Object.keys(
									object
								)}`}
							</div>

							{activeItem === index && (
								<div className=" text-left row font-mont  m-2  ">
									{Object.keys(
										object[
											Object.keys(
												object
											)
										]
									).map((subCategory) => (
										<button
											className="text-left mb-2 "
											key={
												subCategory
											}
											onClick={() =>
												handleClick(
													subCategory
												)
											}
										>
											{subCategory}
										</button>
									))}
								</div>
							)}
						</div>
					))}
				</>
			)}

			{activeSubCategory && activeItem !== null && (
				<ChosenBenefitsPoseList
					handleBackClick={handleBackClick}
					activeItem={activeItem}
					activeSubCategory={activeSubCategory}
					mainCategory={Object.keys(
						posesBenefitData[activeItem]
					)}
				/>
			)}
		</div>
	);
}
