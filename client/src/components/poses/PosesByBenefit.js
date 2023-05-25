import React, { useState } from 'react';
import posesBenefitData from './PoseData';



// index = index of poseBD objs= [{},{},{},{}]
// object = object of poseBD = [{},{},{},{}]
// mainCategories = "Symptoms", "Stretches", etc
// subCategories= the keys of the object that is the value of mainCategories. "Strengthens the abdomen", "Stimulates lungs"
export default function PosesByBenefit() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index); //set the clicked item as active
    }
  };
  
 const openPoses = ()=>{
	
 }

  return (
    <div className="accordion">
        <h1>Find Yoga Poses by Benefit</h1>

        {posesBenefitData.map((object,index) => (
              <div className="accordion-item" key={index}>
                  {/* HEADING OF ACCORDION */}
                    <div className={`accordion-header ${activeItem === index ? 'active' : ''}`}
                      onClick={() => toggleAccordion(index)}>
                      {/* accordion button t */}
                      {Object.keys(object)}
                    </div>

                  {/* BODY OF ACCORDION */}
                  {/* when you click a button, benefit of that button (objectkey of posesBD) becomes activeItem (state) */}
                  {/* if activeItem === benefit, render.... */}
                  {activeItem === index && (
                    <div className="accordion-content">
						{/* object = {Strengthens: {…}} or {Stimulates: {…}}, */}
                    
                        {Object.keys(object[Object.keys(object)]).map((subCategory) => (
                          <button key={subCategory} onClick={openPoses}>{subCategory}</button>
                        ))}
					
                    </div>
                  )}
              </div>
        ))}
    </div>
  );
}