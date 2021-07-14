import React from 'react'
import VisitedBreweriesCard from './VisitedBreweriesCard'
import GoogleMapVisited from './GoogleMapVisited'

const VisitedBreweriesCollection = ({ visitedBreweries }) => {
    return (
        <div className='visited'>
            <h1 className='favorites-header'>Visited Breweries</h1>
                <GoogleMapVisited
                    visitedBreweries={visitedBreweries}
                />
            <div id='visited-breweries' className='ui huge list'>
                {visitedBreweries.map(brewery => {return (
                    <VisitedBreweriesCard 
                        name={brewery.name}
                        city={brewery.city}
                        state={brewery.state}
                        website_url={brewery.website_url}
                    />
                )})}
            </div>    
        </div>
    )
}

export default VisitedBreweriesCollection



