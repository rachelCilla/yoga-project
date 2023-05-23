// reusable component for each pose card



import React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
// children
import MoreInfo from './MoreInfo';


export default function PosesCard({categories, categoryIndex,pose}) {


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
      <Card.Img variant="top" src={pose.url_png} alt="pose image" />
      <Card.Body>
        <Card.Title>{pose.english_name}</Card.Title>
        <Card.Text>
          {pose.pose_benefits}
        </Card.Text>
        <Button variant="primary">Add to Favorites</Button>{' '}
        <Button variant="secondary" onClick={openMoreInfo}>More Info</Button>
      </Card.Body>
    </Card>
    {showMoreInfo && <MoreInfo closeMoreInfo={closeMoreInfo} pose={pose}/>} 
    </div>
  );
}
