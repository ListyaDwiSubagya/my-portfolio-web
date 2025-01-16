import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_saya.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img width={450} src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className='about-para'>
                    <p> I am a student at Universitas Jember majoring in Information Technology with a strong passion for web
                        development. I have mastered various web technologies such as JavaScript, PHP, MySQL, MongoDB  and
                        frameworks like  ReactJS, ExpressJs and Laravel. </p>
                    <p>I am always enthusiastic about exploring new
                        technologies and enhancing my skills to create innovative and user-friendly web solutions. Committed to
                        continuous learning and ready to take on challenges in the eld of information technology</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>ReactJS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>ExpressJS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p><>PHP</></p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p><>Laravel</></p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p><>MySQL</></p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievment">
            <h1>20+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
    </div>
  )
}

export default About