import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import MoreInfo from "./MoreInfo";
import axios from "axios";

export default function PosesCard({ pose }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [poseData, setPoseData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const openMoreInfo = () => {
    setShowMoreInfo(true);
  };

  const closeMoreInfo = () => {
    setShowMoreInfo(false);
  };

  useEffect(() => {
    if (!pose.english_name) {
      setIsLoading(true);
      if (pose === "Child's Pose") {
        axios
          .get(`https://yoga-api-nzy4.onrender.com/v1/poses?id=10`)
          .then((response) => {
            setPoseData(response.data);
            setIsLoading(false); // Set loading state to false once data is fetched
          })
          .catch((error) => {
            console.log(error);
            setPoseData(null);
            setIsLoading(false); // Set loading state to false in case of error
          });
      } else {
        axios
          .get(`https://yoga-api-nzy4.onrender.com/v1/poses?name=${pose}`)
          .then((response) => {
            setPoseData(response.data);
            setIsLoading(false); // Set loading state to false once data is fetched
          })
          .catch((error) => {
            console.log(error);
            setPoseData(null);
            setIsLoading(false); // Set loading state to false in case of error
          });
      }
    }
  }, [pose]);

  const poseImageUrl = poseData?.url_png || pose?.url_png;
  const poseEnglishName = poseData?.english_name || pose?.english_name;
  const poseBenefits = poseData?.pose_benefits || pose?.pose_benefits;
  const poses = poseData || pose;

  return (
    <div className="poses-card">
      {isLoading ? (
        <div>Loading Poses...</div>
      ) : (
      <Card>
        <Card.Img variant="top" src={poseImageUrl} alt="pose image" />
        <Card.Body>
          <Card.Title>{poseEnglishName}</Card.Title>
          <Card.Text>{poseBenefits}</Card.Text>
          <Button variant="primary">Add to Favorites</Button>{" "}
          <Button variant="secondary" onClick={openMoreInfo}>
            More Info
          </Button>
        </Card.Body>
      </Card>
      )}
      {showMoreInfo && <MoreInfo closeMoreInfo={closeMoreInfo} pose={poses} />}
    </div>
  );
}
