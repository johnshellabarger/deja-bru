import React from 'react'
import { FaBeer } from "react-icons/fa"
import { Rating } from 'semantic-ui-react'

const VisitedBreweriesCard = ({ name, city, state, website_url, favorites, rating, id }) => {
    function handleRatingChange(e){
        fetch(`http://localhost:3000/visited/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: parseInt(e.target.getAttribute('aria-posinset'))
            })
        })
     }

    function compareArrayWithBrewery(array){
        for (const item of array) {
            if (item.name === name) {
                return true
            } 
        }
    }
    
    return (
        <tr>
            <td data-label='Name'>{name}&nbsp;{compareArrayWithBrewery(favorites) ? <FaBeer/> : null}</td>
            <td data-label='Location'>{city}, {state}</td>
            <td data-label='Rating'>
                <Rating icon='star' onRate={handleRatingChange} defaultRating={rating} maxRating={5} />
            </td>
            <td data-label='Website'><a className='header' href={website_url} target='_blank' rel="noreferrer">{name}</a></td>
        </tr>
    )
}

export default VisitedBreweriesCard
