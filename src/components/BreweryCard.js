import React from 'react'

const BreweryCard = ({ id, name, city, state, website_url, brewery_type }) => {
    return (
        <div className='ui card'>
            <div classname='ui image'>
                <img className='ui small image centered' src='https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80' alt='beer'></img>
            </div>
            <div className='content'>
                <div className='header'>{name}</div>
                <div className='meta'>{city}, {state}</div>
            </div>
            <div className='description'>
                {website_url}
            </div>
            <div className='extra content'>
                <span className='right floated'>{brewery_type}</span>
            </div>
        </div>
    )
}

export default BreweryCard

