import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider'
const Navbar = props => {
  const navigate=useNavigate()
  const {loggedIn}=useContext(AuthContext)
  return (
    <>
    <div id='main'>
      <div className='nav'>
      <div className='navbar-image'>
        <img onClick={()=>{
          navigate("/")
        }} src=" https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2&3ec60977" alt="" />
      </div>
      <div className='more-travel'>
         <div><h6>More travel</h6></div>
       <div> <i class='bx bx-chevron-down'></i></div>
      </div>
      </div>
      
      <div className='get-app'> 
      <div>   <i class='bx bx-mobile-alt'></i></div>
      <div><h6>Get the App</h6></div> </div>
   
      <div className='nav-components'>
      <h6>Espanol</h6>
      <h6>List your property</h6>
      <h6>Support</h6>
      <h6>Trips</h6>
      {
         loggedIn? <h6 onClick={()=>{
        navigate("/logout")
         }}>Logout</h6>: <h6 onClick={()=>{
          navigate("/signin")
         }}>Sign in</h6>
      }
     
     

     
 

    </div>
    </div>
    </>
  )
}



export default Navbar