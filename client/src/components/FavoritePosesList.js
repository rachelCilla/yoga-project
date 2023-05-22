import React from 'react'
import crowPoseImage from '../images/crow.jpeg';

export default function favoritePosesList({handleBackButtonClick}) {

  return (
    <div className='favorite-poses-list'>
      
        <h1 className=''>Favorite Poses List</h1>
        <button  onClick={handleBackButtonClick}>Back</button>  

    <div className="">
        {/* <h3>{favoritePose.pose_name}</h3> */}
        <h3>Crow Pose</h3>
        <img src={crowPoseImage} alt="pose image" />
            <button>Remove from Favorites</button>
            <button >More Info</button>
        </div>
    </div>
  )
}
