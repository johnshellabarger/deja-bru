import React from 'react'
import {FaTrash} from "react-icons/fa"
import {FaCommentAlt} from "react-icons/fa"
import { useState } from 'react'

const FavoriteCard = ({ id, brewery_type, name, city, state, website_url, favorites, setFavorites}) => {

const [showComments, setShowComments] = useState(false)


    function handleFavoriteComments(){
        setShowComments(!showComments)
    }


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
            <span className='comments' onClick={handleFavoriteComments}><FaCommentAlt />&nbsp;&nbsp;{!showComments ?  'View Comments' : 'Add Comments'}</span>
            <div class='extra content'>
            { !showComments ? null : <div class="ui message">
                <ul class="list">
                   <input type='text'></input>
                </ul>
            </div>}
            <div class="right floated author">
                <img class="ui avatar image" src='https://lh3.googleusercontent.com/pw/AM-JKLWOfnbaH-tiA83auwm7QzXHmhLNTdv86g0k6OsYmbdtoZAhvJnXngldCZIBCo33WMT5zjaVxFw0ygqiVBzaoBWqiqvOsrnkVPzgL6yAqPs7xVhFlkqh018T2wRb7CjHjUG6q0JlNnMn4DdwoMEKR2E=s858-no?authuser=0'></img>
            </div>
            </div>
            <div onClick={handleDelete} className='ui button attached button' id='delete-btn'>{<FaTrash />}&nbsp;&nbsp;Remove From Favorites</div>
        </div>
    )
}

export default FavoriteCard
