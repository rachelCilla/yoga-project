import React from "react";
import PosesByCategory from "./poses/PosesByCategory";
import PosesByDifficulty from "./poses/PosesByDifficulty";
import PosesByBenefit from "./poses/PosesByBenefit";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";

export default function () {
	const [showCategory, setShowCategory] = useState(false);
	const [showDifficulty, setShowDifficulty] = useState(false);
	const [showBenefit, setShowBenefit] = useState(false);
	const [categories, setCategories] = useState([]);
	// API CALLS-----------------------------------------------------------------
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
		<main className="p-8 relative w-screen h-screen bg-bottom bg-cover bg-[url('../images/kike-vega-F2qh3yjz6Jk-unsplash.jpg')] font-mont">
			{/* heading */}
			<header className="mix-blend-multiply inline-block rounded shadow mx-auto absolute top-0 left-0 w-full text-center h-full custom-filter ">
				<h1 className=" posesTitle mt-5 text-white text-8xl    bg-clip-text font-black  mix-blend-screen font-serif">
					How would you like to discover?  {" "}
				</h1>
			</header>

			{/* section  */}
			<section className="absolute top-44 grid grid-cols-1 md:grid-cols-3 md:gap-10 left-1/2 transform -translate-x-1/2 w-10/12 ">
				{/* first white div */}
				<article className="cardGrowGlow p-8 bg-primary1/80 rounded shadow border-2 border-primary2 white-div">
					{/* circle 1 */}
					<div className=" inset-0 bg-primary2/60 rounded-full w-20 h-20 flex justify-center items-center  mx-auto bg-[url('../images/cutout.png')] ">
						<Player
							loop
							autoplay
							src="https://lottie.host/17dde2e8-5e84-4c58-990c-f3a24716d985/F50yBdohnj.json"
							className="playerGlow z-5"
						/>
					</div>
					{/* TITLE1 */}
					<h2 className="cardTitle uppercase mt-6 font-medium mb-3 text-4xl">
						Poses by <span className="category-difficulty-benefit">Category</span>
					</h2>
					<p className="font-light text-base text-gray-500 mb-3">
						Explore a variety of yoga poses categorized by their specific categories, including Core Yoga for strengthening
						the core muscles, Seated Yoga for poses performed in a seated position, Chest Opening Yoga for poses that open and
						expand the chest area, and Backbend Yoga for poses that focus on bending the spine and opening the back.
					</p>
					<a className="text-primary4 flex items-center hover:text-indigo-600" href="/">
						search
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path
								fill-rule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</article>
				<article className="cardGrowGlow p-8 bg-primary1/90 rounded shadow border-2 border-primary2">
					<div className=" rounded-full w-20 h-20 flex justify-center items-center shadow-2xl mx-auto bg-[url('../images/cutout2.png')] ">
						<Player
							className="playerGlow"
							loop
							autoplay
							src="https://lottie.host/e7da78b5-d665-48ec-9694-8ab3e864d2f4/CUNUfvFMgE.json"
						/>
					</div>
					{/* TITLE 2  */}
					<h2 className="cardTitle uppercase mt-6 font-medium mb-3 text-4xl">
						Poses by <span className="category-difficulty-benefit">Difficulty</span>
					</h2>
					<p className="font-light text-base text-gray-500 mb-3">
						Discover and explore yoga poses categorized by difficulty level, ranging from beginner, intermediate, to advanced,
						empowering practitioners to choose poses that align with their skill level and progress at their own pace.
					</p>
					<a className="text-primary4 flex items-center" href="/">
						search
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path
								fill-rule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</article>
				<article className="cardGrowGlow p-8 bg-primary1/80 rounded shadow border-2 border-primary2 ">
					<div className="bg-primary2/60 rounded-full w-25 h-20 flex justify-center items-center text-red-500 shadow-2xl mx-auto bg-[url('../images/cutout3.png')] ">
						<Player
							loop
							autoplay
							src="https://lottie.host/296652ee-1f38-45b5-95f9-8db60a80684d/1XkH5fFjga.json"
							className="playerGlow"
						/>
						{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
							<path
								fill-rule="evenodd"
								d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
								clip-rule="evenodd"
							/>
						</svg> */}
					</div>
					<h2 className="text-4xl cardTitle uppercase mt-6 font-medium mb-3">
						Poses by <span className="category-difficulty-benefit">Benefit</span>
					</h2>
					<p className="font-light text-base text-gray-500 mb-3">
						Find yoga poses based on their specific benefits, such as strengthening the abdomen, relieving stress, improving
						posture, relieving menopausal and menstrual discomfort, reducing anxiety, fatigue, backache, headache, and
						insomnia, and providing therapeutic effects for conditions like asthma, high blood pressure, osteoporosis, and
						sinusitis.
					</p>
					<a className="text-primary4 flex items-center hover:text-red-600" href="/">
						search
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path
								fill-rule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</article>
			</section>
		</main>
	);
}
