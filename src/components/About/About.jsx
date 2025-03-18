import React from 'react'
import './about.css'
import ME from '../../assets/Profile-Picture2.svg'
import { FaAward } from 'react-icons/fa'
import { TbBrandLeetcode } from 'react-icons/tb'

const About = () => {
  return (
    <section id="about">
      <h5 className="sub-heading-about">Get To Know</h5>
      <h2 className="cen-about">About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Accenture</h5>
              <small>Ass. Software Engineer</small>
              <br></br>
              <small>SEP'2024 - Present</small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Nucleus Software</h5>
              <small>Ass. Software Engineer</small>
              <br></br>
              <small>FEB'24 - SEP'24</small>
            </article>

            <article className="about_card">
              <TbBrandLeetcode className="about_icon" />
              <h5>Contest Ratings</h5>
              <small>Top 14% worldwide</small>
              <br></br>
              <small>Rating@1676</small>
            </article>
          </div>
          <p>
            I am a dedicated software developer skilled in Java, SQL,
            PostgresSQL,Spring, Spring MVC, Springboot ,Hibernate, JDBC, and
            Hibernate Template. With a solid grasp of design patterns, I create
            efficient, scalable applications. I thrive on learning new
            technologies and collaborating with teams to deliver top-quality
            software solutions. Let's connect!
          </p>
          <a href="#contacts" className="btn btn-primary">
            Let's connect
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
