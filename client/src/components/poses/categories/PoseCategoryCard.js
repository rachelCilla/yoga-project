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

	return (
		<div className=" container-fluid bg-grayBlueDarker mt-20 text-center w-100">
			<h1
				className="pt-5 tracking-widest font-mont font-semibold text-center text-5xl text-white transition duration-500 hover:text-transparent hover:text-stroke-2 "
				initial={{ opacity: 0, y: 80 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					ease: "easeInOut",
					duration: 1,
					delay: 0.4,
				}}
			>
				{/* <h1 className="font-poiret font-semibold text-white transition duration-500 hover:text-transparent hover:text-stroke-2 text-6xl"> */}
				Find poses by category
			</h1>
			<Link
				className="m-3  px-5 py-2 btn mb-5"
				style={{ backgroundColor: "#7E6765", color: "#FFFFFF" }}
				to="/home"
			>
				Back
			</Link>

			<div className="">
				<div className="row " style={{ maxWidth: "100%" }}>
					{categories.map((category, index) => (
						<div
							style={{
								minHeight: "100px",
							}}
							className=" col-xs-12 col-md-4 "
							key={category.category_name}
						>
							<Link
								className="   no-underline  "
								to={`/posesbycategory/${category.category_name}`}
							>
								<h3 className=" btn btn-secondary p-3 ">
									{category.category_name}
								</h3>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
