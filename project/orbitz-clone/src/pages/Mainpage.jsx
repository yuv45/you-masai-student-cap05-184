import React from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import Traveling from '../Components/Traveling'
import Featured from '../Components/Featured'
import { useContext } from 'react'
 
import Slider from '../Components/slider'
export const Mainpage  = () => {
  const {loggedIn}=useContext(AuthContext)
  return (
    <>{
      loggedIn?<div>
      <Slider/>
      <Featured/>
      <Traveling/></div>:
      <h1>For Further Accessibility you have to SignIn</h1>
      } 
    
    </>
  )
}
