import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

    const [menu,setMenu] = useState("about");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0"
    }
    const closeMenu = () => {
        menuRef.current.style.right="-350px"
    }

  return (
    <div className='navbar'>
        <h1 className=''>Listya</h1>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
            <img className='nav-mob-close' onClick={closeMenu} src={menu_close} alt="" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu==="home" ? <img src={underline}/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu==="about" ? <img src={underline}/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p  onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio" ? <img src={underline}/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p  onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact" ? <img src={underline}/> : <></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me </AnchorLink></div>
    </div>
  )
}

export default Navbar