import React from 'react'
import { FaBeer } from "react-icons/fa"
import { useState } from 'react';
import VisitedBreweriesCard from './VisitedBreweriesCard'
import GoogleMapVisited from './GoogleMapVisited'
import Footer from './Footer'

const VisitedBreweriesCollection = ({ visitedBreweries, favorites, setVisitedBreweries, submittedRating, setSubmittedRating }) => {   
    const [selectedRating, setSelectedRating] = useState('')
    
    const toggleGenre = (e) => {
       setSelectedRating(e.target.value)
    }
    
    return (
        <div>
            <h1 className='favorites-header'>Visited Breweries</h1>
                <GoogleMapVisited
                    visitedBreweries={visitedBreweries}
                />
            <h2 className='filter-by-stars favorites-header'>Filter By Stars</h2>
            <select onChange={toggleGenre}>
                <option value='' selected='select'>Show All</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <h4 id='fav-indicated'><FaBeer/>&nbsp;&nbsp;indicates favorite</h4>
            <table className='ui celled collapsing padded striped table'>
                <thead>
                    <tr><th>Name</th>
                    <th>Location</th>
                    <th>Rating</th>
                    <th>Website</th>
                </tr></thead>
                <tbody className='section'>
                {visitedBreweries.map(brewery => {
                    if (selectedRating === '') {
                    return (
                    <VisitedBreweriesCard 
                        key={brewery.id}
                        id={brewery.id}
                        name={brewery.name}
                        city={brewery.city}
                        state={brewery.state}
                        website_url={brewery.website_url}
                        favorites={favorites}
                        visitedBreweries={visitedBreweries}
                        brewery={brewery}
                        rating={brewery.rating}
                        submittedRating={submittedRating}
                        setSubmittedRating={setSubmittedRating}
                    />
                )} else if (parseInt(selectedRating) === brewery.rating) {
                    return (
                        <VisitedBreweriesCard 
                            key={brewery.id}
                            id={brewery.id}
                            name={brewery.name}
                            city={brewery.city}
                            state={brewery.state}
                            website_url={brewery.website_url}
                            favorites={favorites}
                            visitedBreweries={visitedBreweries}
                            brewery={brewery}
                            rating={brewery.rating}
                            submittedRating={submittedRating}
                            setSubmittedRating={setSubmittedRating}
                        />
                    )
                }})}
                </tbody>
            </table> 
            <Footer />   
        </div>
    )
}

export default VisitedBreweriesCollection



