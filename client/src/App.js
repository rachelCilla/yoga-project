import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import Navbar from './components/Nav.js';
import Introduction from './components/Introduction';
import Learn from './components/Learn';
import PosesByCategory from './components/poses/PosesByCategory';
import PosesByDifficulty from './components/poses/PosesByDifficulty';
import PosesByBenefit from './components/poses/PosesByBenefit';
import FavoritePosesList from './components/FavoritePosesList';
import Auth from './components/Auth';
import { useCookies } from 'react-cookie';

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(null);
	const [favoritePoses, setFavoritePoses] = useState(null);
	const [categories, setCategories] = useState([]);
    const userEmail = cookies.Email;
    const authToken = cookies.AuthToken;
    
    
    
    

  // FAVORITES- INCOMPLETE------------------------------------------------------
    
    const getFavoritesData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/favorite_poses/${userEmail}`);
        const jsonFavoritesResponse= await response.json();
        setFavoritePoses(jsonFavoritesResponse);
      } catch (err) {
        console.log(err);
      }
    };


    useEffect(() => {
      if (authToken){
        getFavoritesData()
      }},
      []);

    const sortedFavoritePoses = favoritePoses?.sort((a, b) => new Date(a.date) - new Date(b.date));



    // API CALLS-----------------------------------------------------------------
        // API CALL FOR CATEGORIES
    useEffect(() => {
      axios
        .get('https://yoga-api-nzy4.onrender.com/v1/categories')
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  

    // RETURN-------------------------------------------------------------------
    return (
      <div className="App">
          {!authToken && <Auth/>}
        {authToken && 
        <>
        <p>Welcome back {userEmail}</p>
        <Navbar />
        <Introduction />
        <div className='pose-options-parent'>
        <PosesByCategory categories={categories} />
        <PosesByDifficulty/>
        <PosesByBenefit/>
        </div>
        {/* {sortedFavoritePoses?.map((favoritePose)=><FavoritePosesList key={favoritePose.id} favoritePose={favoritePose} />)} */}
        <Learn />
        </>}
      </div>
    );
}

export default App;
