import React from 'react'
import BreweryCollection from './BreweryCollection'
import Search from './Search'

const Home = ({ breweries, handleChange }) => {
    return (
        <div>
            <Search 
                handleChange={handleChange}
            />
            <BreweryCollection 
                breweries={breweries}
            />
        </div>
    )
}

export default Home
