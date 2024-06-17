import React from 'react'
import './about.css'
import ME from '../../assets/dev-ed-wave.png'
import { FaAward } from 'react-icons/fa'
import { TbBrandLeetcode } from 'react-icons/tb'

const About = () => {
    return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 className='here'>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>
                Experience
              </h5>
              <small>
                Assistant Software Engineer - Nucleus Software Exports | Feb 2024 - Present
              </small>
            </article>

            <article className='about_card'>
              <TbBrandLeetcode className='about_icon'/>
              <h5>
                Questions
              </h5>
              <small>
                350+
              </small>
            </article>

            <article className='about_card'>
              <TbBrandLeetcode className='about_icon'/>
              <h5>
                Contest Ratings
              </h5>
              <small>
                1676(Top 14% worldwide)
              </small>
            </article>
          </div>
          <p>
            Hello there ! I m Srajal Dwivedi a Computer Science Major from Pranveer Singh Institute of Technology Currently in 4th year of
              my computer Science Engineering Stream .
          </p>
          <a href="#contacts" className='btn btn-primary'>Let's connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
