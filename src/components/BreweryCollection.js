import React from 'react'
import BreweryCard from './BreweryCard'

const BreweryCollection = ({ breweries }) => {
    return (
        <div>
            {breweries.map(brewery => { return (
                <BreweryCard 
                    key = {brewery.id}
                    name = {brewery.name}
                    city = {brewery.city}
                    state = {brewery.state}
                    website_url = {brewery.website_url}
                />
            )})}
        </div>
    )
}

export default BreweryCollection
