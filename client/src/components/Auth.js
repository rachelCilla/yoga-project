
import React from 'react'
import { useState } from 'react';
import {useCookies} from 'react-cookie'

export default function Auth() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  }
  
  const handleSubmit = async (e,endpoint) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

   const response =  await fetch (`${process.env.REACT_APP_SERVER_URL}/${endpoint}`,{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password})
    })
  

    const data = await response.json()

    if (data.detail){
      setError(data.detail)
    }else{
      setCookie('Email', data.email)
      setCookie('AuthToken', data.token)

      window.location.reload()
    }
    
  }

  return (
    <div>
      <div>
        <form>
          <h2>{isLogin ? ' Please Login' : 'Please Sign Up'}</h2>
          <input
           type="email" 
           placeholder='Email' 
           onChange={(e)=> {setEmail(e.target.value)}}
           />
          <input 
          type="password" 
          placeholder='Password' 
          onChange={(e)=> {setPassword(e.target.value)}}
          />
          {!isLogin && <input 
          type="password" 
          placeholder='Confirm Password'
          onChange={(e)=> {setConfirmPassword(e.target.value)}}
          />}
          <input type="submit" className="create" onClick={(e)=> handleSubmit(e, isLogin ? 'login' : 'signup')}></input>
          
          {error && <p>{error}</p>}
        </form>
        <div>
          <button onClick={()=> viewLogin(false)}
          style={{backgroundColor: !isLogin ? 'rgb(255,255,255)': 'rgb(188,188,188)'}}>Sign up</button>
          <button  onClick={()=> viewLogin(true)}
          style={{backgroundColor: isLogin ? 'rgb(255,255,255)': 'rgb(188,188,188)'}}>Login</button>
        </div>
      </div>
    </div>
  )
}
