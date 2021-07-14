import React from 'react'
import { useState } from 'react';
import FavoriteCard from './FavoriteCard'


const Favorites = ({ favorites, setFavorites }) => {  
    const [sortBy, setSortBy] = useState(false)
    
    const handleSort = (e) => {
        setSortBy(e.target.checked)
        const sortedFavorites = [...favorites].sort(function(a,b) {
            let nameA = a.state.toUpperCase()
            let nameB = b.state.toUpperCase()
            if (nameA < nameB) {
                return -1
            }
            if(nameA > nameB) {
                return 1
            }
        })
        const sortedFavoritesByAlphabet = [...favorites].sort(function(a,b) {
            let nameA = a.name.toUpperCase()
            let nameB = b.name.toUpperCase()
            if (nameA < nameB) {
                return -1
            }
            if(nameA > nameB) {
                return 1
            }
        })
        sortBy ? setFavorites(sortedFavorites) : setFavorites(sortedFavoritesByAlphabet)
    }

    return (
        <div>
            <h1 className='favorites-header'>Favorites</h1>
            <div className='inline field'>
                <div className='ui toggle checkbox'>
                    <input onChange={handleSort} type='checkbox' tabindex='0' name='sort'></input>
                    <label>Sort By Name or State</label>
                </div>     
            </div>
            <h1>Sorted by {sortBy ? 'State' : 'Name'}</h1>
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
