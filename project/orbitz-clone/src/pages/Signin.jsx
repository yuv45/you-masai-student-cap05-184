import React,{useContext, useState} from 'react'
import { AuthContext} from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';


export const Signin = () => {
  const navigate=useNavigate()
  const {loggedIn,setLoggedIn}=useContext(AuthContext)
    const [state,setstate]=useState({email:"",password:""});
    const handlechange=(e)=>{
        setstate({...state,[e.target.name]:e.target.value});
    }
  return (
    <div className='main-signinbox'>
    <div id='signin-box'>
        <div className='image'>
          <i class='bx bx-arrow-back' ></i>
            <img src='https://www.orbitz.com/_dms/interstitial/logo.svg?locale=en_US&siteid=70201'/>
            <hr/>
        </div>
        <h1>Sign in </h1>
        </div>
       <form>
         
        <input onChange={handlechange} name='email' type='text' placeholder='Email address'/>
        <br/>
       
        <input onChange={handlechange} name='password' type='text' placeholder='Password'/>
        <br/>
        <input id='checklist' type='checkbox'/>
        <p className='checklist'>Keep me Signed in</p>
        <br/>
        <p><span>By signing in, I agree to the Orbitz</span> Terms and Conditions,Privacy Statement <span>and</span> Orbitz Rewards Terms and Conditions.</p>
        <input onClick={(e)=>{
          if(state.email!=""&&state.password!=""){
            e.preventDefault()
            setLoggedIn(true)
            navigate("/")

          }
         
        }} type='submit'  title='signin'/>
        <p style={{margin:"20px", textDecoration:"underline"}} className='forget pasword'>Forget   Password?</p>
        <span>Don't have an account?<p>Create one</p></span>
        <span>or continue with</span>
        <br/>
        <i class='bx bxl-apple'></i>
        <i class='bx bxl-facebook-square'></i>
       </form>
      
       </div>
  )
}
