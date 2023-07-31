import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { PoseProvider } from "./components/poses/Context";
import "bootstrap/dist/css/bootstrap.css";

// import styles from "./css/App.module.css";
import SharedLayout from "./components/SharedLayout";
import Banner from "./components/banner/Banner";
import Learn from "./components/Learn";
import Error from "./components/Error";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FavoritePosesList from "./components/FavoritePosesList";
import Auth from "./components/auth/AuthModal";
import Nav from "./components/nav/Nav";
import { Outlet } from "react-router-dom";
import Layout from "./components/SharedLayout";
import PoseIntro from "./components/poses/PoseIntro";

import PosesCard from "./components/poses/categories/PosesCard";
import PoseCategoryCard from "./components/poses/categories/PoseCategoryCard";
import MoreInfo from "./components/poses/MoreInfo";
import ChosenCategoryPoseList from "./components/poses/categories/ChosenCategoryPoseList";
import PoseDifficultyCard from "./components/poses/difficulty/PoseDifficultyCard";
import PosesByDifficulty from "./components/poses/difficulty/PosesByDifficulty";
import PosesByBenefit from "./components/poses/benefits/PosesByBenefit";
import SuccessCard from "./components/auth/SuccessCard";
import IndividualMoreInfo from "./components/poses/difficulty/IndividualMoreInfo"
function App() {
    return (
		<BrowserRouter>
			<Routes>
				{/* API CALLS in Layout */}
				<Route element={<Layout />}>
					<Route path="/" element={<Banner />} />
					<Route path="/learn" element={<Learn />} />
					<Route path="/favorites" element={<FavoritePosesList />} />
					<Route path="/auth" element={<Auth />} />

					<Route path="/home" element={<PoseIntro />} />
					{/* category routes */}

					<Route path="/posecategorycard" element={<PoseCategoryCard />} />
					<Route path="/posesbycategory/:category_name" element={<ChosenCategoryPoseList />} />
					{/* difficulty routes */}
					<Route path="/posesbydifficulty" element={<PosesByDifficulty />} />
					{/* benefit route */}
					<Route path="posesbybenefit" element={<PosesByBenefit />} />
					<Route path="/posescard/:id" element={<PosesCard />} />
                    <Route path="/moreinfo" element={<MoreInfo />} />
                    <Route path="/moreinfoposes" element={<IndividualMoreInfo />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
