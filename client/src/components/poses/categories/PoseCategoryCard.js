import React, { useState, useEffect, useContext } from "react";
// children
import ChosenCategoryPoseList from "./ChosenCategoryPoseList";
// import { CategoriesContext } from "../PoseIntro";
import { Link, useOutletContext } from "react-router-dom";

export default function PoseCategoryCard() {
	const [showPoseList, setShowPoseList] = useState(false);
	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

	const { categories } = useOutletContext();

	const handleButtonClick = (categoryIndex) => {
		setShowPoseList(!showPoseList);
		setSelectedCategoryIndex(categoryIndex);
	};
	// const data = useLocation();
	// const categories = data.state;
	// useEffect(() => {
	// 	console.log("categories:", categories);
	// }, [categories]);

	return (
		<div className="bg-blue-100">
			<h1 className="mt-20"> find poses by category</h1>
			<Link className="text-lg" to="/home">
				Back
			</Link>
			{categories.map((category, index) => (
				<div key={category.category_name}>
					<h3>{category.category_name}</h3>
					<Link to={`/posesbycategory/${category.category_name}`}>
						<button>Click here for {category.category_name} poses</button>
					</Link>
					{/* <button onClick={() => handleButtonClick(index)}>Click here for {category.category_name} poses</button> */}
					{/* {showPoseList && selectedCategoryIndex === index && (
						<ChosenCategoryPoseList
							handleBackButtonClick={handleButtonClick}
							categories={categories}
							categoryIndex={selectedCategoryIndex}
						/>
					)} */}
				</div>
			))}
		</div>
	);
}
