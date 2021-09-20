import React from 'react'
import logo from '../images/deja-bru-logo.png'

const LandingPage = () => {
    return (
        <div>
            <img className='animate__animated animate__backInDown' src={logo} alt='deja-bru logo'></img>
            {/* <h1 id='intro-text' className='animate__animated animate__backInDown'>Welcome to Deja-Bru!</h1> */}
            <div id="background-wrap" className='animate__animated animate__slideInUp'>
                <div class="bubble x1"></div>
                <div class="bubble x2"></div>
                <div class="bubble x3"></div>
                <div class="bubble x4"></div>
                <div class="bubble x5"></div>
                <div class="bubble x6"></div>
                <div class="bubble x7"></div>
                <div class="bubble x8"></div>
                <div class="bubble x9"></div>
                <div class="bubble x10"></div>
            </div>
            <img src='' alt=''></img>
        </div>
    )
}

export default LandingPage
