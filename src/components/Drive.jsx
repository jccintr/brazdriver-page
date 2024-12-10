import React from 'react'
import painel from '../assets/painel-carro-768x512.png';

const Drive = () => {
  return (
    <div id="drive" className='py-8 flex flex-col w-full items-center justify-center gap-2 md:flex-row  md:justify-around md:px-72 md:items-center'>
         
         <div className='flex flex-col gap-4 items-center'>
            <p className='text-3xl font-semibold text-center'>Seja um motorista parceiro <span className='text-blue-800 md:text-4xl'>Braz Driver</span>.</p>
            <p className='text-xl text-gray-600 text-center'>Transforme o seu tempo em dinheiro.</p>
            <p className='text-xl text-gray-600 text-center'>Tenha até <span className='font-semibold text-black'>85% de lucro</span> por corrida finalizada.</p>
            <p className='text-xl text-gray-600 text-center'>Flexibilidade total. Você define os seus horários.</p>
         </div>
         <img src={painel} alt='logo' className='w-2/3 mt-4 rounded-md md:w-8/12 ' />

    </div>
  )
}

export default Drive