import React from 'react'
import { FaBeer } from "react-icons/fa"
import { useState } from 'react';
import VisitedBreweriesCard from './VisitedBreweriesCard'
import GoogleMapVisited from './GoogleMapVisited'
import Footer from './Footer'

const VisitedBreweriesCollection = ({ visitedBreweries, setVisitedBreweries, favorites, submittedRating, setSubmittedRating, handleFavorites }) => {   
    const [searchText, setSearchText] = useState('')
    const [selectedRating, setSelectedRating] = useState('')

    function handleSearchText(e) {
        setSearchText(e.target.value)
    }

    const handleRating = (e) => {
        const selectedRatingValue = e.target.value
        setSelectedRating(selectedRatingValue)
       
    }

    const handleFilter = () => {
        const filteredArray = visitedBreweries.filter(brewery => brewery.rating === parseInt(selectedRating))
        const allVisitedBreweries = [...visitedBreweries]
        if (selectedRating === '') {
            return allVisitedBreweries
        } else {
            return filteredArray
        }
    }
    
    return (
        <div>
            <h1 className='favorites-header'>Visited Breweries</h1>
                <GoogleMapVisited
                    visitedBreweries={visitedBreweries}
                />
            <div className="searchbar" id='visitedSearch'>
                <label htmlFor="search">Search Your Visited Breweries:</label>&nbsp;&nbsp;
                <input
                    type="text"
                    id="search"
                    placeholder="Type a brewery to search..."
                    onChange={handleSearchText}
                />
            </div>   
            <span id='filterByStars'>
            <label htmlFor="search">Filter By Rating</label>&nbsp;&nbsp;
            <select onChange={handleRating}>
                <option value='' selected='select'>Show All</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select></span>
            <table className='ui celled collapsing padded striped table'>
                <thead>
                    <tr><th>Add to Favorites</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Rating</th>
                    <th>Website</th>
                </tr></thead>
                <tbody className='section'>
                {handleFilter().map(brewery => {
                if (brewery.name.toLowerCase().includes(searchText.toLowerCase()))
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
                        handleFavorites={handleFavorites}
                    />
                )})}
                </tbody>
            </table> 
            <Footer />   
        </div>
    )
}

export default VisitedBreweriesCollection



