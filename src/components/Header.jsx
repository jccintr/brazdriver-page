import React from 'react'
import { Navbar } from "flowbite-react";
import logo from '../assets/logo-letter-460x60.png';


const Header = () => {
  return (
    <Navbar className='w-full py-4 border-b-2 md:px-20' >
      <Navbar.Brand  href="https://flowbite-react.com">
         <img src={logo} alt='logo' className='w-40 md:w-60' />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        
        <Navbar.Link className='font-semibold text-lg uppercase ' href="#aplicativo">Aplicativo</Navbar.Link>
        <Navbar.Link className='font-semibold text-lg uppercase ' href="#drive">Dirija Conosco</Navbar.Link>
       
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header