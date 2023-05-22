import React from 'react'
import IntroImage from '../images/images.jpg'

export default function Introduction() {
  return (
    <div className='introduction-div' id='introduction'>
        <h1>Yoga App</h1>
        <img className="intro-image"src={IntroImage} alt="yoga pose"/>

    </div>

  )
}
