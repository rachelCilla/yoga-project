import React, { useState } from 'react';
import axios from 'axios';
import PoseDifficultyCard from './PoseDifficultyCard';

export default function PosesByDifficulty() {
    const [showPoseList, setShowPoseList] = useState(false);
    const [difficultyData, setDifficultyData] = useState();

    const handleButtonClick = (difficulty) => {
        setShowPoseList(!showPoseList);
        getDifficultyData(difficulty);
     
    };

    const getDifficultyData = (difficulty) => {
        axios
            .get(`https://yoga-api-nzy4.onrender.com/v1/poses?level=${difficulty}`)
            .then((response) => {
               setDifficultyData(response.data);
             

            })
            .catch((error) => {
                console.log(error);
            });
    }; 

    return (
        <div className="poses-by-difficulty">
            <h1>Find yoga poses by difficulty</h1>
            <button onClick={() => handleButtonClick('beginner')}>
                Beginner Poses
            </button>
            <button onClick={() => handleButtonClick('intermediate')}>
                Intermediate Poses
            </button>
            <button onClick={() => handleButtonClick('expert')}>
                Expert Poses
            </button>
            {showPoseList && (
                <PoseDifficultyCard handleBackButtonClick={handleButtonClick} difficultyData={difficultyData}/>
            )}
        </div>
    );
}
