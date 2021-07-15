import React from 'react'
import { FaBeer } from "react-icons/fa"
import VisitedBreweriesCard from './VisitedBreweriesCard'
import GoogleMapVisited from './GoogleMapVisited'
import Footer from './Footer'

const VisitedBreweriesCollection = ({ visitedBreweries, favorites }) => {
    return (
        <div>
            <h1 className='favorites-header'>Visited Breweries</h1>
                <GoogleMapVisited
                    visitedBreweries={visitedBreweries}
                />
            <h4 id='fav-indicated'><FaBeer/>indicates favorite</h4>
            <table className='ui celled collapsing padded striped table'>
                <thead>
                    <tr><th>Name</th>
                    <th>Location</th>
                    <th>Comments</th>
                    <th>Website</th>
                </tr></thead>
                <tbody className='section'>
                {visitedBreweries.map(brewery => {return (
                    <VisitedBreweriesCard 
                        name={brewery.name}
                        city={brewery.city}
                        state={brewery.state}
                        website_url={brewery.website_url}
                        favorites={favorites}
                    />
                )})}
                </tbody>
            </table> 
            <Footer />   
        </div>
    )
}

export default VisitedBreweriesCollection



