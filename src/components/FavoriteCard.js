import React from 'react'
import {FaTrash} from "react-icons/fa"
import {FaCommentAlt} from "react-icons/fa"
import {FaPlus} from "react-icons/fa"
import {FaEdit} from "react-icons/fa"
import { useState } from 'react'

const FavoriteCard = ({ id, brewery_type, name, city, state, website_url, favorites, setFavorites, favoritesComment}) => {

const [showComments, setShowComments] = useState(false)
const [comments, setComments] = useState('')
const [submittedComment, setSubmittedComment ] = useState(favoritesComment)
const [editComment, setEditComment] = useState(false)


    function handleFavoriteComments(){
        setShowComments(!showComments)
    }

    function handleInputChange(e){
        let value = e.target.value
        setComments(value)
    }

    function toggleEdit(){
        setEditComment(!editComment)
    }

    
    function handleSubmit(e){
        e.preventDefault()
        const newComment = comments
        fetch(`http://localhost:3000/favorites/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: newComment })
        })
        setSubmittedComment(newComment)
        setEditComment(!editComment)
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

            <span className='comments' onClick={handleFavoriteComments}>&nbsp;&nbsp;{!showComments ?  <p><FaCommentAlt />&nbsp; View Comments <img class="ui avatar image" src='https://lh3.googleusercontent.com/pw/AM-JKLWOfnbaH-tiA83auwm7QzXHmhLNTdv86g0k6OsYmbdtoZAhvJnXngldCZIBCo33WMT5zjaVxFw0ygqiVBzaoBWqiqvOsrnkVPzgL6yAqPs7xVhFlkqh018T2wRb7CjHjUG6q0JlNnMn4DdwoMEKR2E=s858-no?authuser=0' alt=''></img></p> : <p><FaCommentAlt />&nbsp;Exit Comments</p>}</span>
            <div class='extra content'>
            { !showComments ? null : <div class="ui message">
                <p>{submittedComment}&nbsp;&nbsp;<FaEdit onClick={toggleEdit}/></p>
            { !editComment ? null :                 <ul class="list">

                    <form onSubmit={handleSubmit}>
                        <input name='comment' onChange={handleInputChange} type='text'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaPlus onClick={handleSubmit}/>
                    </form>
                </ul> }

            </div>}
            </div>
            <div onClick={handleDelete} className='ui button attached button' id='delete-btn'>{<FaTrash />}&nbsp;&nbsp;Remove From Favorites</div>
        </div>
    )
}

export default FavoriteCard
