import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dev-ed-wave.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        {/* <h5 className="heading-hello">Hello I'm</h5> */}
        <h1 className="heading-name">Srajal Dwivedi</h1>
        <CTA />
        <h5 className="text-light">Full Stack Developer</h5>
        <HeaderSocials />
        {/* <a href="#contact" className="scroll_down">
          Scroll Down
        </a> */}
      </div>
    </header>
  )
}

export default Header
