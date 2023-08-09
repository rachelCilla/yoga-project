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
        <div className="container flex bg-blue-100 mt-20">

                <h1 className=" mt-20 text-center col-12"> find poses by category</h1>
                <Link className="col-12 btn btn-primary btn-sm" to="/home">Back</Link>
            
        

            <div className="row"> 
                {categories.map((category, index) => (
				    <div className="col-md-4" key={category.category_name}>
					    <Link to={`/posesbycategory/${category.category_name}`}>
						    <h3 className="btn btn-secondary">{category.category_name}</h3>
					    </Link>
				    </div>
                 ))}
            </div>
            
		</div>
	);
}
