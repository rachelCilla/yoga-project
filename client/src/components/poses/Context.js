import React, { createContext, useState } from "react";

// Create the context
export const PoseContext = createContext();

// Create the provider component
export const PoseProvider = ({ children }) => {
	// State to hold the API data
	const [poseData, setPoseData] = useState(null);

	// Function to update the pose data
	const updatePoseData = (data) => {
		setPoseData(data);
	};

	// Provide thec pose data and update function to consuming components
	return <PoseContext.Provider value={{ poseData, updatePoseData }}>{children}</PoseContext.Provider>;
};
