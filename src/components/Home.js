import React from 'react'
import BreweryCollection from './BreweryCollection'
import Search from './Search'
import GoogleMap from './GoogleMap'

const Home = ({ breweries, favorites, handleChange, handleSubmit, handleFavorites, handleVisited, visitedBreweries }) => {
    return (
        <div className='home'>
            <h1 className='favorites-header'>Search for Breweries by City!</h1>
            <Search 
                handleChange={handleChange}
                handleSubmit = {handleSubmit}
            />
            <GoogleMap
                breweries={breweries}
            />
            <BreweryCollection
                handleFavorites={handleFavorites} 
                handleVisited={handleVisited}
                breweries={breweries}
                favorites={favorites}
                visitedBreweries={visitedBreweries}
            />
        </div>
    )
}

export default Home
