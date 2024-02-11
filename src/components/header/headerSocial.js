import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const headerSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/prajesh-gawhale-b0b9b3190/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/prajesh9921" target='_blank' rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default headerSocial