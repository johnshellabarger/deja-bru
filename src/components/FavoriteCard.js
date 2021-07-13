import React from 'react'
import {FaTrash} from "react-icons/fa"

const FavoriteCard = ({ id, brewery_type, name, city, state, website_url, favorites, setFavorites}) => {
    const handleDelete = () => {
        const arrayWithoutDeletedBrewery = favorites.filter(favorite => id !== favorite.id)
        setFavorites(arrayWithoutDeletedBrewery)
        fetch(`http://localhost:3000/favorites/${id}`, {
            method: 'DELETE'
        })
    }
    
    return (
         <div className='ui card'>
            <div className='content'>
                <div className='header'>{name}</div>
                <div className='meta'>{city}, {state}</div>
                <div className='description'>
                    {website_url ? <a href={website_url}>Visit Brewery Website</a> : <p>No Website Available 😒 </p>}
                </div>
            </div>
            <div onClick={handleDelete} className='ui button attached button' id='added-btn'>{<FaTrash />}Remove From Favorites</div>
        </div>
    )
}

export default FavoriteCard
