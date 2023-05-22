import React, { useState } from 'react';
import ChosenCategoryPoseList from './ChosenCategoryPoseList';

export default function PoseCategoryCard({ categories }) {
  const [showPoseList, setShowPoseList] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleButtonClick = (categoryIndex) => {
    setShowPoseList(!showPoseList);
    setSelectedCategoryIndex(categoryIndex);
  };

  return (
    <div className='pose-category-card'>
      {categories &&
        categories.map((category, index) => (
          <div key={category.category_name}>
            <h3>{category.category_name}</h3>
            <button onClick={() => handleButtonClick(index)}>
              Click here for {category.category_name} poses
            </button>
            {showPoseList && selectedCategoryIndex === index && (
              <ChosenCategoryPoseList
                handleBackButtonClick={handleButtonClick}
                categories={categories}
                categoryIndex={selectedCategoryIndex}
              />
            )}
          </div>
        ))}
    </div>
  );
}
