import React, { useEffect } from "react";
import { useState } from "react";
import FavoritePosesList from "../FavoritePosesList";
import { useCookies } from "react-cookie";
import Auth from "../auth/AuthModal";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBBtn,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem,
	MDBCollapse,
} from "mdb-react-ui-kit";

export default function Nav() {
	const [showBasic, setShowBasic] = useState(false);
	const [showFavorites, setShowFavorites] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [auth, setAuth] = useState(false);
	const [showNav, setShowNav] = useState(false);
	// AUTHENTICATION----
	const signOut = () => {
		removeCookie("Email");
		removeCookie("AuthToken");
		window.location.reload();
	};

	useEffect(() => {
		if (cookies.Email && cookies.AuthToken) {
			setLoggedIn(true);
		}
	}, [cookies]);

	return (
		<motion.nav
			className="flex justify-between items-center bg-black bg-opacity-25 w-full z-2 absolute top-0 left-0 z-2 border-slate-200"
			initial={{ opacity: 0, y: -180 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				ease: "easeInOut",
				duration: 1,
				delay: 0.6,
			}}
		>
			<MDBNavbar className="py-4 " expand="lg" bgColor="">
				<MDBContainer fluid>
					{/* <MDBNavbarBrand href="#">
					<img
						className=" h-9 relative"
						src={yogaIcon}
						alt="yoga icon"
					/>
				</MDBNavbarBrand> */}
					{/* 
				<MDBNavbarToggler
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowBasic(!showBasic)}>
					<MDBIcon
						icon="bars"
						fas
					/>
				</MDBNavbarToggler> */}
					<MDBNavbarToggler
						type="button"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setShowNav(!showNav)}
					>
						<MDBIcon
							icon="bars"
							fas
							className="text-white   "
						/>
					</MDBNavbarToggler>

					<MDBCollapse navbar show={showNav}>
						<MDBNavbarNav>
							{/* <MDBNavbarItem>
							<Link
								to="/"
								href="#"
								className=" text-white font-raleway text-lg  no-underline">
								<MDBNavbarLink
									active
									aria-current="page"
									href="#">
									Home
								</MDBNavbarLink>
							</Link>
						</MDBNavbarItem> */}

							<MDBNavbarItem>
								<Link
									to="/"
									className="no-underline"
								>
									<MDBNavbarLink
										href="#"
										className="text-white font-raleway text-lg  no-underline"
									>
										Home
									</MDBNavbarLink>
								</Link>
							</MDBNavbarItem>

							<MDBNavbarItem>
								<Link
									to="/home"
									className="no-underline"
								>
									<MDBNavbarLink className="text-white font-raleway text-lg  no-underline">
										Poses
									</MDBNavbarLink>
								</Link>
							</MDBNavbarItem>

							<MDBNavbarItem>
								<Link
									to="/learn"
									className="no-underline"
								>
									<MDBNavbarLink className="text-white font-raleway text-lg  ">
										Learn{" "}
									</MDBNavbarLink>
								</Link>
							</MDBNavbarItem>

							<MDBNavbarItem>
								<Link
									to="/favorites"
									className="no-underline"
									state={loggedIn}
								>
									<MDBNavbarLink className="text-white font-raleway text-lg  ">
										My Favorites
									</MDBNavbarLink>
								</Link>
							</MDBNavbarItem>

							{loggedIn && (
								<MDBNavbarItem className="  no-underline">
									<MDBNavbarLink
										onClick={signOut}
										className="text-white font-raleway text-lg  "
									>
										Sign Out
									</MDBNavbarLink>
								</MDBNavbarItem>
							)}
							{!loggedIn && !auth && (
								<MDBNavbarItem>
									<Link
										to="/auth"
										className="no-underline"
									>
										<MDBNavbarLink className="text-white font-raleway text-lg  ">
											Login or Sign
											Up
										</MDBNavbarLink>
									</Link>
								</MDBNavbarItem>
							)}
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</motion.nav>
	);
}
