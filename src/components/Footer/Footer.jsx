import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Srajal</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Links</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/srajal-dwivedi-7275641b2/"><BsLinkedin/></a>
        <a href="https://github.com/Srajal-Cresteyy"><BsGithub/></a>
      </div>

      <div className="foot_copyright">
        <small> &copy; Srajal Dwivedi.Sll Rights Reserved</small>
      </div>
      
    </footer>
  )
}

export default Footer

