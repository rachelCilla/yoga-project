import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";

import "bootstrap/dist/css/bootstrap.css";

// import styles from "./css/App.module.css";
import SharedLayout from "./components/SharedLayout";
import Banner from "./components/banner/Banner";
import Learn from "./components/Learn";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import FavoritePosesList from "./components/FavoritePosesList";
import Auth from "./components/auth/AuthModal";
import Nav from "./components/nav/Nav";
import { Outlet } from "react-router-dom";

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
		<>
			<Nav className="fixed top-0 left-0 right-0" />

			<div className="">
				<Outlet />
			</div>
		</>
	);
}

export default App;
