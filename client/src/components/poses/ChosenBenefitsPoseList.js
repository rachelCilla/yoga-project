import React from "react";
import posesBenefitData from "./PoseData";
import PosesCard from "./PosesCard";
import ErrorBoundary from "./ErrorBoundary";

export default function ChosenBenefitsPoseList({
  handleBackClick,
  activeItem,
  mainCategory,
  activeSubCategory,
}) {
  const poses =
    posesBenefitData[activeItem]?.[mainCategory]?.[activeSubCategory] || [];

  return (
    <div>
      <h3>Poses that {activeSubCategory}</h3>
      <button onClick={handleBackClick}>Back</button>
      {poses.map((pose, index) => (
        <div key={index}>
          <ErrorBoundary>
            <PosesCard pose={pose} />
          </ErrorBoundary>
        </div>
      ))}
    </div>
  );
}
