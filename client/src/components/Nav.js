import React, { useEffect } from 'react';
import { useState } from 'react';
import FavoritePosesList from './FavoritePosesList';
// import SignUp from './SignUp';
import { useCookies } from 'react-cookie';

export default function Nav() {
	const [showFavorites, setShowFavorites] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(null);
    const [loggedIn, setLoggedIn] = useState(false);
	// const [showSignUp, setShowSignUp] = useState(false);

		// OPENING AND CLOSING MODALS-----------------------------------------------
	// const toggleSignUp = () => {
	// 	setShowSignUp(!showSignUp);
	// };

	const signOut = () => {
		removeCookie('Email');
		removeCookie('AuthToken');
		window.location.reload();
	}


	const openFavorites = () => {
	setShowFavorites(!showFavorites);
	};

	const handleBackButtonClick = () => {
	setShowFavorites(false);
	};

	useEffect(() => {
        if (cookies.Email && cookies.AuthToken) {
            setLoggedIn(true);
        }
    }, [cookies]);



		// SCROLLING BEHAVIOR----------------------------------------------------------
	const scrollToIntroduction = () => {
	const introduction = document.getElementById('introduction');
	introduction.scrollIntoView({ behavior: 'smooth' });
	};

	const scrollToPoseCategories = () => {
	const PoseCategories = document.getElementById('pose-categories');
	PoseCategories.scrollIntoView({ behavior: 'smooth' });
	};

	const scrollToLearn = () => {
	const learn = document.getElementById('learn');
	learn.scrollIntoView({ behavior: 'smooth' });
	};

  return (
	<div className='navbar'>
		<div className='nav-items'>
			<div className='nav-items' onClick={scrollToIntroduction}>Introduction</div>
			<div className='nav-items' onClick={scrollToPoseCategories}>Poses</div>
			<div className='nav-items' onClick={scrollToLearn}>Learn</div>
		</div>
		<button onClick={openFavorites}>See my Favorites</button>
		{/* <button onClick={toggleSignUp}>Sign Up</button> */}


		<button onClick={signOut}>Sign Out</button>
		{showFavorites && <FavoritePosesList handleBackButtonClick={handleBackButtonClick} />}
		{/* {showSignUp && <SignUp handleClose={toggleSignUp}  />} */}
	</div>
  );
}