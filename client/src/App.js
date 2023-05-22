import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Nav.js';
import Introduction from './components/Introduction';
import Learn from './components/Learn';
import PoseCategories from './components/PoseCategories';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function App() {
  const userEmail = 'test@test.com';
  const [favoritePoses, setFavoritePoses] = useState(null);
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/favorite_poses/${userEmail}`);
      const json = await response.json();
      setFavoritePoses(json);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect only runs once when the component mounts if [] is empty
  useEffect(() => getData, []);

  console.log(favoritePoses);

  // sort favorite by date
  const sortedFavoritePoses = favoritePoses?.sort((a, b) => new Date(a.date) - new Date(b.date));

  // API call for yoga
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

  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <PoseCategories categories={categories} />
      {/* {sortedFavoritePoses?.map((favoritePose)=><FavoritePosesList key={favoritePose.id} favoritePose={favoritePose} />)} */}
      <Learn />
    </div>
  );
}

export default App;
