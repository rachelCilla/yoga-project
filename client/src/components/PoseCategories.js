import React from 'react'
import PoseCategoryCard from './PoseCategoryCard'

export default function PoseCategories({categories}) {
  console.log(categories)
  return (
    <div className='pose-categories' id='pose-categories'>
        <h1>Pose Categories</h1>
        <div>
           <PoseCategoryCard categories={categories}/>

        </div>
       <div></div>
    </div>
  )
}
