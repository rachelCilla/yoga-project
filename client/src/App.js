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
import PosesByCategory from "./components/poses/categories/PosesByCategory";
import PosesCard from "./components/poses/categories/PosesCard";
import PoseCategoryCard from "./components/poses/categories/PoseCategoryCard";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [favoritePoses, setFavoritePoses] = useState(null);
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const userEmail = cookies.Email;
	const authToken = cookies.AuthToken;

	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<Route path="/" element={<Root />}>
	// 			<Route index element={<Banner />} />
	// 			<Route path="/poseintro" element={<PoseIntro />} />
	// 			<Route path="/learn" element={<Learn />} />
	// 		</Route>
	// 	)
	// );

	// set login status
	useEffect(() => {
		if (authToken) {
			getFavoritesData();
			setLoggedIn(true);
		}
	}, []);

	const getFavoritesData = async () => {
		try {
			const response = await fetch(`http://localhost:8000/favorite_poses/${userEmail}`);
			const jsonFavoritesResponse = await response.json();
			setFavoritePoses(jsonFavoritesResponse);
		} catch (err) {
			console.log(err);
		}
	};

	//     ⋆｡ ﾟ ☁︎｡⋆｡ ﾟ ☾ ﾟ ｡⋆ ⋆｡  ✧ °  ｡ʚ 🍓 ɞ ｡° ✧ﾟ ☁︎｡⋆｡ ꒰    return below  ꒱   ﾟ ☾ ﾟ ｡⋆      ⋆｡ ﾟ ☁︎｡⋆｡ ﾟ ☾ ﾟ ｡⋆
	return (
		<BrowserRouter>
			<Routes>
				{/* API CALLS in Layout */}
				<Route element={<Layout />}>
					<Route path="/" element={<Banner />} />
					<Route path="/poseintro" element={<PoseIntro />} />
					<Route path="/learn" element={<Learn />} />
					<Route path="/favorites" element={<FavoritePosesList />} />
					<Route path="/auth" element={<Auth />} />
					<Route path="/posesbycategory" element={<PosesByCategory />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
