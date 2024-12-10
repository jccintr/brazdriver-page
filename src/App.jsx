import { useState } from 'react'
import Header from './components/Header'
import Footerr from './components/Footerr'
import Aplicativo from './components/Aplicativo'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-auto flex flex-1 flex-col justify-center items-center'>
      <Header/>
      <Hero/>

      <Aplicativo/>
      <Footerr/>
   </div>
  )
}

export default App
