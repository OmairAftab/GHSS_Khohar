import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='flex justify-around text-3xl font-bold text-black'>
      <div className='flex gap-1'>
        <img className='w-20 h-20'id='piconnav' src="/Pics/ghss_khohar-removebg-preview.png" alt="" />
        <h1 className='text-4xl !pt-5' id='headingonnav'>GHSS Khohar</h1>

      </div>


      <div id='sidebar'>

        <li className='list-none' onClick={()=>{const side=document.getElementById('sidebar')
              side.style.display = 'none'
            }}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="35px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>      </li>      

        <Link to="/">Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/academics'}>Academics</Link>
            <Link to={'/Faculty'}>Faculty</Link>
            <Link to={'/contact'}>Contact</Link>
      </div>





        
        <div  className='!gap-8 text-2xl cursor-pointer  flex mr-1.5 items-center'>

            <Link id='navlinks'  to="/">Home</Link>
            <Link id='navlinks' to={'/about'}>About</Link>
            <Link id='navlinks' to={'/academics'}>Academics</Link>
            <Link id='navlinks' to={'/Faculty'}>Faculty</Link>
            <Link id='navlinks' to={'/contact'}>Contact</Link>
            <li  id="menubar" className='list-none' onClick={()=>{const side=document.getElementById('sidebar')
              side.style.display = 'flex'
            }}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>      </li>      


        </div>
    </nav>
  )
}

export default Nav