import React from 'react'
import PoseCategoryCard from './PoseCategoryCard'

export default function PosesByCategory({categories}) {
  
  return (
    <div className='pose-categories' id='pose-categories'>
        <h1>Find yoga poses by Category</h1>
        <div>
           <PoseCategoryCard categories={categories}/>

        </div>
       
    </div>
  )
}
