import React from 'react'
import { useState, useEffect } from 'react';
import FavoriteCard from './FavoriteCard'


const Favorites = ({ favorites, setFavorites }) => {  
    const [sortByState, setSortByState] = useState(false)
    const [sortByName, setSortByName] = useState(false)

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

    const sortedFavoritesByState = [...favorites].sort(function(a,b) {
        let nameA = a.state.toUpperCase()
        let nameB = b.state.toUpperCase()
        if (nameA < nameB) {
            return -1
        }
        if(nameA > nameB) {
            return 1
        }
    })

    const handleSortByState = (e) => {
        setSortByState(e.target.checked)
        if (e.target.checked) {
            setFavorites(sortedFavoritesByState)
            setSortByName(false)
        } else {
            setFavorites(sortedFavoritesByAlphabet)
            setSortByName(true)
        } 
    }

    const handleSortByName = (e) => {
        setSortByName(e.target.checked)
        if (e.target.checked) {
            setFavorites(sortedFavoritesByAlphabet)
            setSortByState(false)
        } else {
            setFavorites(sortedFavoritesByState)
            setSortByState(true)
        } 
    }

    return (
        <div>
            <h1 className='favorites-header'>Favorite Breweries</h1>
            <div className='inline field'>
                <div className='ui toggle checkbox'>
                    <input onChange={handleSortByState} type='checkbox' checked={sortByState} tabindex='0' name='sort'></input>
                    <label>Sort By State</label>
                </div><br></br><br></br>
                <div className='ui toggle checkbox'>
                    <input onChange={handleSortByName} type='checkbox' checked={sortByName} tabindex='0' name='sort'></input>
                    <label>Sort By Name</label>
                </div>     
            </div>
            <br></br>
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
