import React from 'react';
import PosesCard from './PosesCard';

export default function PoseDifficultyCard({ handleBackButtonClick, difficultyData }) {
  return (
    <div className='pose-difficulty-card'>

      <h1>{difficultyData.difficulty_level} Poses</h1>

    { difficultyData.poses.map((pose) => (
            <div key={pose.id}>
 <PosesCard pose={pose}
    
          //  poseName={pose.english_name} poseImg={pose.url_png} poseBenefits={pose.pose_benefits}
           />
            </div>
        ))
    }


      <button onClick={handleBackButtonClick}>back</button>
    
    </div>
  );
}



// // import React from 'react';
// // // children
// // import PosesCard from './PosesCard';

// // export default function ChosenCategoryPoseList({ handleBackButtonClick, categories, categoryIndex }) {
// //   const poses = categories[categoryIndex].poses;

// //   return (
// //     <div className=''>
// //        <button onClick={handleBackButtonClick}>Back to Categories</button>
// //       {poses.map(pose => (
// //         <div key={pose.id}>

// //           <PosesCard
// //           categories={categories} categoryIndex={categoryIndex} pose={pose}
// //           //  poseName={pose.english_name} poseImg={pose.url_png} poseBenefits={pose.pose_benefits}
// //            />
// //         </div>
// //       ))}
     
// //     </div>
// //   );
// 