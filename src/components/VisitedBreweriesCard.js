import React from 'react'

const VisitedBreweriesCard = ({ name, city, state, website_url }) => {
    return (
        <div className='item'>
            <div className='content'>
                <div>
                    <a className='header' href={website_url} target='_blank'>{name}</a>
                </div>
                <div class="description">{city}, {state}</div> 
            </div>
        </div>
    )
}

export default VisitedBreweriesCard
