import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import Nav from './Nav.jsx'
 import Header from './Components/Header.jsx'
 import Footer from './Components/Footer.jsx'
  import Home from './Pages/Home'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
 

<div>
  
  <BrowserRouter>

    <Nav />
    <App />
    

     </BrowserRouter>


    </div>

   
 
)
