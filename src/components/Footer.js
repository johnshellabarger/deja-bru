import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <h3>John Shellabarger & Steve Vaughn </h3>
            <a target='_blank' rel="noreferrer" href='https://github.com/johnshellabarger/deja-bru'><FaGithub size={20}/></a>
        </div>    
    )
}

export default Footer
