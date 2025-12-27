import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {

     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zecdo2j', 'template_kwl7knu', form.current, {
        publicKey: 'VbEnqK_dpJ10VEg_h',
      })
     e.target.reset();
  };


    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">

                <div className="contact__content">
                    <h3 className="contact__title">talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">muhammadumaim@gmail.com</span>

                            <a href="mailto:muhammadumaim7@gmail.com" className="contact__button">Write me <i className="uis uis-angle-right contact__button-icon"></i></a>
                        </div>



                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+92-311-128-4492</span>

                            <a href="https://api.whatsapp.com/send?phone=923111284492&text=Hello%2C%20more%20information%21" className="contact__button">Write me <i className="uis uis-angle-right contact__button-icon"></i></a>
                        </div>


                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>


                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">Muhammad Umaim</span>

                            <a href="https://linkedin.com/in/muhammad-umaim" className="contact__button">Write me <i className="uis uis-angle-right contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name='name' className='contact__form-input'
                                placeholder='Insert Your Name'
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email" name='email' className='contact__form-input'
                                placeholder='Insert your email'
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10"
                                className='contact__form-input' placeholder='Write your project'
                            ></textarea>
                        </div>

                        <button className="button button--flex" >
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none" stroke="#fff" stroke-width="1.5">
                                <path d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z" />
                                <path d="M11.4999 12.5L14.9999 9" />
                            </svg>
                        </button>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact