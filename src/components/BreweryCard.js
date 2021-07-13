import React from 'react'
import {FaBeer} from "react-icons/fa"
import { useState } from 'react'


const BreweryCard = ({ id, name, city, state, website_url, brewery_type, handleFavorites, street, favorites }) => {
    const [isFavorited, setIsFavorited] = useState(false)

    function handleClick(e){
        handleFavorites(id)
        if(isFavorited === false)
        setIsFavorited(!isFavorited)
    }

    function findFavoritesInBreweries(){
        for (const item of favorites) {
            if (item.name === name) {
                return true
            } 
        }
    }

    function renderImage(type) {
        switch(type) {
            case 'large':
                return 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                break;
            case 'micro':
                return 'https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                break;
            case 'planning':
                return 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                break;
            case 'brewpub':
                return 'https://images.unsplash.com/photo-1560090143-1b37560ce79f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
                break;
            default: 
                return 'https://images.unsplash.com/photo-1557754011-7a79c0f66ef0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        }
    }

    return (
        <div className='ui card'>
            <div className='ui image'>
                <img className='ui small image centered' src={renderImage(brewery_type)} alt='beer'></img>
            </div>
            <div className='content'>
                <div className='header'>{name}</div>
                <span>{street}</span>
                <div className='meta'> {city}, {state}</div>
            </div>
            <div className='description'>
                {website_url ? <a href={website_url}>Visit Brewery Website</a> : <p>No Website Available 😒 </p>}
            </div>
            <div className='extra content'>
                <span className='right floated'>{brewery_type}</span>
            </div>
            { !findFavoritesInBreweries() ? 
            <div onClick={handleClick} className='ui button attached button'><FaBeer/>&nbsp;Add Favorite</div> : 
            <div onClick={handleClick} className='ui button attached button' id='added-btn'>Added to Your Favorites</div>
            }   
        </div>
    )
}

export default BreweryCard

