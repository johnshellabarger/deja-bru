import React from 'react'
import BreweryCollection from './BreweryCollection'
import Search from './Search'
import GoogleMap from './GoogleMap'

const Home = ({ breweries, favorites, handleChange, handleSubmit, handleFavorites, handleVisited, visitedBreweries }) => {
    return (
        <div className='home'>
            <Search 
                handleChange={handleChange}
                handleSubmit = {handleSubmit}
            />
            <GoogleMap />
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
