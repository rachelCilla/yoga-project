import React, { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

export const CategoriesContext = createContext();

export default function () {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	// API CALLS-----------------------------------------------------------------
	useEffect(() => {
		axios.get("https://yoga-api-nzy4.onrender.com/v1/categories")
			.then((response) => {
				setCategories(response.data);
				setLoading(false);
			})

			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);

	return (
		<>
			{loading ? (
				<div>Loading...</div> // Show a loading indicator while waiting for API response
			) : (
				<CategoriesContext.Provider value={categories}>
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
							<article className="cardGrowGlow flex flex-col p-8 bg-primary1/80 rounded shadow border-2 border-primary2  ">
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
								<div className="pose-card-p-background">
									<p className="text-primary5 mb-3">
										Explore a variety of yoga poses categorized by their specific categories, including Core
										Yoga for strengthening the core muscles, Seated Yoga for poses performed in a seated
										position, Chest Opening Yoga for poses that open and expand the chest area, and Backbend
										Yoga for poses that focus on bending the spine and opening the back.
									</p>
								</div>
								{/* search btn 1 */}

								{/* LINK TO POSES BY CATEOGRY */}
								<Link
									to="/posesbycategory"
									// state={{ categories }}
									className=" glass-btn rounded-full">
									Search
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 inline-block"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</article>

							<article className="cardGrowGlow flex flex-col p-8 bg-primary1/80 rounded shadow border-2 border-primary2 ">
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
								<div className="pose-card-p-background">
									<p className=" text-primary5 mb-3">
										Discover and explore yoga poses categorized by difficulty level, ranging from beginner,
										intermediate, to advanced, empowering practitioners to choose poses that align with their
										skill level and progress at their own pace.
									</p>
								</div>
								<Link to="/posesbydifficulty" className=" glass-btn rounded-full">
									Search
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 inline-block"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path
											fill-rule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</Link>
							</article>
							<article className="cardGrowGlow flex flex-col p-8 bg-primary1/80 rounded shadow border-2 border-primary2 ">
								<div className="bg-primary2/60 rounded-full w-25 h-20 flex justify-center items-center shadow-2xl mx-auto bg-[url('../images/cutout3.png')] ">
									<Player
										loop
										autoplay
										src="https://lottie.host/296652ee-1f38-45b5-95f9-8db60a80684d/1XkH5fFjga.json"
										className="playerGlow "
									/>
								</div>
								<h2 className="text-4xl cardTitle uppercase mt-6 font-medium mb-3">
									Poses by <span className="category-difficulty-benefit">Benefit</span>
								</h2>
								<div className="">
									<p className="text-primary5 mb-3">
										Find yoga poses based on their specific benefits, such as strengthening the abdomen,
										relieving stress, improving posture, relieving menopausal and menstrual discomfort,
										reducing anxiety, fatigue, backache, headache, and insomnia, and providing therapeutic
										effects for conditions like asthma, high blood pressure, osteoporosis, and sinusitis.
									</p>
								</div>
								{/* search btn 3 */}
								<Link to="/posesbybenefit" className=" glass-btn rounded-full ">
									Search
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 inline-block"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path
											fill-rule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</Link>
							</article>
						</section>
					</main>
				</CategoriesContext.Provider>
			)}
		</>
	);
}
