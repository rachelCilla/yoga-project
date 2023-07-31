import React, { useContext, useEffect, useState } from "react";
// children
import PosesCard from "./PosesCard";
// import { CategoriesContext } from "../PoseIntro";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ChosenCategoryPoseList() {
	const [loading, setLoading] = useState(true);

	// const categoryName = useParams(); 
	const { category_name: categoryName } = useParams();
	const { categories } = useOutletContext();
	// Inside the component, add a check for categories existence
	if (!categories || categories.length === 0) {
		return <div className="text-2xl">Loading... This may take a moment.</div>;
	}
	// console.log("categories:", categories);
	// console.log("categoryName:", categoryName);

	// useEffect(() => {
	// 	if (categoryName && categories) {
	// 		setLoading(false);
	// 		console.log("categoryName:", categoryName);
	// 	}
	// }, [categoryName, categories]);

	// if (loading) {
	// 	return <div>Loading...</div>;
	// }

	// Find the object where category_name matches categoryName
	const selectedCategory = categories.find((category) => category.category_name === categoryName);
	const poses = selectedCategory.poses;


	// Now selectedCategory contains the object where the category_name matches categoryName
	// console.log(selectedCategory);
console.log("poses from categories page:", poses)
	return (
		<div className="mt-32">
			<Link className="" to="/posecategorycard">
				Back to Categories
			</Link>
			{poses.map((pose) => (
				<div key={pose.id}>
					<PosesCard
						// categories={categories}
                        categoriesPose={pose}
                    
						// categoryIndex={categoryIndex}

						// poseName={pose.english_name}
						// poseImg={pose.url_png}
						// poseBenefits={pose.pose_benefits}
					/>
				</div>
			))}
		</div>
	);
}
