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


function App() {
  // const userEmail = 'test@test.com';
  const [categories, setCategories] = useState([]);


{// FAVORITES- INCOMPLETE------------------------------------------------------
  // const [favoritePoses, setFavoritePoses] = useState(null);
  // const getData = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/favorite_poses/${userEmail}`);
  //     const json = await response.json();
  //     setFavoritePoses(json);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => getData, []);

  // const sortedFavoritePoses = favoritePoses?.sort((a, b) => new Date(a.date) - new Date(b.date));
}


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
      <Navbar />
      <Introduction />
      <div className='pose-options-parent'>
      <PosesByCategory categories={categories} />
      <PosesByDifficulty/>
      <PosesByBenefit/>
      </div>
      {/* {sortedFavoritePoses?.map((favoritePose)=><FavoritePosesList key={favoritePose.id} favoritePose={favoritePose} />)} */}
      <Learn />
    </div>
  );
}

export default App;
