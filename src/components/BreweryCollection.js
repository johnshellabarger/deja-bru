import React from 'react'
import { FaIndent } from 'react-icons/fa'
import BreweryCard from './BreweryCard'

const BreweryCollection = ({ breweries, handleFavorites, handleVisited, favorites, visitedBreweries, clickedMarker, setBreweries, formData }) => {        

    

    function displayInfo(){
        const foundBrewery = [...breweries].filter(bar => bar.name === clickedMarker.name)
        setBreweries(foundBrewery)
    }

    function resetBreweries(){
        fetch(`https://api.openbrewerydb.org/breweries?per_page=50&by_city=${formData.city}&by_state=${formData.state.toLowerCase()}`)
        .then(resp => resp.json())
        .then(data => setBreweries(data))
    }
    
    
    
    return (
        <>
        <h1 className='clickedMarker'>{clickedMarker === null ? null : <span>{clickedMarker.name}</span> }</h1>
        {!clickedMarker ? null : <span><button className='ui button' onClick={displayInfo}>Find</button><button className='ui button' onClick={resetBreweries}>Reset</button></span>}
        <div className='ui six cards centered'>
            {breweries.map(brewery => { 
                return (
                <BreweryCard 
                    clickedMarker={clickedMarker}
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
                    clickedMarker={clickedMarker}

                />
            )})}
        </div>
        </>
    )
}

export default BreweryCollection
