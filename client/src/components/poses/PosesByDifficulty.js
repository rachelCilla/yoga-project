import React, { useState } from 'react';
// children


export default function PosesByDifficulty({ categories }) {
//     const [showPoseList, setShowPoseList] = useState(false);
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

//   const handleButtonClick = (categoryIndex) => {
//     setShowPoseList(!showPoseList);
//     setSelectedCategoryIndex(categoryIndex)
//   };
  return (
   
    
            <div className='poses-by-difficulty'>
                <h1>Find yoga poses by difficulty</h1>
              {/* {categories &&
                categories.map((category, index) => (
                  <div key={category.category_name}>
                    <h3>{category.category_name}</h3> */}
                    <button 
                    // onClick={() => handleButtonClick(index)}
                    >
                    Beginner Poses
                    </button>
                    <button 
                    // onClick={() => handleButtonClick(index)}
                    >
                    Intermediate Poses
                    </button>
                    <button 
                    // onClick={() => handleButtonClick(index)}
                    >
                    Expert Poses
                    </button>
                    {/* {showPoseList && selectedCategoryIndex === index && (
                      <ChosenCategoryPoseList
                        handleBackButtonClick={handleButtonClick}
                        categories={categories}
                        categoryIndex={selectedCategoryIndex}
                      />
                    )} */}
                  {/* </div>
                ))} */}
            </div>
          );
  
}


// export default function PosesByDifficulty({ categories }) {
//     <div>
//         <h1>hiiiiiii</h1>
//     </div>
//   const [showPoseList, setShowPoseList] = useState(false);
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

//   const handleButtonClick = (categoryIndex) => {
//     setShowPoseList(!showPoseList);
//     setSelectedCategoryIndex(categoryIndex)
//   };

  
//   return (
//     <div className='pose-category-card'>
//       {categories &&
//         categories.map((category, index) => (
//           <div key={category.category_name}>
//             <h3>{category.category_name}</h3>
//             <button onClick={() => handleButtonClick(index)}>
//               Click here for {category.category_name} poses
//             </button>
//             {showPoseList && selectedCategoryIndex === index && (
//               <ChosenCategoryPoseList
//                 handleBackButtonClick={handleButtonClick}
//                 categories={categories}
//                 categoryIndex={selectedCategoryIndex}
//               />
//             )}
//           </div>
//         ))}
    // </div>
//   );
// }