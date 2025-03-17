import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="heading">My Skills</h2>
      <h5 className="cen">What skills I have</h5>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Core</h4>
                <small className="text-light">HTML/CSS</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Frame-Works</h4>
                <small className="text-light">JQuery</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Languages</h4>
                <small className="text-light">JavaScript</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS-FrameWorks</h4>
                <small className="text-light">Tailwind/BootStrap</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Frontend Libraries</h4>
                <small className="text-light">ReactJs/Material UI</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Tools</h4>
                <small className="text-light">Git/Github/Postman</small>
              </div>
            </article>
          </div>
        </div>
        {/* End Of FrontEnd Component */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Core Java</h4>
                <small className="text-light">8/11/17</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Spring FrameWork</h4>
                <small className="text-light">Version - 3</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Spring Boot</h4>
                <small className="text-light">Version - 3</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>ORMs</h4>
                <small className="text-light">Hibernate/JPA</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>DataBases</h4>
                <small className="text-light">PostGres/MySql</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Other Skills</h4>
                <small className="text-light">
                  OOPs/DBMS/OS/CN/LLD/DSA/CPP
                </small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Tools</h4>
                <small className="text-light">Maven/NPM</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Testing</h4>
                <small className="text-light">JUnit/Mockito</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
