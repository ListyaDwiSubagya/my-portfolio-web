import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pp.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img width={340} src={profile_img} alt="" />
        <h1><span>I'am Listya Dwi Subagya,</span> Frontend Developer based in Indonesia.</h1>
        <p>I am a frontend developer from Central Java with a passion for creating dynamic and user-friendly web applications. With a strong foundation in JavaScript framework.
        </p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume'>My Resume</div>
        </div>
    </div>
  )
}

export default Hero