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

	return (
		<div className=" pt-24 bg-grayBlueDarker">
			<div className="text-center">
<h1 className="display-4 font-mont font-semibold text-center text-white">{categoryName}</h1>
			<Link  to="/posecategorycard"
			className="mb-3  px-5 py-2 btn "
			style={{ backgroundColor: "#7E6765", color: "#FFFFFF" }}
			>
				Back to Categories
			</Link>

			</div>
			<div className="row"> 
			{poses.map((pose) => (
				<div className=" col-12 col-md-5 m-2 me-1" key={pose.id}>
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
		</div>
	);
}
