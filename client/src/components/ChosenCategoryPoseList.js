import React from 'react';
import PosesCard from './PosesCard';

export default function ChosenCategoryPoseList({ handleBackButtonClick, categories, categoryIndex }) {
  const poses = categories[categoryIndex].poses;

  return (
    <div className=''>
       <button onClick={handleBackButtonClick}>Back to Categories</button>
      {poses.map(pose => (
        <div key={pose.id}>

          <PosesCard poseName={pose.english_name} poseImg={pose.url_png} poseBenefits={pose.pose_benefits}/>
        </div>
      ))}
     
    </div>
  );
}
