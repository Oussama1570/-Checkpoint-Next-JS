import React from 'react'
import "./Navbar.css";
import Link from 'next/link';
import Logo from  '../../public/Logo.jpg'



const Navbar = () => {
  return (
    <div>
   
   
{/** Navbar **/}

    <nav class="navMenu">
      
      <a href='/' className='HomeM'>Home</a>
      <a href='/Projects' className='ProjectsM'>Projects</a>
      <a href='/About' className='AboutM'>About</a>
      <a href='/Contact' className='ContactM'>Contact</a>
      <div class="dot"></div>
    </nav>
  


    </div>
  )
}

export default Navbar
