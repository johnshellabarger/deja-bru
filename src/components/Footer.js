import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Steve Vaughn & John Shellabarger</h3>
            <span><p>GitHub Repo</p><a href='https://github.com/johnshellabarger/deja-bru'><FaGithub size={30}/></a></span>
        </div>    
    )
}

export default Footer
