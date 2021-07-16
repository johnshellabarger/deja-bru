import React from 'react'
import BreweryCollection from './BreweryCollection'
import Search from './Search'
import GoogleMap from './GoogleMap'
import Footer from './Footer'
import { useState } from 'react'

const Home = ({ breweries, favorites, handleChange, handleSubmit, handleFavorites, handleVisited, visitedBreweries, setBreweries, formData }) => {

    const [clickedMarker, setClickedMarker] = useState('')


    function handleMarkers(bar){
        setClickedMarker(bar)
    }

    return (
        <div className='home'>
  
            <h1 className='favorites-header'>Search for Breweries by City!</h1>
            <Search 
                handleChange={handleChange}
                handleSubmit = {handleSubmit}
            />
            <GoogleMap
                breweries={breweries}
                handleMarkers={handleMarkers}
                />
            <BreweryCollection
                clickedMarker={clickedMarker}
                handleFavorites={handleFavorites} 
                handleVisited={handleVisited}
                breweries={breweries}
                favorites={favorites}
                visitedBreweries={visitedBreweries}
                setBreweries={setBreweries}
                formData={formData}
            />
            <Footer />
        </div>
    )
}

export default Home
