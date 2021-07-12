import React from 'react'
import BeerMap from './BeerMap'
import BreweryCollection from './BreweryCollection'
import Search from './Search'

const Home = ({ breweries }) => {
    return (
        <div>
            <Search />
            <BeerMap />
            <BreweryCollection 
                breweries={breweries}
            />
        </div>
    )
}

export default Home
