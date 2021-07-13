import React from 'react'

const BreweryCard = ({ id, name, city, state, website_url}) => {
    return (
        <div className='ui card'>
            <div className='image'>
                <img src='https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80' alt='beer'></img>
            </div>
            <div className='content'>
                <div className='header'>{name}</div>
                <div className='meta'>{city}, {state}</div>
            </div>
            <div className='content'>
                <p>{website_url}</p>
            </div>
        </div>
    )
}

export default BreweryCard

