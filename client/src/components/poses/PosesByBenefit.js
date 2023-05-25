import React, { useState } from 'react';
import posesBenefitData from './PoseData';

export default function PosesByBenefit() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <div className="accordion">
        <h1>Find Yoga Poses by Benefit</h1>

        {/* HEADING OF ACCORDION */}
      {posesBenefitData.map((benefit,index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-header ${activeItem === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {Object.keys(benefit)}
          </div>

          {/* BODY OF ACCORDION */}

          {/* when you click a button, benefit of that button (objectkey of posesBD) becomes activeItem (state) */}
          {/* if activeItem === benefit, render.... */}
          {activeItem === index && (
            <div className="accordion-content">
                <div>

                    {




                 
                    const categoryKeys = Object.keys(posesBenefitData[index]);

                    // console.log(categoryKeys)
                   

                    categoryKeys.forEach((key) => {
                        const benefitObj = category[key];
                        // console.log(benefitObj)
                        const benefitKeys = Object.keys(benefitObj);
                        console.log(benefitKeys)
                    
                   }
                     )




                }
                </div>


            </div>
          )}
        </div>
      ))}
    </div>
  );
}