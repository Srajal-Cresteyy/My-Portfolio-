import React, { useState } from 'react'
import './nav.css'

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail, BiLogOut } from 'react-icons/bi'
import {
  RiChatQuoteLine,
  RiPassportFill,
  RiProjector2Line,
  RiServiceLine,
} from 'react-icons/ri'
import { HiOutlineMenuAlt2 } from 'react-icons/hi' // Menu Icon
import { IoClose } from 'react-icons/io5' // Close Icon

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <nav className={isExpanded ? 'expanded' : ''}>
      <div className="toggle-btn" onClick={toggleNavbar}>
        {isExpanded ? 'Srajal' : <HiOutlineMenuAlt2 />}
      </div>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome className="icon" />
        {isExpanded && <span>Home</span>}
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser className="icon" />
        {isExpanded && <span>About</span>}
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook className="icon" />
        {isExpanded && <span>Experience</span>}
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine className="icon" />
        {isExpanded && <span>Services</span>}
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <RiProjector2Line className="icon" />
        {isExpanded && <span>Projects</span>}
      </a>

      <a
        href="#section"
        onClick={() => setActiveNav('#section')}
        className={activeNav === '#section' ? 'active' : ''}
      >
        <RiChatQuoteLine className="icon" />
        {isExpanded && <span>Quick Links</span>}
      </a>

      <a
        href="#contacts"
        onClick={() => setActiveNav('#contacts')}
        className={activeNav === '#contacts' ? 'active' : ''}
      >
        <BiMessageSquareDetail className="icon" />
        {isExpanded && <span>Contacts</span>}
      </a>
      <div className="logout-btn">
        <BiLogOut className="icon" />
        {isExpanded && <span>Logout</span>}
      </div>
    </nav>
  )
}

export default Nav
