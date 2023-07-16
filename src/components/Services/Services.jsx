import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Know More</h5>
      <h2 className='cen'>About Me</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Education</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon sz'/>
              {/* <p>College : BTech CSE : 2024</p> */}
              <p>BTech CSE : 2024 <br /> Pranveer Singh Institute of Technology</p>
            </li>
            <li>
              <BiCheck className='service_list-icon sz'/>
              {/* <p>College : DE Electronics & Comm : 2021 </p> */}
              <p>DE Electronics & Comm : 2021 <br/> Manyawar Kanshiram Govt. Polytechnic</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              {/* <p>High School : 2018 </p> */}
              <p>High School : 2018 <br/> Mercy Memorial School</p>
            </li>
          </ul>
        </article>
        {/* End of Education */}
        <article className='service'>
          <div className="service_head">
            <h3>Interests</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>FrontEnd Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Backend Development </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Data Structures & Algorithms</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Video Editing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Graphic Design</p>
            </li>
          </ul>
        </article>

        {/* End of Interest */}

        <article className='service'>
          <div className="service_head">
            <h3>Certifications</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p><a href="https://www.hackerrank.com/certificates/3bb00a921053">Problem Solving : Hackerrank </a></p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p><a href="https://www.hackerrank.com/certificates/24adf1bed9bf">SQL : Hackerrank</a></p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p><a href="https://www.udemy.com/certificate/UC-870586c1-fe96-40a1-ade5-81a09b02d613/">Web Dev BootCamp : Udemy : Angela Yu</a></p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services