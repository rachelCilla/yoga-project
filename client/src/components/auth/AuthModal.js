import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
// import LotusAnimation from "../lottie/LotusAnimation";
import { Player } from "@lottiefiles/react-lottie-player";
import SuccessCard from "./SuccessCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Auth({ auth, handleClose }) {
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const [isLogin, setIsLogin] = useState(true);
	const [error, setError] = useState(null);
	const [password, setPassword] = useState(null);
	const [email, setEmail] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const [showSuccess, setShowSuccess] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (cookies.Email) {
			setShowSuccess(true);
		}
	}, []);

	// modal animation
	const dropIn = {
		hidden: {
			y: "-100vh",
			opacity: 0,
		},
		visible: {
			y: "1vh",
			opacity: 1,
			transition: {
				duration: 3,
				type: "spring",
			},
		},
		exit: {
			y: "100vh",
			opacity: 0,
		},
	};

	const viewLogin = (status) => {
		setError(null);
		setIsLogin(status);
	};

	// const handleClick = () => {
	//     toggleHideMainContent();
	// }
	const handleSubmit = async (e, endpoint) => {
		console.log("handle submit");
		e.preventDefault();
		if (!isLogin && password !== confirmPassword) {
			setError("Passwords do not match");
			console.log("passwords do not match");
			return;
		}
		try {
			console.log("endpoint", endpoint);
			const response = await fetch(
				`${process.env.REACT_APP_SERVER_URL}/${endpoint}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				}
			);

			const data = await response.json();
			console.log("data", data);

			if (data.detail) {
				setError(data.detail);
			} else {
				setCookie("Email", data.email);
				console.log("data.token", data.token);
				setCookie("AuthToken", data.token);
				setShowSuccess(true);
				// window.location.reload();
			}
		} catch (error) {
			console.log("error", error);
			setError("Failed to login/signup");
			setShowSuccess(false);
		}
	};

	return (
		<Backdrop className="-z-10 ">
			{!showSuccess && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className=" font-mont relative  w-4/5 rounded-lg flex flex-col items-center justify-center bg-white pb-6 px-6 h-5/6 mt-10 "
					// style={{ maxHeight: "90vh" }}
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					{/* CLOSE BTN */}
					<button onClick={() => navigate(-1)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="gray"
							className=" z-100 w-8 h-8 absolute top-0 right-0 transform m-3 hover:bg-gray-100 text-gray-800 border border-gray-400 rounded shadow"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					{/* ANIMATION */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 3,
						}}
						className="w-60"
					>
						<Player
							className="h-full"
							loop
							autoplay
							src="https://lottie.host/2f38fc54-efd5-4ed7-8a6f-5cc5c5d3d70b/A7HDImtSdr.json"
						/>
					</motion.div>

					{/* SIGN IN DIV */}
					<div className="  sm:mx-auto sm:w-full sm:max-w-sm flex  justify-center m-0">
						<h2 className="text-center text-2xl md:text-3xl font-bold leading-9 tracking-tight text-grayBlueDark font-mont">
							{isLogin
								? "Sign into your account"
								: "Please sign up"}
						</h2>
					</div>

					{/* EMAIL */}
					<div className="mt-1 md:mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
						<form className="space-y-6">
							<div>
								<label
									htmlFor="email"
									className="block text-sm text-lg leading-6 text-gray-900"
								>
									Email address
								</label>
								<div className="mt-2">
									<input
										className="block w-full rounded-md border-0 py-1.5 text-blue-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										type="email"
										placeholder="Email"
										onChange={(e) => {
											setEmail(
												e.target
													.value
											);
										}}
									/>
								</div>
							</div>

							{/* PASSWORD */}
							<div>
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-sm text-lg leading-6 text-blue-gray-800"
									>
										Password
									</label>

									{/* <div className="text-sm">
									<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
										Forgot password?
									</a>
								</div> */}
								</div>
								<div className="mt-2">
									<input
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										type="password"
										placeholder="Password"
										onChange={(e) => {
											setPassword(
												e.target
													.value
											);
										}}
									/>{" "}
								</div>
								{/* if logging in - CONFIRM PASSWORD */}
								{!isLogin && (
									<div className="mt-2">
										<input
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											type="password"
											placeholder="Confirm Password"
											onChange={(
												e
											) => {
												setConfirmPassword(
													e
														.target
														.value
												);
											}}
										/>
									</div>
								)}
							</div>
							{/* ERROR MESSAGE */}

							{error && (
								<p className="text-red-600  font-semibold">
									Error: {error}
								</p>
							)}
							{/* SUBMIT BUTTON */}
							<div>
								<button
									type="submit"
									onClick={(e) =>
										handleSubmit(
											e,
											isLogin
												? "login"
												: "signup"
										)
									}
									className="font-mont flex w-full justify-center rounded-md bg-grayBlue px-3 py-1.5 md:text-md font-semibold md:leading-6 text-white shadow-sm hover:bg-grayBlueLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									{isLogin
										? "Sign in"
										: "Sign up"}
								</button>
							</div>

							{/* <div>
							<button
								onClick={() => viewLogin(false)}
								style={{
									backgroundColor: !isLogin ? "rgb(255,255,255)" : "rgb(188,188,188)",
								}}>
								Sign up
							</button>
							<button
								onClick={() => viewLogin(true)}
								style={{
									backgroundColor: isLogin ? "rgb(255,255,255)" : "rgb(188,188,188)",
								}}>
								Login
							</buttonconsole.log()
						</div> */}
						</form>
						{isLogin && (
							<p className="mt-3 text-center md:text-lg text-gray-500">
								Not a member?
								<a
									href="#"
									className="d-block md:d-static ps-1  font-semibold md:leading-6 text-grayBlueDark hover:text-grayBlueLight"
									onClick={() =>
										setIsLogin(false)
									}
								>
									Create an account
								</a>
							</p>
						)}
						{/* <button onClick={() => navigate(-1)}>
							Nevermind, take me back!{" "}
						</button> */}
					</div>
				</motion.div>
			)}
			{showSuccess && <SuccessCard handleClose={handleClose} />}
		</Backdrop>
	);
}
