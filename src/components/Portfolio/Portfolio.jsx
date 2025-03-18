import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/demoWatchIt.gif'
import IMG2 from '../../assets/aboutmeProfileImage.png'
import IMG3 from '../../assets/MedicareHomePage.png'
import IMG4 from '../../assets/portfolio4.jpg'
// If you need IMG5 and IMG6 later, you can import them as well

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Scrollbar } from 'swiper/modules'

const data = [
  {
    id: 1,
    image: IMG3,
    title: 'MediCare',
    github: 'https://github.com/Srajal-Cresteyy/MediCare',
    demo: 'https://medicare-oxuq.onrender.com/',
    demoButton: 'Live Link',
  },
  {
    id: 2,
    image: IMG1,
    title: 'WatchIt',
    github: 'https://github.com/Srajal-Cresteyy/WatchIt',
    demo: 'https://drive.google.com/file/d/1074z6QH4mgTPEzLNHsEiLeNtUbEmf4Dv/view?usp=drive_link',
    demoButton: 'Demo Link',
  },
  {
    id: 3,
    image: IMG2,
    title: 'This Portfolio',
    github: 'https://github.com/Srajal-Cresteyy/My-Portfolio-',
    demo: 'http://srajaldwivedi.onrender.com/',
    demoButton: 'Live Link',
  },
  {
    id: 4,
    image: IMG4,
    title: 'The ToDO',
    github: 'https://github.com/Srajal-Cresteyy/The-ToDo',
    demo: 'https://github.com/Srajal-Cresteyy/The-ToDo',
    demoButton: 'Live Link',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="sub-heading">My Recent Personal</h5>
      <h2 className="cen-portfolio">Projects</h2>
      <Swiper
        spaceBetween={40}
        breakpoints={{
          1065: {
            slidesPerView: 3, // For screens ≥1025px
          },
          600: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination, Scrollbar]}
        pagination={{ clickable: true }}
        className="container portfolio_container "
      >
        {data.map(({ id, image, title, github, demo, demoButton }) => (
          <SwiperSlide key={id} className="swiper swiper-container">
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {demoButton}
                </a>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Portfolio
