import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'My Portfolio',
    github: 'https://github.com',
    demo: 'https://srajaldwivedi.onrender.com/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Lets Journal',
    github: 'https://github.com/Srajal-Cresteyy/Lets-Journal',
    demo: 'https://github.com/Srajal-Cresteyy/Lets-Journal'
  },
  {
    id:3,
    image: IMG3,
    title: 'The News Letter',
    github: 'https://github.com/Srajal-Cresteyy/NewsLetterProject',
    demo: 'https://odd-flannel-shirt-dove.cyclic.app'
  },
  {
    id:4,
    image: IMG4,
    title: 'The ToDO',
    github: 'https://github.com/Srajal-Cresteyy/The-ToDo',
    demo: 'https://github.com/Srajal-Cresteyy/The-ToDo'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2 className='cen'>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt="title" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' >project</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
