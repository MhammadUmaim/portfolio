import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Umaim</h1>

                <ul className="footer__list">

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.instagram.com/m.umaim_01/"
                        className="footer__social-link"
                        target='_blank'>
                        <i className='uil uil-instagram'></i>
                    </a>

                    <a
                        href="https://x.com/Muhammad_Umaim"
                        className="footer__social-link"
                        target='_blank'
                        aria-label="Twitter (X)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M23 4.5c-.8.35-1.6.6-2.5.7.9-.55 1.6-1.4 1.9-2.4-.8.5-1.7.9-2.7 1.1C19.1 3 17.9 2.5 16.6 2.5c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.12 1-3.7-.2-7-2-9.2-4.7-.4.6-.6 1.4-.6 2.2 0 1.5.8 2.8 2 3.5-.7 0-1.3-.2-1.8-.5v.05c0 2.1 1.5 3.9 3.4 4.3-.35.1-.75.15-1.2.15-.3 0-.6 0-.9-.05.6 2 2.5 3.5 4.7 3.5-1.7 1.3-3.8 2-6.1 2-.4 0-.8 0-1.2-.05 2.1 1.4 4.6 2.2 7.2 2.2 8.6 0 13.3-7 13.3-13 0-.2 0-.4 0-.6.9-.65 1.6-1.4 2.2-2.3z" fill="none"></path>
                        </svg>
                    </a>

                    <a href="https://github.com/MuhammadUmaim"
                        className="footer__social-link"
                        target='_blank'>
                        <i className='uil uil-github-alt'></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    &#169; 2026 MuhammadUmaim. | All rights reserved - made with ♥
                </span>
            </div>
        </footer>
    )
}

export default Footer