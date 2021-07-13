import React from 'react'
import BreweryCollection from './BreweryCollection'
import Search from './Search'

const Home = ({ breweries, handleChange, handleSubmit }) => {
    return (
        <div>
            <Search 
                handleChange={handleChange}
                handleSubmit = {handleSubmit}
            />
            <BreweryCollection 
                breweries={breweries}
            />
        </div>
    )
}

export default Home
