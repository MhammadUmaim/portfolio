import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a 
        href="https://instagram.com" 
        className="home__social-icon" 
        target='_blank'>
            <i className='uil uil-instagram'></i>
        </a>

        {/* <a 
        href="https://dribble.com" 
        className="home__social-icon" 
        target='_blank'>
            <i className='uil uil-dribble'></i>
        </a> */}

        <a href="https://github.com/MhammadUmaim" 
        className="home__social-icon" 
        target='_blank'>
            <i className='uil uil-github-alt'></i>
        </a>

    </div>
  )
}

export default Social