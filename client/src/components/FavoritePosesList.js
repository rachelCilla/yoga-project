import React, { useEffect,useState } from 'react'
import { useCookies } from "react-cookie";

export default function FavoritePosesList({handleBackButtonClick, favoritePose}) {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userEmail = cookies.Email;


  const getAllFavorites = async () => {
    try{
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/favorite_poses/${userEmail}`,{
        method: 'GET',
        headers: {"Content-Type": "application/json"}
      });
  
      const data = await response.json();
      console.log(data);
    }catch(err){
      console.log(err);
    }
  
  }

  useEffect(() => {
    getAllFavorites();
  },[]);

  return (
    <div className='favorite-poses-list'>
      
    //     <h1 className=''>Favorite Poses List</h1>
    <p>{userEmail}</p>
    //     <button  onClick={handleBackButtonClick}>Back</button>  

    {/* // <div className="">
    //     <h3>{favoritePose.pose_name}</h3>
       
    //     <img src={...} alt="pose image" />
    //         <button>Remove from Favorites</button>
    //         <button >More Info</button>
    //     </div> */}
    </div>
  )
}
