import React from 'react'
import "./services.css"
import { useState } from 'react'

const Services = () => {

    const [toggle, setToggle] = useState(0);

    const toggleTab = (idx) => {
        setToggle(idx)
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>


            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uis uis-web-grid services__icon"></i>
                        <h3 className='services__title'>
                            Frontend <br /> Web Developer
                        </h3>
                    </div>

                    <span className="services__button"
                    onClick={() => toggleTab(1)}
                    >View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggle === 1 ? "services__modal-active services__modal" : "services__modal" }>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title"> Frontend Web Developer</h3>
                            <p className="services__modal-description">
                                I build modern, fast, and fully responsive websites that work smoothly on all devices.                    </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop clean and user-friendly React applications with a smooth and intuitive user experience.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I improve existing website designs by fixing layout, spacing, colors, and responsiveness to make them look professional.                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create high-converting landing pages designed to attract leads and customers.                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Services