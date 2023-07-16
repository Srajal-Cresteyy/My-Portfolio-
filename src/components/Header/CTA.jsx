import React from 'react'
// import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://drive.google.com/drive/folders/1SMVUl456VWiLuQBvdWzA1vAnPVRifyTb?usp=sharing" className='btn' target='_blank'>Download CV</a>
        {/* <a href={CV} download className='btn'>Download CV</a> */}
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA

