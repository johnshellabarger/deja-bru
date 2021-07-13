import React from 'react'
import BreweryCollection from './BreweryCollection'
import Search from './Search'
import GoogleMap from './GoogleMap'

const Home = ({ breweries, handleChange, handleSubmit }) => {
    return (
        <div>
            <Search 
                handleChange={handleChange}
                handleSubmit = {handleSubmit}
            />
            <GoogleMap />
            <BreweryCollection 
                breweries={breweries}
            />
        </div>
    )
}

export default Home
