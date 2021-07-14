import React from 'react'
import VisitedBreweriesCard from './VisitedBreweriesCard'
import GoogleMap from './GoogleMap'

const VisitedBreweriesCollection = ({ visitedBreweries }) => {
    return (
        <>
            <h1 className='favorites-header'>Visited Breweries</h1>
            <div className='ui huge list'>
                {visitedBreweries.map(brewery => {return (
                    <VisitedBreweriesCard 
                        name={brewery.name}
                        city={brewery.city}
                        state={brewery.state}
                        website_url={brewery.website_url}
                    />
                )})}
            </div>    
        </>
    )
}

export default VisitedBreweriesCollection
