import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import PoseIntro from "./components/poses/PoseIntro";
import Learn from "./components/Learn";
import Favorites from "./components/FavoritePosesList";
import MoreInfo from "./components/poses/MoreInfo";
import Banner from "./components/banner/Banner";
import PosesByCategory from "./components/poses/categories/PosesByCategory";
import PosesByDifficulty from "./components/poses/difficulty/PosesByDifficulty";
import PosesByBenefit from "./components/poses/benefits/PosesByBenefit";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Banner /> },
			{
				path: "poseintro",
				element: <PoseIntro />,
			},
			{
				path: "learn",
				element: <Learn />,
			},
			{
				path: "favorites",
				element: <Favorites />,
			},
			{
				path: "posesbycategory",
				element: <PosesByCategory />,
			},
			{
				path: "posesbydifficulty",
				element: <PosesByDifficulty />,
			},
			{
				path: "posesbybenefit",
				element: <PosesByBenefit />,
			},
			{
				path: "moreinfo",
				element: <MoreInfo />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
