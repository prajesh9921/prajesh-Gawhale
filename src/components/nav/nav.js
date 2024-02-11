import React from 'react'
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {MdWorkOutline} from 'react-icons/md';

const Nav = ({activeSection}) => {

  return (
    <nav>
      <a href="#" className={activeSection === 'header' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" className={activeSection === 'about' ? 'active' : '' }><AiOutlineUser/></a>
      <a href="#experience" className={activeSection === 'experience' ? 'active' : '' } ><BiBook/></a>
      <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : '' }><MdWorkOutline/></a>
      <a href="#contact" className={activeSection === 'contact' ? 'active' : '' }><BiMessageSquareDetail/></a>
    </nav>
  )
}
export default Nav