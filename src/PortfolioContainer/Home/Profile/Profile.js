import React from 'react'
import Typical from 'react-typical'
import "./Profile.css";

export default function 
() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className='profile-deatils'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='#'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    </div>   
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Diluksha Shamal</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                             loop={Infinity}
                             steps={[
                                "Enthusiastic AI/ML 🤖",
                                1000,
                                "Full Stack Dev 👨‍💻",
                                1000,
                                "MERN Stack Dev 😎",
                                1000,
                                "Google Cloud Innovator 🌐",
                                1000,
                             ]

                             }
                             />
                        </h1>
                        <span className='profile-role-tagline'>
                        To make the world a better place ...what can designer do for you...
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="Diluksha_Shamal.pdf" download='Diluksha Shamal.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>

            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>

        </div>
    </div>
  )
}

