import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
 import {Routes,Route, BrowserRouter} from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Mainpage } from './pages/Mainpage'
import { AuthContextProvider } from './context/AuthContextProvider'
import { Logout } from './pages/Logout'
 

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
    <BrowserRouter>
<>
 
    <Navbar/>
    <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/logout" element={<Logout/>}/>
    </Routes>
    <Footer/>
  
    
    </>
    </BrowserRouter>
    </AuthContextProvider>
)
