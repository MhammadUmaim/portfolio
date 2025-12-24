import React from 'react'
import { useState } from 'react'
import "./education.css"

const Education = () => {

    const [toggle, setToggle] = useState(0);

    const toggleTab = (idx) => {
        setToggle(idx)
    }


    return (
        <section className="education__main">
            <h2 className="section__title">Education</h2>
            <span className="section__subtitle">My certifications & Skills</span>




            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-graduation-cap services__icon"></i>
                        <h3 className='services__title'>
                            My Education <br /> Journey
                        </h3>
                    </div>

                    <span className="services__button"
                        onClick={() => toggleTab(1)}
                    > View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggle === 1 ? "services__modal-active services__modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            
                            <h3 className="services__modal-title"> My Education Journey</h3>
                            <p className="services__modal-description">
                                My learning path and achievements
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <div className='education__1'>
                                        <p className="services__modal-info education">
                                            MERN Stack Web Development
                                        </p>
                                        <p className='date'>
                                            SMIT - 2024
                                        </p>
                                    </div>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <div className="education__1">
                                        <p className="services__modal-info education">
                                            Coding Night Participation
                                        </p>
                                        <p className='date'>
                                            SMIT - 2025
                                        </p>
                                    </div>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <div className="education__1">
                                        <p className="services__modal-info education">
                                            IBT Mathematics Participation
                                        </p>
                                        <p className='date'>
                                            Sharjah - 2015, 2016
                                        </p>
                                    </div>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <div className="education__1">
                                        <p className="services__modal-info education">
                                            IBT English Participation
                                        </p>
                                        <p className='date'>
                                            Sharjah - 2015, 2016
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>



            </div>

        </section>
    )
}

export default Education