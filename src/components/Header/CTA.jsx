import React from 'react'
// import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1i3zlPKo_mN-GyYpDDLFSGWNEwkBdASHt/view?usp=drive_link"
        className="btn"
        target="_blank"
      >
        Download CV
      </a>
      {/* <a href={CV} download className='btn'>Download CV</a> */}
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
