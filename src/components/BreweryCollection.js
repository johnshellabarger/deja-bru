import React from 'react'
import BreweryCard from './BreweryCard'

const BreweryCollection = ({ breweries, handleFavorites, handleVisited, favorites, visitedBreweries }) => {        
    return (
        <div className='ui link cards centered'>
            {breweries.map(brewery => { return (
                <BreweryCard 
                    brewery={brewery}
                    key = {brewery.id}
                    id = {brewery.id}
                    name = {brewery.name}
                    city = {brewery.city}
                    state = {brewery.state}
                    website_url = {brewery.website_url}
                    brewery_type={brewery.brewery_type}
                    handleFavorites={handleFavorites}
                    handleVisited={handleVisited}
                    street={brewery.street}
                    favorites={favorites}
                    visitedBreweries={visitedBreweries}
                />
            )})}
        </div>
    )
}

export default BreweryCollection
