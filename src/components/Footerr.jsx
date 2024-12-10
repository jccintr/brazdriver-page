import React from 'react'
import { Footer } from 'flowbite-react'

const Footerr = () => {
  return (
    <Footer container>
    <Footer.Copyright href="#" by="Braz Driver Mobilidade Urbana" year={2024} />
    <Footer.LinkGroup>
     
      <Footer.Link href="#">Termos de Uso</Footer.Link>
    </Footer.LinkGroup>
  </Footer>
  )
}

export default Footerr