import React from 'react'
import logo from '../assets/igreja-polaroid-600x600.png';

const Hero = () => {
  return (
    <div className='mt-6 px-10 w-full flex flex-col md:flex-row items-center md:px-24'>
       
        <p className='text-2xl text-stone-600 text-center font-semibold leading-relaxed md:text-6xl'>A sua nova opção de <span className='text-blue-800'>Mobilidade Urbana</span> para <span className='text-3xl text-blue-800 md:text-7xl'>Brazópolis</span> e região.</p>
      
        <img src={logo} alt='logo' className='w-250px md:w-200px' />
    </div>
   
  )
}

export default Hero