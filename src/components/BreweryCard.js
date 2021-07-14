import React from 'react'
import { FaBeer } from "react-icons/fa"
import { FaMap } from "react-icons/fa"
import { useState } from 'react'




const BreweryCard = ({ id, name, city, state, website_url, brewery_type, handleFavorites, handleVisited, street, favorites, visitedBreweries, phoneNumber }) => {

    const [isFavorited, setIsFavorited] = useState(false)
    const [isVisited, setIsVisited] = useState(false)

    function handleClick(e){
        handleFavorites(id)
        if(isFavorited === false)
        setIsFavorited(!isFavorited)
    }

    function compareArrayWithBrewery(array){
        for (const item of array) {
            if (item.name === name) {
                return true
            } 
        }
    }

    function handleVisit(e){
        handleVisited(id)
        if(isVisited === false)
        setIsVisited(!isVisited)
    }

    function renderImage(type) {
        switch(type) {
            case 'large':
                return 'https://lh3.googleusercontent.com/pw/AM-JKLUurvWjiGCWpQhYv4cDD06IhPnGH1CRH40XPosqvM82uTdMy71ZQ3N4o-TeepdxTrdO5pdLhiKYi9Cvex1nV_z27bIShzmWIBqQftrcsjQNslM4Gp6utJewqGNwjPRcOirHjXPlTJ9Af323hA2ztMw=s858-no?authuser=0'
                break;
            case 'micro':
                return 'https://lh3.googleusercontent.com/pw/AM-JKLXUhOLznWMpk6j0Zug5EIoeC8-oc5mqGMehDFdICweUlDnUHo5pvyXaG3K3eiqIux8SFsmboUJfhtHwL3E6dskHCMUzfJBsXYsnaz-8ueDzbjcM-S9XVsJN_RBxWQNGK_Kf10Spu1apjaRQLg6nFjk=s858-no?authuser=0'
                break;
            case 'planning':
                return 'https://lh3.googleusercontent.com/pw/AM-JKLVoTepwmHATygHrSIWijq_aMy6yK1wEMXOpqMv0j8e_JhN2n-UTbkrPt-SvmjtlwTpqJmOr5ZJIrshSKSPNnn8Dop8fV5aWRmy1SnlXTVcWdWkp5Db2r_RJ6rnslavq_Jv-zQyaUEVwCDmRKfObs4k=s858-no?authuser=0'
                break;
            case 'brewpub':
                return 'https://lh3.googleusercontent.com/pw/AM-JKLWeerVA40JsOHeFi-6GB3XG0qK6LAENqd_HmOmpjisDXL8eHmtaN3LQFXTs45i4r9mD9mUNU2RMubzEyytcaGnBrahsvfL706nwl4Wm08ePFigoUAAcPhPzkrID02kvUU6Z_gHrA6uVnVdC374MakM=s858-no?authuser=0'
                break;
            default: 
                return 'https://lh3.googleusercontent.com/pw/AM-JKLWOfnbaH-tiA83auwm7QzXHmhLNTdv86g0k6OsYmbdtoZAhvJnXngldCZIBCo33WMT5zjaVxFw0ygqiVBzaoBWqiqvOsrnkVPzgL6yAqPs7xVhFlkqh018T2wRb7CjHjUG6q0JlNnMn4DdwoMEKR2E=s858-no?authuser=0'
        }
    }

    return (
        <div className='ui card'>
            <div className='ui image'>
                <img className='ui small image centered' src={renderImage(brewery_type)} alt='beer'></img>
            </div>
            <div className='content'>
                <div className='header'>{name}</div>
                {street ? <span>{street}</span> : <span>---</span>}
                <div className='meta'> {city}, {state}</div>
                <span onClick={handleVisit}>{!compareArrayWithBrewery(visitedBreweries) ? <span><FaMap/>&nbsp;Visit Brewery</span> : <span id='visited'><FaMap/>&nbsp;Visited</span> }</span>
            </div>
            <div className='description'>
                {website_url ? <a href={website_url}>Visit Brewery Website</a> : <p>No Website Available 😒 </p>}
            </div>
            <div className='extra content'>
                <p>{phoneNumber}</p>
                <span className='right floated'>{brewery_type}</span>
            </div>
            { !compareArrayWithBrewery(favorites) ? 
            <div onClick={handleClick} className='ui button attached button'><FaBeer/>&nbsp;Add Favorite</div> : 
            <div onClick={handleClick} className='ui button attached button' id='added-btn'>Added to Your Favorites</div>
            }   
        </div>
    )
}

export default BreweryCard

