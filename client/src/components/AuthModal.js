import React, { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import styles from "../css/Auth.module.css";

export default function Auth({ auth, handleClose }) {
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const [isLogin, setIsLogin] = useState(true);
	const [error, setError] = useState(null);
	const [password, setPassword] = useState(null);
	const [email, setEmail] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);

	// modal animation
	const dropIn = {
		hidden: {
			y: "-100vh",
			opacity: 0,
		},
		visible: {
			y: "0",
			opacity: 1,
			transition: {
				duration: 2,
				type: "spring",
				damping: 100,
				stiffness: 500,
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
		e.preventDefault();
		if (!isLogin && password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		const response = await fetch(
			`${process.env.REACT_APP_SERVER_URL}/${endpoint}`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			}
		);

		const data = await response.json();

		if (data.detail) {
			setError(data.detail);
		} else {
			setCookie("Email", data.email);
			setCookie("AuthToken", data.token);

			window.location.reload();
		}
	};

	return (
		<Backdrop onClick={() => viewLogin(false)}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className={styles.modal}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<form>
					<h2>
						{isLogin
							? " Please Login"
							: "Please Sign Up"}
					</h2>
					<input
						type="email"
						placeholder="Email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						type="password"
						placeholder="Password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					{!isLogin && (
						<input
							type="password"
							placeholder="Confirm Password"
							onChange={(e) => {
								setConfirmPassword(
									e.target.value
								);
							}}
						/>
					)}
					<input
						type="submit"
						className="create"
						onClick={(e) =>
							handleSubmit(
								e,
								isLogin ? "login" : "signup"
							)
						}
					></input>

					{error && <p>{error}</p>}
				</form>
				<div>
					<button
						onClick={() => viewLogin(false)}
						style={{
							backgroundColor: !isLogin
								? "rgb(255,255,255)"
								: "rgb(188,188,188)",
						}}
					>
						Sign up
					</button>
					<button
						onClick={() => viewLogin(true)}
						style={{
							backgroundColor: isLogin
								? "rgb(255,255,255)"
								: "rgb(188,188,188)",
						}}
					>
						Login
					</button>
				</div>

				<button onClick={handleClose}>
					Nevermind, Take me Back!
				</button>
			</motion.div>
		</Backdrop>
	);
}
