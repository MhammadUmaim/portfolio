import React from 'react'
import "./about.css"
import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/Muhammad-Umaim.pdf'
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className='about__img' />

        <div className="about__data">
          <Info />

          <p className="about__description">
            I am a passionate Web Developer skilled in HTML, CSS, JavaScript, React, and WordPress. I specialize in building responsive websites with clean UI/UX, optimized performance, and mobile-friendly layouts.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#0000" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19.5 12.0001V13.5001C19.5 17.6422 16.1421 21.0001 12 21.0001C7.85786 21.0001 4.5 17.6422 4.5 13.5001V8C4.5 5.23858 6.73858 3 9.5 3C12.2614 3 14.5 5.23858 14.5 8V13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5V9.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About