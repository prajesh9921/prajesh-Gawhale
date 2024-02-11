import React from 'react'
import './footer.css';
import {BsInstagram, BsTwitter} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';


const footer = () => {
  return (
    <footer data-section id="footer">
      <a href="#" className='footer_logo'>Prajesh Gawhale</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/prajesh-gawhale-b0b9b3190/" target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
        <a href="https://www.instagram.com/prajesh_30/" target='_blank' rel="noreferrer"><BsInstagram/></a>
        <a href="https://twitter.com/Prajesh_30" target='_blank' rel="noreferrer"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Prajesh Gawhale. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer