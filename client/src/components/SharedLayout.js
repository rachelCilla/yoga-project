import React from "react";
import Nav from "./nav/Nav";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SharedLayout() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios.get("https://yoga-api-nzy4.onrender.com/v1/categories")
			.then((response) => {
				setCategories(response.data);
			})

			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Nav />
			<Outlet context={{ categories }} />
		</>
	);
}
