import React from 'react'

const BreweryCard = ({ id, name, city, state, website_url}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{city}, {state}</h3>
            <p>{website_url}</p>
        </div>
    )
}

export default BreweryCard

