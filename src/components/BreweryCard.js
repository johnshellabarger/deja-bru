import React from 'react'
import { FaBeer } from "react-icons/fa"
import { useState } from 'react'


const BreweryCard = ({ id, name, city, state, website_url, brewery_type, handleFavorites, handleVisited, street, favorites, visitedBreweries, phoneNumber, clickedMarker }) => {

    const [isVisited, setIsVisited] = useState(false)
    
    function addDashesToNumber(number){
        if(number){
            const numWithoutDashes = number.replace(/[^0-9]/g, '')
            if(numWithoutDashes.length > 10) return number.slice(0, -1)
            const dashPlaces = [3, 6]
            return numWithoutDashes
            .split('')
            .reduce((acc, curr, i) => dashPlaces.includes(i) ? [...acc, '-', curr] : [...acc, curr], [])
            .join('')
        } else {
            return '---'
        }
    }
    
    function compareArrayWithBrewery(array){
        for (const item of array) {
            if (item.name === name) {
                return true
            } 
        }
    }

    function handleClick(e){
        handleVisited(id)
        if(isVisited === false)
        setIsVisited(!isVisited)
    }

    function renderImage(type) {
        let imageToReturn
        switch(type) {
            case 'large':
                imageToReturn = 'https://lh3.googleusercontent.com/pw/AM-JKLUurvWjiGCWpQhYv4cDD06IhPnGH1CRH40XPosqvM82uTdMy71ZQ3N4o-TeepdxTrdO5pdLhiKYi9Cvex1nV_z27bIShzmWIBqQftrcsjQNslM4Gp6utJewqGNwjPRcOirHjXPlTJ9Af323hA2ztMw=s858-no?authuser=0'
                break;
            case 'micro':
                imageToReturn = 'https://lh3.googleusercontent.com/pw/AM-JKLXUhOLznWMpk6j0Zug5EIoeC8-oc5mqGMehDFdICweUlDnUHo5pvyXaG3K3eiqIux8SFsmboUJfhtHwL3E6dskHCMUzfJBsXYsnaz-8ueDzbjcM-S9XVsJN_RBxWQNGK_Kf10Spu1apjaRQLg6nFjk=s858-no?authuser=0'
                break;
            case 'planning':
                imageToReturn = 'https://lh3.googleusercontent.com/pw/AM-JKLVoTepwmHATygHrSIWijq_aMy6yK1wEMXOpqMv0j8e_JhN2n-UTbkrPt-SvmjtlwTpqJmOr5ZJIrshSKSPNnn8Dop8fV5aWRmy1SnlXTVcWdWkp5Db2r_RJ6rnslavq_Jv-zQyaUEVwCDmRKfObs4k=s858-no?authuser=0'
                break;
            case 'brewpub':
                imageToReturn = 'https://lh3.googleusercontent.com/pw/AM-JKLWeerVA40JsOHeFi-6GB3XG0qK6LAENqd_HmOmpjisDXL8eHmtaN3LQFXTs45i4r9mD9mUNU2RMubzEyytcaGnBrahsvfL706nwl4Wm08ePFigoUAAcPhPzkrID02kvUU6Z_gHrA6uVnVdC374MakM=s858-no?authuser=0'
                break;
            default: 
                imageToReturn = 'https://lh3.googleusercontent.com/pw/AM-JKLWOfnbaH-tiA83auwm7QzXHmhLNTdv86g0k6OsYmbdtoZAhvJnXngldCZIBCo33WMT5zjaVxFw0ygqiVBzaoBWqiqvOsrnkVPzgL6yAqPs7xVhFlkqh018T2wRb7CjHjUG6q0JlNnMn4DdwoMEKR2E=s858-no?authuser=0'
        }
        return imageToReturn
    }

    return (
        <div className='ui card'>
            <div className='ui medium centered image'>
                <img src={renderImage(brewery_type)} alt='beer'></img>
            </div>
            <div className='content' id='brewery'>
                <div className='header'>{name}</div>
                {street ? <span id='street'>{street}</span> : <span>---</span>}
                {/* <div className='meta'> {city}, {state}</div> */}
                <p>{compareArrayWithBrewery(favorites) ? <span id='visitedBrewery' style={{fontWeight: 900}}><FaBeer/>&nbsp;Favorited Brewery!</span> : null }</p>
            </div>
            
                {website_url ? <a target='_blank' rel="noreferrer" href={website_url}>Visit Brewery Website</a> : <>No Website Available ????</>}
                <p className='brewery-type'>{brewery_type}</p>
            
            <div className='extra content'>
                <div id='phone'>Ph: {addDashesToNumber(phoneNumber)}</div>
            </div>
            { !compareArrayWithBrewery(visitedBreweries) ? 
            <div onClick={handleClick} className='ui button attached button'><FaBeer/>&nbsp;Add to Visited</div> : 
            <div onClick={handleClick} className='ui button attached button' id='added-btn'>Already Visited</div>
            }   
        </div>
    )
}

export default BreweryCard

