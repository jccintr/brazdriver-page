import React from 'react'
import telefone from '../assets/tela-app-978x2100.png';
import googleplay from '../assets/googleplay-625x250.png';


const Aplicativo = () => {
  return (
    <div id="aplicativo" className='bg-gray-200 py-8 flex flex-col-reverse w-full items-center justify-center gap-2 md:flex-row  md:justify-around md:px-72 md:items-center'>
         <img src={telefone} alt='logo' className='w-40 md:w-72' />
         <div className='flex flex-col gap-4 items-center'>
            <p className='text-3xl font-semibold text-center'>Aplicativo <span className='text-blue-800 md:text-4xl'>Braz Driver</span> para passageiros</p>
            <p className='text-xl text-gray-600 text-center'>Baixe grátis o nosso aplicativo e conheça um novo jeito de se locomover em <span className='text-blue-800 font-semibold'>Brazópolis.</span></p>
            <a href='https://play.google.com/store/apps/details?id=com.jccintr.taxibraz&hl=pt_BR'><img src={googleplay} alt='logo' className='w-40 md:w-72' /></a>
         </div>
    </div>
  )
}

export default Aplicativo