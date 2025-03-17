import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/srajal-dwivedi-7275641b2/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Srajal-Cresteyy"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://leetcode.com/srajal_dwivedi"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode />
      </a>
    </div>
  )
}

export default HeaderSocials
