import React from 'react'
import BreweryCollection from './BreweryCollection'
import Search from './Search'
import GoogleMap from './GoogleMap'

const Home = ({ breweries, favorites, handleChange, handleSubmit, handleFavorites }) => {
    return (
        <div className='home'>
            <Search 
                handleChange={handleChange}
                handleSubmit = {handleSubmit}
            />
            <GoogleMap />
            <BreweryCollection
                handleFavorites={handleFavorites} 
                breweries={breweries}
                favorites={favorites}
            />
        </div>
    )
}

export default Home
