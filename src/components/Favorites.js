import React from 'react'
import BreweryCard from './BreweryCard'

const Favorites = ({ favorites, handleFavorites }) => {
    return (
        <div>
            <h1>Favorites</h1>
            <div className='ui link cards centered favorites'>
                {favorites.map(favorite => {return (
                    <BreweryCard 
                    key = {favorite.id}
                    id = {favorite.id}
                    name = {favorite.name}
                    city = {favorite.city}
                    state = {favorite.state}
                    website_url = {favorite.website_url}
                    brewery_type={favorite.brewery_type}
                    handleFavorites={handleFavorites}
                />
                )})}
            </div>
        </div>
    )
}

export default Favorites
