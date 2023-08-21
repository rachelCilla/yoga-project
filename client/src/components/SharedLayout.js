import React from "react";
import Nav from "./nav/Nav";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useCookies } from "react-cookie";

export default function SharedLayout() {
	const [categories, setCategories] = useState([]);
	const [poseList, setPoseList] = useState([]);

	// const [cookies, setCookie, removeCookie] = useCookies(null);
	// const [loggedIn, setLoggedIn] = useState(false);

	// const userEmail = cookies.Email;

	// API - GET CATEGORIES
	useEffect(() => {
		axios.get("https://yoga-api-nzy4.onrender.com/v1/categories")
			.then((response) => {
				setCategories(response.data);
			})

			.catch((error) => {
				console.log(error);
			});
	}, []);
	// API- GET POSES
	useEffect(() => {
		axios.get("https://yoga-api-nzy4.onrender.com/v1/poses")
			.then((response) => {
				setPoseList(response.data);
			})

			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="">
			<Nav className="" />
			<Outlet
				className=""
				context={{ categories, poseList }}
			/>
		</div>
	);
}
