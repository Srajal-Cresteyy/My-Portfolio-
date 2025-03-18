import React from 'react'
import './testimonials.css'

import { Pagination, Scrollbar } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const data = [
  {
    icon: 'Linkedin',
    name: 'Linkedin Profile',
    content: 'Hello, there this is the link to my linkedin profile !',
    link: 'https://www.linkedin.com/in/srajal-dwivedi-7275641b2/',
  },
  {
    icon: 'GithubBadge',
    name: 'Github Profile',
    content: 'Hello, there this is the link to my Github profile !',
    link: 'https://github.com/Srajal-Cresteyy',
  },
  {
    icon: 'Leetcode',
    name: 'Leetcode Profile',
    content: 'Hello, there this is the link to my leetcode profile !',
    link: 'https://www.leetcode.com/srajal_dwivedi',
  },
  {
    icon: 'Hackerrank',
    name: 'Hackerrank Profile',
    content: 'Hello, there this is the link to my Hackerrank profile !',
    link: 'https://www.hackerrank.com/srajal72dwivedi?hr_r=1',
  },
]

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'Linkedin':
      return <FaLinkedin className="icosz" />
    case 'GithubBadge':
      return <FaGithub className="icosz" />
    case 'Leetcode':
      return <SiLeetcode className="icosz" />
    case 'Hackerrank':
      return <FaHackerrank className="icosz" />
    default:
      return null
  }
}
const Testimonials = () => {
  return (
    <section id="section">
      <h5 className="sub-heading">My profiles</h5>
      <h2 className="cen">Links</h2>
      <Swiper
        className="container details_container"
        // install Swiper modules
        modules={[Pagination, Scrollbar]}
        spaceBetween={40}
        breakpoints={{
          1065: {
            slidesPerView: 2, // For screens ≥1025px
          },
          600: {
            slidesPerView: 1,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {data.map(({ icon, name, content, link }, index) => {
          return (
            <SwiperSlide key={index} className="details">
              <div className="ico">{getIconComponent(icon)}</div>
              <h5 className="name">{name}</h5>
              <small className="para">{content}</small>
              <div>
                <a href={link} className="btnsz btn-primary">
                  Profile
                </a>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
