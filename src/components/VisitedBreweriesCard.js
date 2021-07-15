import React from 'react'
import { useState } from 'react';
import { FaBeer } from "react-icons/fa"
import { Rating } from 'semantic-ui-react'

const VisitedBreweriesCard = ({ name, city, state, website_url, favorites, rating, id, setSubmittedRating, handleFavorites }) => {
    const [isFavorited, setIsFavorited] = useState(false)
    
    function handleRatingChange(e){
        const clickedRating = parseInt(e.target.getAttribute('aria-posinset'))
        fetch(`http://localhost:3000/visited/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: clickedRating
            })
        })
        setSubmittedRating(clickedRating)
     }

    function compareArrayWithBrewery(array){
        for (const item of array) {
            if (item.name === name) {
                return true
            } 
        }
    }

    function handleFavorite(e){
        handleFavorites(id)
        if(isFavorited === false)
        setIsFavorited(true)
    }
    
    return (
        <tr>
            <td data-label='Add to Favorites'>{compareArrayWithBrewery(favorites) ? 'Already Favorited' : <button className='ui icon button orange' onClick={handleFavorite}><FaBeer/>&nbsp;&nbsp;Cheers!</button>}</td>
            <td data-label='Name'>{name}</td>
            <td data-label='Location'>{city}, {state}</td>
            <td data-label='Rating'>
                <Rating icon='star' onRate={handleRatingChange} defaultRating={rating} maxRating={5} />
            </td>
            <td data-label='Website'><a className='header' href={website_url} target='_blank' rel="noreferrer">{name}</a></td>
        </tr>
    )
}

export default VisitedBreweriesCard
