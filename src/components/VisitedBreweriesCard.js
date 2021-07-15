import React from 'react'
import { FaBeer } from "react-icons/fa"

const VisitedBreweriesCard = ({ name, city, state, website_url, favorites }) => {
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
            <td data-label='Comments'>comments here</td>
            <td data-label='Website'><a className='header' href={website_url} target='_blank'>{name}</a></td>
        </tr>
    )
}

export default VisitedBreweriesCard
