import React from 'react'
import BreweryCard from './BreweryCard'

const BreweryCollection = ({ breweries, handleFavorites, handleVisited, favorites, visitedBreweries, clickedMarker }) => {        
    return (
        <div className='ui six cards centered'>
            {breweries.map(brewery => { 
             if(brewery.name === clickedMarker)
                return (
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
                    phoneNumber={brewery.phone}

                />
            )})}
        </div>
    )
}

export default BreweryCollection
