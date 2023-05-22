// reusable component for each pose card



import React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import testImage from '../images/download.jpg';
import MoreInfo from './MoreInfo';


export default function PosesCard({poseName, poseImg, poseBenefits}) {
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const openMoreInfo = () => {
    setShowMoreInfo(true)
  }
const closeMoreInfo = () => {
  setShowMoreInfo(false)
}
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={poseImg} alt="pose image" />
      <Card.Body>
        <Card.Title>{poseName}</Card.Title>
        <Card.Text>
          {poseBenefits}
        </Card.Text>
        <Button variant="primary">Add to Favorites</Button>{' '}
        <Button variant="secondary" onClick={openMoreInfo}>More Info</Button>
      </Card.Body>
    </Card>
    {showMoreInfo && <MoreInfo closeMoreInfo={closeMoreInfo}/>} 
    </div>
  );
}
