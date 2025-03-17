import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5 className="sub-heading">Know More</h5>
      <h2 className="cen">About Me</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Education</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon sz" />
              {/* <p>College : BTech CSE : 2024</p> */}
              <p>
                <strong>BTech CSE : 2024</strong>
                <br /> <span>Pranveer Singh Institute of Technology</span>
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon sz" />
              {/* <p>College : DE Electronics & Comm : 2021 </p> */}
              <p>
                <strong>DE Electronics & Comm : 2021</strong>
                <br /> <span>Manyawar Kanshiram Govt. Polytechnic</span>
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              {/* <p>High School : 2018 </p> */}
              <p>
                <strong>High School : 2018</strong>
                <br />
                <span>Mercy Memorial School</span>
              </p>
            </li>
          </ul>
        </article>
        {/* End of Education */}
        <article className="service">
          <div className="service_head">
            <h3>Work Experience</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon sz" />
              <p>
                <strong>Accenture</strong> | <span>29'SEP'24 - Present</span>
                <br />
                <span className="description">
                  - Assisted in developing and testing JavaEE software.
                </span>
                <br />
                <span className="description">
                  - Worked with senior engineers across the SDLC, from design to
                  unit testing.
                </span>
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon sz" />
              <p>
                <strong>Nucleus Software Exports</strong> |{' '}
                <span>05'FEB'24 - 19'SEP'24</span>
                <br />
                <strong>FinnOneNeo-Training Version:</strong>
                <br />
                <span className="description">
                  - Optimized data retrieval & enhanced the Deviation Module API
                  in CAS.
                </span>
                <br />
                <span className="description">
                  - Collaborated for seamless FinnOneNeo CAS integration.
                </span>
              </p>
            </li>
          </ul>
        </article>

        {/* End of Interest */}

        <article className="service">
          <div className="service_head">
            <h3>Achievements</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <strong>LeetCode Rating : </strong> 1676 (Top 13%)
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <strong>Contest Rank : </strong>
                1113 in Weekly Contest #333
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <strong>Problem-Solving : </strong>
                500+ LeetCode questions, 5★ on HackerRank
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
