import React, { useState, useEffect } from 'react';
import posesBenefitData from './PoseData';
import ChosenBenefitsPoseList from './ChosenBenefitsPoseList';


// index = index of poseBD objs= [{},{},{},{}]
// object = object of poseBD = [{},{},{},{}]
// mainCategories = "Symptoms", "Stretches", etc
// subCategories= the keys of the object that is the value of mainCategories. "Strengthens the abdomen", "Stimulates lungs"
export default function PosesByBenefit() {
  const [activeItem, setActiveItem] = useState(null);
const [activeSubCategory, setActiveSubCategory] = useState(null);


  const toggleAccordion = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index); //set the clicked item as active
    }
  };
  
 const handleClick = (subCategory)=>{
	setActiveSubCategory(subCategory);
 }

 const handleBackClick = () => {
    setActiveSubCategory(null);
  };

 useEffect(() => {

  }, [activeSubCategory]);


  // ... your code ...

return (
	<div className="accordion">
	  <h1>Find Yoga Poses by Benefit</h1>
  
	  {posesBenefitData.map((object, index) => (
		<div className="accordion-item" key={index}>
		  {/* HEADING OF ACCORDION */}
		  <div
			className={`accordion-header ${activeItem === index ? 'active' : ''}`}
			onClick={() => toggleAccordion(index)}
		  >
			{/* accordion button - MAIN CATEGORY title */}
			{Object.keys(object)}
		  </div>
  
		  {/* BODY OF ACCORDION */}
		  {/* when you click a button, benefit of that button (objectkey of posesBD) becomes activeItem (state) */}
		  {/* if activeItem === benefit, render.... */}
		  {activeItem === index && (
			<div className="accordion-content">
			  {/* object = {Strengthens: {…}} or {Stimulates: {…}}, */}
  
			  {/* SUBCATEGORY title buttons ("stimulates the heart") */}
			  {Object.keys(object[Object.keys(object)]).map((subCategory) => (
				<button key={subCategory} onClick={() => handleClick(subCategory)}>
				  {subCategory}
				</button>
			  ))}
			</div>
		  )}
		</div>
	  ))}
  
	  {/* DISPLAY CHOSEN BENEFITS POSE LIST  */}
	  {activeSubCategory && activeItem !== null && (
  <ChosenBenefitsPoseList
    handleBackClick={handleBackClick}
    activeItem={activeItem}
    activeSubCategory={activeSubCategory}
    mainCategory={Object.keys(posesBenefitData[activeItem])} 
	//  the activeItem !== null check ensures that the mainCategory prop is only accessed when activeItem has a valid value and is not null. This prevents the error when the component initially renders before an item is selected.
  />
)}
	</div>
  );

  

}