import React from 'react'
import BeerMap from './BeerMap'
import BreweryCollection from './BreweryCollection'
import Search from './Search'

const Home = () => {
    return (
        <div>
            <Search />
            <BeerMap />
            <BreweryCollection />
        </div>
    )
}

export default Home
