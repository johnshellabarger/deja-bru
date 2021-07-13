import React from 'react'
import FavoriteCard from './FavoriteCard'


const Favorites = ({ favorites, setFavorites }) => {
    return (
        <div>
            <h1>Favorites</h1>
            <div className='ui link cards centered favorites'>
                {favorites.map(favorite => {return (
                    <FavoriteCard 
                    key = {favorite.id}
                    id = {favorite.id}
                    name = {favorite.name}
                    city = {favorite.city}
                    state = {favorite.state}
                    website_url = {favorite.website_url}
                    brewery_type={favorite.brewery_type}
                    setFavorites={setFavorites}
                    favorites={favorites}
                />
                )})}
            </div>
        </div>
    )
}

export default Favorites
