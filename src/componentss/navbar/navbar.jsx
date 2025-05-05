import React from 'react'
import Img from '../../assests/1.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={Img} alt="" className="loogo" />
        </div>
        <div className='items'>
            <div className='item'>
                <a href='#about-me' className='Link'>About</a>
                <a href="/resume.pdf"  className='Link'>Resume</a>
                <a href='#contact' className='Link'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
